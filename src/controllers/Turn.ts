import {HumanPlayer} from "../models/HumanPlayer";
import {Board} from "../models/Board";
import {Color} from "../../types/Color";
import {BotPlayer} from "../models/BotPlayer";
import {Player} from "../models/Player";

export class Turn {
    private readonly players: Array<Player>;
    private currentTurn: number = 0;

    constructor(private readonly board: Board) {
        this.players = [
            new HumanPlayer('Human', Color.RED),
            new BotPlayer('Bot', Color.YELLOW)
        ];
    }

    getCurrentPlayer(): Player {
        return this.players[this.currentTurn];
    }

    switchPlayer(): void {
        if (!this.board.isFinished()) {
            this.currentTurn = (this.currentTurn + 1) % 2;
        }
    }
}