import {Board} from "../models/Board";
import {Player} from "../models/Player";
import {Token} from "../models/Token";
import {StandardCli} from "../views/StandardCli";
import {TurnVisitor} from "../models/TurnVisitor";

export class TurnView implements TurnVisitor {
    constructor(private readonly board: Board, private readonly cli: StandardCli) {
        this.board = board;
        this.cli = cli;
    }

    play(player: Player): Promise<void> {
        return player.accept(this);
    }

    async playHuman(player: Player): Promise<void> {
        let col: number;
        let wrongcolumn: boolean = false;
        do {
            if (wrongcolumn) {
                this.cli.print("\nWrong column! Try again.\n");
            }
            col = parseInt(await this.cli.promptUser(
                `${player.getName()}(${player.getColor()}), choose column: `
            ));
            col--;
            wrongcolumn = true;
        } while (
            this.board.isInvalidColumn(col) ||
            !this.board.putToken(col, new Token(player.getColor()))
        );
    }

    async playBot(player: Player): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                let col: number = Math.floor(Math.random() * 7);
                this.cli.print(`${player.getName()}(${player.getColor()}), has chosen column: ${col + 1}`);
                this.board.putToken(col, new Token(player.getColor()));
                resolve();
            }, 300);
        });
    }
}