import { Player, GameTable } from './';

export class Game {

    run() {

        var player1 = new Player("Bob");
        var player2 = new Player("John");

        var gameTable = new GameTable();
        gameTable.players.push(player1);
        gameTable.players.push(player2);
        gameTable.resetCardDeck();
        gameTable.shuffleCardDeck();

        console.log(gameTable.cards.slice());
        console.log();

        while (true) {

            if (!gameTable.deal()) {
                gameTable.showResults();
                break;
            }

            console.log();

            gameTable.players.forEach(player => {
                player.move();
            });
        }
    }

}
