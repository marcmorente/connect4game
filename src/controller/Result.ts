import { Board } from "../model/Board";

export class Result {
    constructor(private readonly board: Board) {
    }

    isWinner(): boolean {
        return this.board.checkWinner() !== null;
    }

    isTie(): boolean {
        return this.board.isFull();
    }

    isFinished(): boolean {
        return this.isWinner() || this.isTie();
    }
}