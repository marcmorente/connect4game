import {Player} from "./Player";
import {Board} from "./Board";
import {Interface} from "readline";
import {Token} from "./Token";
import {Color} from "./Color";

export class Turn {
    private readonly board: Board;
    private readonly readline: Interface;
    private readonly turns: Array<Player>;
    private currentTurn: number;

    constructor(board: Board, readline: Interface) {
        this.currentTurn = 0
        this.turns = [new Player('Player 1', Color.red), new Player('Player 2', Color.yellow)];
        this.board = board;
        this.readline = readline;
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
            col = await this.promptUser();
        } while (col + 1 > this.board.getCols() || !this.board.placeToken(col, new Token(this.getCurrentPlayer().getColor())));
    }

    private async promptUser(): Promise<number> {
        return new Promise<number>(resolve => {
            this.readline.question(`${this.getCurrentPlayer().getName()}, what column do you want to place your token?: `, (col: string): void => {
                resolve(parseInt(col) - 1);
            });
        });
    }
}