import { Game } from './model/';

// var realConsoleLog = console.log;
// console.log = function (...messages: any[]) {
//     document.writeln(...messages, '<br>');
//     realConsoleLog(...messages);
// };

var game = new Game();
game.run();