import {
    createInterface,
    type Interface,
    type ReadLineOptions,
} from "readline";
import { Board } from "./Board";
import { Token } from "./Token";
import { Color } from "./Color";

export class Game {
    private readonly reader: Interface;
    private board: Board;

    constructor(readLineOptions: ReadLineOptions) {
        this.reader = createInterface(readLineOptions);
        this.board = new Board();
    }

    start(player: string = 'player 1', color: string = Color.red): void {
        this.board.draw();
        
        if (this.board.isFull()) {
            console.log('It\'s a tie! No winner.');
            this.reader.close();
            return;
        }

        if (this.board.checkWinner() !== null) {
            console.log(`Winner: ${this.board.checkWinner()}`);
            this.reader.close();
            return;
        }
        
        console.log('');
        console.log(`${player} (${color}) it's your turn!`);
        try {

            this.reader.question(`Enter column: `, (column: string) => {
                if (column === "exit") {
                    this.reader.close();
                    return;
                }
                const col = parseInt(column, 10) - 1;

                this.board.placeToken(col, new Token(color));

                this.start(player === 'player 1' ? 'player 2' : 'player 1', color === Color.red ? Color.yellow : Color.red);
            });
        } catch (e) {
            console.log(e);
            this.start(player === 'player 1' ? 'player 2' : 'player 1', color === Color.red ? Color.yellow : Color.red);
        }
    }
}
