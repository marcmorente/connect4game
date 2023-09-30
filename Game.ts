import {
    createInterface,
    type Interface,
    type ReadLineOptions,
} from "readline";
import {Board} from "./Board";
import {Result} from "./Result";
import {Turn} from "./Turn";
import { View } from "./View";

export class Game {
    private readonly view: View;
    private readonly board: Board;
    private result: Result;
    private readonly turn: Turn;

    constructor() {
        this.view = new View();
        this.board = new Board();
        this.turn = new Turn(this.board, this.view);
        this.result = new Result(this.turn);
    }

    start(): void {
        this.board.draw();
        if (this.result.done()) {
            this.view.close();
            return;
        }

        this.turn.takeTurn().then(() => {
            if (!this.result.isFinished()) {
                this.turn.switchPlayer();
            }
            this.start();
        });
    }
}
