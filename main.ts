import { Game } from './';

var realConsoleLog = console.log;
console.log = function (...messages) {
    document.writeln(...messages, '<br>');
    realConsoleLog(...messages);
};

var game = new Game();
game.run();