import { Card, Player, GameTable } from './';

export class Game {

    run() {

        var player1 = new Player("Bob");
        var player2 = new Player("John");

        var gameTable = new GameTable();
        gameTable.players.push(player1);
        gameTable.players.push(player2);
        gameTable.resetCardDeck();
        gameTable.shuffleCardDeck();

        while (true) {

            if (!gameTable.deal()) {
                gameTable.showResults();
                break;
            }

            gameTable.currentMover = gameTable.currentMover || gameTable.players[0];
            gameTable.cardsOnTable = gameTable.currentMover.move();

            gameTable.players.forEach(player => {
                if (player == gameTable.currentMover)
                    return;

                var repliedCards = player.beat(gameTable.cardsOnTable);
                var canBeat = this.canBeat(gameTable.cardsOnTable, repliedCards);

                if (canBeat) {
                    gameTable.cardsOnTable = repliedCards;
                    gameTable.currentMover = player;
                }

            });
        }
    }

    canBeat(moved: Card[], repliedCards: Card[]): boolean {
        

        return false;
    }

}
