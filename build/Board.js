"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const Token_1 = require("./Token");
// Board class to draw and manage the game board
class Board {
    constructor() {
        this.rows = 6;
        this.cols = 7;
        this.token = Array.from({ length: this.rows }, () => Array(this.cols).fill(new Token_1.Token(" ")));
    }
    // Function to draw the empty game board
    draw() {
        for (let row = 0; row < this.rows; row++) {
            let rowString = "";
            for (let col = 0; col < this.cols; col++) {
                rowString += "+---";
            }
            rowString += "+";
            console.log(rowString);
            rowString = "";
            for (let col = 0; col < this.cols; col++) {
                const token = this.token[row][col].getSymbol();
                rowString += `| ${token} `;
            }
            rowString += "|";
            console.log(rowString);
        }
        // Draw the bottom border of the board
        let bottomBorder = "";
        for (let col = 0; col < this.cols; col++) {
            bottomBorder += "+---";
        }
        bottomBorder += "+";
        console.log(bottomBorder);
        // Display centered column numbers
        let columnNumbers = " ";
        for (let col = 1; col <= this.cols; col++) {
            columnNumbers += ` ${col}  `;
        }
        console.log(columnNumbers);
    }
    // Function to place a token on the board
    placeToken(row, col, token) {
        if (row >= 0 &&
            row < this.rows &&
            col >= 0 &&
            col < this.cols &&
            this.token[row][col].getSymbol() === " ") {
            this.token[row][col] = token;
            return true;
        }
        return false;
    }
}
exports.Board = Board;
