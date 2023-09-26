import { Token } from "./Token";
import { Color } from "./Color";

// Board class to draw and manage the game board
export class Board {
    private board: Token[][];
    private rows: number = 6;
    private cols: number = 7;

    constructor() {
        this.board = Array.from({ length: this.rows }, () =>
            Array(this.cols).fill(new Token(Color.blank))
        );
    }

    // Function to draw the empty game board
    draw(): void {
        for (let row = 0; row < this.rows; row++) {
            let rowString = "";
            for (let col = 0; col < this.cols; col++) {
                rowString += "+----";
            }
            rowString += "+";
            console.log(rowString);

            rowString = "";
            for (let col = 0; col < this.cols; col++) {
                const token = this.board[row][col].getColor();
                rowString += `| ${token} `;
            }
            rowString += "|";
            console.log(rowString);
        }

        // Draw the bottom border of the board
        let bottomBorder = "";
        for (let col = 0; col < this.cols; col++) {
            bottomBorder += "+----";
        }
        bottomBorder += "+";
        console.log(bottomBorder);

        // Display centered column numbers
        let columnNumbers = " ";
        for (let col = 1; col <= this.cols; col++) {
            columnNumbers += `  ${col}  `;
        }
        console.log(columnNumbers);
    }

    placeToken(col: number, token: Token): boolean {
        let row = this.rows - 1;

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
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if (this.board[row][col].getColor() === Color.blank) {
                    return false;
                }
            }
        }

        return true;
    }

    checkWinner(): Color | null {
        // Check rows for a winner
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols - 3; col++) {
                const token = this.board[row][col].getColor();
                if (token !== Color.blank &&
                    token === this.board[row][col + 1].getColor() &&
                    token === this.board[row][col + 2].getColor() &&
                    token === this.board[row][col + 3].getColor()) {
                    return token;
                }
            }
        }

        // Check columns for a winner
        for (let col = 0; col < this.cols; col++) {
            for (let row = 0; row < this.rows - 3; row++) {
                const token = this.board[row][col].getColor();
                if (token !== Color.blank &&
                    token === this.board[row + 1][col].getColor() &&
                    token === this.board[row + 2][col].getColor() &&
                    token === this.board[row + 3][col].getColor()) {
                    return token;
                }
            }
        }

        // Check diagonals (bottom-left to top-right) for a winner
        for (let row = 3; row < this.rows; row++) {
            for (let col = 0; col < this.cols - 3; col++) {
                const token = this.board[row][col].getColor();
                if (token !== Color.blank &&
                    token === this.board[row - 1][col + 1].getColor() &&
                    token === this.board[row - 2][col + 2].getColor() &&
                    token === this.board[row - 3][col + 3].getColor()) {
                    return token;
                }
            }
        }

        // Check diagonals (top-left to bottom-right) for a winner
        for (let row = 0; row < this.rows - 3; row++) {
            for (let col = 0; col < this.cols - 3; col++) {
                const token = this.board[row][col].getColor();
                if (token !== Color.blank &&
                    token === this.board[row + 1][col + 1].getColor() &&
                    token === this.board[row + 2][col + 2].getColor() &&
                    token === this.board[row + 3][col + 3].getColor()) {
                    return token;
                }
            }
        }

        // If no winner is found, return null
        return null;
    }
}

