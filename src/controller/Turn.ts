import {Player} from "../model/Player";
import {Board} from "../model/Board";
import {Token} from "../model/Token";
import {Color} from "../model/Color";
import {StandardCli} from "../view/StandardCli";

export class Turn {
    private readonly turns: Array<Player>;
    private currentTurn: number = 0;

    constructor(private readonly board: Board, private readonly cli: StandardCli) {
        this.turns = [
            new Player('Player 1', Color.red),
            new Player('Player 2', Color.yellow)
        ];
    }

    getBoard(): Board {
        return this.board;
    }

    getCurrentPlayer(): Player {
        return this.turns[this.currentTurn];
    }

    switchPlayer(): void {
        this.currentTurn = (this.currentTurn + 1) % 2;
    }

    async takeTurn(): Promise<void> {
        let col: number;
        do {
            col = parseInt(await this.cli.promptUser(
                `${this.getCurrentPlayer().getName()}, what column do you want to place your token?: `
            ));
            col--;
        } while (
            col + 1 > this.board.getCols() ||
            !this.board.placeToken(
                col,
                new Token(this.getCurrentPlayer().getColor())
            )
        );
    }
}