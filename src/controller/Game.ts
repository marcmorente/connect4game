import {Board} from "../model/Board";
import {Result} from "./Result";
import {Turn} from "./Turn";
import {StandardCli} from "../view/StandardCli";

export class Game {
    private readonly cli: StandardCli;
    private readonly board: Board;
    private readonly result: Result;
    private readonly turn: Turn;

    constructor() {
        this.cli = new StandardCli();
        this.board = new Board();
        this.turn = new Turn(this.board, this.cli);
        this.result = new Result(this.board);
    }

    start(): void {
        this.board.draw();

        if (this.result.isFinished()) {
            if (this.result.isWinner()) {
                const player = this.turn.getCurrentPlayer();
                this.cli.print(`${player.getName()} ${player.getColor()} wins!`);
            }
    
            if (this.result.isTie()) {
                this.cli.print("It's a tie!");
            }

            this.cli.close();

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
