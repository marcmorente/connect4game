import {Player} from "./Player";
import {Board} from "./Board";
import {Token} from "./Token";
import {Color} from "./Color";
import {View} from "./View";

export class Turn {
    private readonly turns: Array<Player>;
    private currentTurn: number = 0;

    constructor(private readonly board: Board, private readonly view: View) {
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
            col = await this.view.promptUser(this);
        } while (
            col + 1 > this.board.getCols() ||
            !this.board.placeToken(
                col,
                new Token(this.getCurrentPlayer().getColor())
            )
        );
    }
}