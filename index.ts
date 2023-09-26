import { Game } from "./Game";


(function main(): void {
    const game = new Game({
        input: process.stdin,
        output: process.stdout
    });
    game.start();
}());