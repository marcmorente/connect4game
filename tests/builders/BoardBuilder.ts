import { Board } from '../../src/models/Board'
import { Token } from '../../src/models/Token'
import { Color } from '../../types/Color'

export class BoardBuilder {
  buildEmpty (): Board {
    return new Board()
  }

  buildWithoutWinning (): Board {
    const board: Board = new Board()
    for (let i = 0; i < board.cols; i++) {
      const tokenColor = i % 2 === 0 ? Color.RED : Color.YELLOW
      for (let j = 0; j < board.rows; j++) {
        board.putToken(i, new Token(tokenColor))
      }
    }

    return board
  }

  buildFullColumn (): Board {
    const board: Board = new Board()
    for (let i = 0; i < board.rows; i++) {
      board.putToken(0, new Token(Color.RED))
    }

    return board
  }

  buildHorizontalWin (): Board {
    const board: Board = new Board()
    for (let row = 0; row < board.rows; row++) {
      board.putToken(row, new Token(Color.RED))
    }

    return board
  }

  buildVerticalWin (): Board {
    const board: Board = new Board()
    for (let col = 0; col < board.cols; col++) {
      board.putToken(0, new Token(Color.YELLOW))
    }

    return board
  }

  buildDiagonalWin (): Board {
    const board: Board = new Board()
    board.putToken(0, new Token(Color.YELLOW))
    board.putToken(1, new Token(Color.RED))
    board.putToken(1, new Token(Color.YELLOW))
    board.putToken(2, new Token(Color.RED))
    board.putToken(2, new Token(Color.RED))
    board.putToken(2, new Token(Color.YELLOW))
    board.putToken(3, new Token(Color.RED))
    board.putToken(3, new Token(Color.RED))
    board.putToken(3, new Token(Color.RED))
    board.putToken(3, new Token(Color.YELLOW))

    return board
  }

  buildReverseDiagonalWin (): Board {
    const board: Board = new Board()
    board.putToken(0, new Token(Color.RED))
    board.putToken(0, new Token(Color.RED))
    board.putToken(0, new Token(Color.RED))
    board.putToken(0, new Token(Color.YELLOW))
    board.putToken(1, new Token(Color.RED))
    board.putToken(1, new Token(Color.RED))
    board.putToken(1, new Token(Color.YELLOW))
    board.putToken(2, new Token(Color.RED))
    board.putToken(2, new Token(Color.YELLOW))
    board.putToken(3, new Token(Color.YELLOW))

    return board
  }
}
