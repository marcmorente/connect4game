"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = require("./Board");
const Token_1 = require("./Token");
(function main() {
    const board = new Board_1.Board();
    board.placeToken(5, 5, new Token_1.Token("X"));
    board.draw();
}());
