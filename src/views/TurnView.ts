import { type Board } from '../models/Board'
import { type Player } from '../models/Player'
import { Token } from '../models/Token'
import { type StandardCli } from './StandardCli'
import { type TurnVisitor } from '../models/TurnVisitor'

export class TurnView implements TurnVisitor {
  constructor (private readonly board: Board, private readonly cli: StandardCli) {
    this.board = board
    this.cli = cli
  }

  async play (player: Player): Promise<void> {
    await player.accept(this)
  }

  async playHuman (player: Player): Promise<void> {
    let col: number
    let wrongColumn: boolean = false
    do {
      if (wrongColumn) {
        this.cli.print('\nWrong column! Try again.\n')
      }
      const message: string = `${player.getName()}(${player.getColor()?.toString()}), choose column: `
      col = parseInt(await this.cli.promptUser(message))
      col--
      wrongColumn = true
    } while (
      this.board.isInvalidColumn(col) ||
      !this.board.putToken(col, new Token(player.getColor()))
    )
  }

  async playBot (player: Player): Promise<void> {
    await new Promise<void>((resolve): void => {
      setTimeout((): void => {
        const col: number = Math.floor(Math.random() * this.board.cols)
        this.cli.print(`${player.getName()}(${player.getColor()?.toString()}), has chosen column: ${col + 1}`)
        this.board.putToken(col, new Token(player.getColor()))
        resolve()
      }, 300)
    })
  }
}
