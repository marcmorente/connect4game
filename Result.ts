import {Turn} from "./Turn";

export class Result {
    constructor(private readonly turn: Turn) {
    }

    isWinner(): boolean {
        return this.turn.getBoard().checkWinner() !== null;
    }

    isTie(): boolean {
        return this.turn.getBoard().isFull();
    }

    isFinished(): boolean {
        return this.isWinner() || this.isTie();
    }

    done(): boolean {
        if (this.isWinner()) {
            console.log(`${this.turn.getCurrentPlayer().getName()} ${this.turn.getCurrentPlayer().getColor()} wins!`);
            return true;
        }

        if (this.isTie()) {
            console.log('It\'s a tie! No winner.');
            return true;
        }

        return false;
    }
}