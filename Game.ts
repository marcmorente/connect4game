import {
    createInterface,
    type Interface,
    type ReadLineOptions,
} from "readline";
import {Board} from "./Board";
import {Result} from "./Result";
import {Turn} from "./Turn";

export class Game {
    private readonly reader: Interface;
    private readonly board: Board;
    private result: Result;
    private readonly turn: Turn;

    constructor(readLineOptions: ReadLineOptions) {
        this.reader = createInterface(readLineOptions);
        this.board = new Board();
        this.turn = new Turn(this.board, this.reader);
        this.result = new Result(this.turn);
    }

    start(): void {
        this.board.draw();
        if (this.result.done()) {
            this.reader.close();
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
