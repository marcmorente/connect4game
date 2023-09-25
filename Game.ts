import { Board } from "./Board";
import { Token } from "./Token";

(function main(): void {
    const board = new Board();
    board.placeToken(5, 5, new Token("X"));
    board.draw();
}());