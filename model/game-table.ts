import { Suit, Card, Player, shuffle } from './';

export class GameTable {
    cards: Card[] = [];
    players: Player[] = [];

    deal() {
        if (!this.cards.length)
            return console.log('no cards left'), false;

        for (let index = 0; index < 4; index++) {

            this.players.forEach(player => {
                let card = this.cards.pop();
                if (card) player.cards.push(card);
            });

        }

        return console.log('cards left ', this.cards.length), true;
    }

    showResults() {
        var totalPoints = 0;

        this.players.forEach(player => {
            totalPoints += player.points;
            console.log(`${player.name}: ${player.points}`);
        });

        console.log('Total points: ' + totalPoints);
    }

    shuffleCardDeck() {
        shuffle(this.cards);
    }

    resetCardDeck() {
        this.cards = [];

        for (let value = 6; value < 15; value++) {
            this.cards.push(new Card(Suit.clubs, value, this.convertToCardText(value), this.convertToBuraPoints(value), Card.convetToUTFSuit(Suit.clubs)));
            this.cards.push(new Card(Suit.hearts, value, this.convertToCardText(value), this.convertToBuraPoints(value), Card.convetToUTFSuit(Suit.hearts)));
            this.cards.push(new Card(Suit.spades, value, this.convertToCardText(value), this.convertToBuraPoints(value), Card.convetToUTFSuit(Suit.spades)));
            this.cards.push(new Card(Suit.diamonds, value, this.convertToCardText(value), this.convertToBuraPoints(value), Card.convetToUTFSuit(Suit.diamonds)));
        }
    }

    private convertToCardText(value: number): string {
        switch (value) {
            case 11: return 'J';
            case 12: return 'Q';
            case 13: return 'K';
            case 14: return 'A';
            default: return value.toString();
        }
    }

    private convertToBuraPoints(value: number): number {
        switch (value) {
            // J, Q, K
            case 11: return 2;
            case 12: return 3;
            case 13: return 4;

            // 10 and Ace
            case 10: return 10;
            case 14: return 11;

            default: return 0;
        }
    }
}