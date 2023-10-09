import { type Board } from '../models/Board'
import { type Player } from '../models/Player'
import { Token } from '../models/Token'
import { type StandardCli } from '../views/StandardCli'
import { type TurnVisitor } from '../models/TurnVisitor'
import { GAME_MODE } from '../../types/GameMode'

export class TurnView implements TurnVisitor {
  constructor (private readonly board: Board, private readonly cli: StandardCli) {
    this.board = board
    this.cli = cli
  }

  async selectMode (): Promise<number> {
    this.cli.print('Welcome to Connect 4!\n')
    let mode: number = 0
    do {
      if (mode !== 0 && this.isInvalidMode(mode)) {
        this.cli.print('\nInvalid mode! Try again.\n')
      }
      const message: string = 'Select one of the following modes:\n' +
        '1. Human vs Human\n' +
        '2. Human vs Bot\n' +
        'Mode: '
      mode = parseInt(await this.cli.promptUser(message)) - 1
    } while (this.isInvalidMode(mode))
    return mode
  }

  isInvalidMode (mode: number): boolean {
    return GAME_MODE[mode] === undefined
  }

  async play (player: Player): Promise<void> {
    await player.accept(this)
  }

  async playHuman (player: Player): Promise<void> {
    let col: number
    let wrongcolumn: boolean = false
    do {
      if (wrongcolumn) {
        this.cli.print('\nWrong column! Try again.\n')
      }
      const message: string = `${player.getName()}(${player.getColor()}), choose column: `
      col = parseInt(await this.cli.promptUser(message))
      col--
      wrongcolumn = true
    } while (
      this.board.isInvalidColumn(col) ||
      !this.board.putToken(col, new Token(player.getColor()))
    )
  }

  async playBot (player: Player): Promise<void> {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        const col: number = Math.floor(Math.random() * 7)
        this.cli.print(`${player.getName()}(${player.getColor()}), has chosen column: ${col + 1}`)
        this.board.putToken(col, new Token(player.getColor()))
        resolve()
      }, 300)
    })
  }
}
