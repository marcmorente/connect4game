import {
    createInterface,
    type Interface,
    type ReadLineOptions,
} from "readline";
import {Board} from "./Board";
import {Token} from "./Token";
import {Color} from "./Color";
import {Result} from "./Result";
import {Player} from "./Player";
import {Turn} from "./Turn";

export class Game {
    private readonly reader: Interface;
    private readonly board: Board;
    private result: Result;
    private readonly turn: Turn;
    private players = { player1: new Player('Player 1', Color.red), player2: new Player('Player 2', Color.yellow) }

    constructor(readLineOptions: ReadLineOptions) {
        this.reader = createInterface(readLineOptions);
        this.board = new Board();
        this.turn = new Turn(this.players, this.board, this.reader);
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
