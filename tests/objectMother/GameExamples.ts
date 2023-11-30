/* eslint-disable @typescript-eslint/no-extraneous-class */

import { Game } from '../../src/models/Game'
import { HUMAN_VS_HUMAN } from '../constants/modes'
import { BoardExamples } from './BoardExamples'

export class GameExamples {
  static dummy (): Game {
    return new Game()
  }

  static humanVsHuman (): Game {
    const game: Game = new Game()
    game.setPlayers(HUMAN_VS_HUMAN)
    return game
  }

  static turnOne (): Game {
    const game: Game = this.humanVsHuman()
    game.setBoard(BoardExamples.fillTurnOne())
    game.getTurn().switchPlayer()
    return game
  }

  static turnTwo (): Game {
    const game: Game = this.humanVsHuman()
    game.setBoard(BoardExamples.fillTurnTwo())
    game.getTurn().switchPlayer()
    return game
  }
}
