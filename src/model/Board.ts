import {Token} from "./Token";
import {Color} from "./Color";

export class Board {
    private readonly board: Token[][];
    private rows: number = 6;
    private cols: number = 7;

    constructor() {
        this.board = Array.from({length: this.rows}, () =>
            Array(this.cols).fill(new Token(Color.blank))
        );
    }

    draw(): void {
        for (let row: number = 0; row < this.rows; row++) {
            let rowString: string = "";
            for (let col: number = 0; col < this.cols; col++) {
                rowString += "+----";
            }
            rowString += "+";
            console.log(rowString);

            rowString = "";
            for (let col: number = 0; col < this.cols; col++) {
                const token: string = this.board[row][col].getColor();
                rowString += `| ${token} `;
            }
            rowString += "|";
            console.log(rowString);
        }

        // Draw the bottom border of the board
        let bottomBorder: string = "";
        for (let col: number = 0; col < this.cols; col++) {
            bottomBorder += "+----";
        }
        bottomBorder += "+";
        console.log(bottomBorder);

        // Display centered column numbers
        let columnNumbers: string = " ";
        for (let col: number = 1; col <= this.cols; col++) {
            columnNumbers += `  ${col}  `;
        }
        console.log(columnNumbers);
    }

    placeToken(col: number, token: Token): boolean {
        let row: number = this.rows - 1;

        while (row >= 0 && this.board[row][col].getColor() !== Color.blank) {
            row--;
        }

        if (
            row >= 0 &&
            row < this.rows &&
            col >= 0 &&
            col < this.cols &&
            this.board[row][col].getColor() === Color.blank
        ) {
            this.board[row][col] = token;

            return true;
        }

        return false;
    }

    isFull(): boolean {
        for (let row: number = 0; row < this.rows; row++) {
            for (let col: number = 0; col < this.cols; col++) {
                if (this.board[row][col].getColor() === Color.blank) {
                    return false;
                }
            }
        }

        return true;
    }

    checkWinner(): Color | null {
        if (this.checkRows() !== null) {
            return this.checkRows();
        }

        if (this.checkCols() !== null) {
            return this.checkCols();
        }

        if (this.checkDiagonal() !== null) {
            return this.checkDiagonal();
        }

        if (this.checkInverseDiagonal() !== null) {
            return this.checkInverseDiagonal();
        }

        return null;
    }

    checkRows(): Color | null {
        for (let row: number = 0; row < this.rows; row++) {
            for (let col: number = 0; col < this.cols - 3; col++) {
                const token: string = this.board[row][col].getColor();
                if (token !== Color.blank &&
                    token === this.board[row][col + 1].getColor() &&
                    token === this.board[row][col + 2].getColor() &&
                    token === this.board[row][col + 3].getColor()) {
                    return token;
                }
            }
        }

        return null;
    }

    checkCols(): Color | null {
        for (let col: number = 0; col < this.cols; col++) {
            for (let row: number = 0; row < this.rows - 3; row++) {
                const token: string = this.board[row][col].getColor();
                if (token !== Color.blank &&
                    token === this.board[row + 1][col].getColor() &&
                    token === this.board[row + 2][col].getColor() &&
                    token === this.board[row + 3][col].getColor()) {
                    return token;
                }
            }
        }

        return null;
    }

    checkInverseDiagonal(): Color | null {
        for (let row: number = 3; row < this.rows; row++) {
            for (let col: number = 0; col < this.cols - 3; col++) {
                const token: string = this.getToken(row, col).getColor()
                if (token !== Color.blank &&
                    token === this.board[row - 1][col + 1].getColor() &&
                    token === this.board[row - 2][col + 2].getColor() &&
                    token === this.board[row - 3][col + 3].getColor()) {
                    return token;
                }
            }
        }

        // for (let row = 3; row < this.rows; row++) {
        //     for (let col = 0; col < this.cols - 3; col++) {
        //         const token = this.board[row][col].getColor();
        //         if (token !== Color.blank &&
        //             token === this.board[row - 1][col + 1].getColor() &&
        //             token === this.board[row - 2][col + 2].getColor() &&
        //             token === this.board[row - 3][col + 3].getColor()) {
        //             return token;
        //         }
        //     }
        // }

        return null;
    }

    checkDiagonal(): Color | null {
        for (let row: number = 0; row < this.rows - 3; row++) {
            for (let col: number = 0; col < this.cols - 3; col++) {
                const token = this.board[row][col].getColor();
                if (token !== Color.blank &&
                    token === this.board[row + 1][col + 1].getColor() &&
                    token === this.board[row + 2][col + 2].getColor() &&
                    token === this.board[row + 3][col + 3].getColor()) {
                    return token;
                }
            }
        }

        return null;
    }

    getCols(): number {
        return this.cols;
    }

    getToken(row: number, col: number): Token {
        return this.board[row][col];
    }
}

