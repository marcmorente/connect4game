import {Player} from "./Player";
import {Board} from "./Board";
import {Result} from "./Result";
import {Interface} from "readline";
import {Token} from "./Token";

export class Turn {
    private readonly board: Board;
    private readonly readline: Interface;
    private readonly turns: Record<number, Player>;
    private currentTurn: number;

    constructor({ player1, player2 }: { player1: Player, player2: Player }, board: Board, readline: Interface) {
        this.currentTurn = 0
        this.turns = {
            0: player1,
            1: player2
        }
        this.board = board;
        this.readline = readline;
    }

    getBoard (): Board {
        return this.board;
    }

    getCurrentPlayer (): Player {
        return this.turns[this.currentTurn]
    }

    switchPlayer (): void {
        this.currentTurn = (this.currentTurn + 1) % 2
    }

    async takeTurn(): Promise<void> {
        let col: number;
        do {
            col = await this.promptUser();
        } while (col+1 > this.board.getCols() || !this.board.placeToken(col, new Token(this.getCurrentPlayer().getColor())));
    }

    private async promptUser(): Promise<number> {
        return new Promise<number>(resolve => {
            this.readline.question(`${this.getCurrentPlayer().getName()}, what column do you want to place your token?: `, (col: string) => {
                resolve(parseInt(col) - 1);
            });
        });
    }
}