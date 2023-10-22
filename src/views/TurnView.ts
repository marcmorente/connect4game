import { type Board } from '../models/Board'
import { type Player } from '../models/Player'
import { Token } from '../models/Token'
import { type Turn } from '../models/Turn'
import { type TurnVisitor } from '../models/TurnVisitor'
import { StandardCli } from './StandardCli'

export class TurnView implements TurnVisitor {
  private readonly cli: StandardCli

  constructor (private readonly turn: Turn, private readonly board: Board) {
    this.cli = StandardCli.getInstance()
  }

  async askPlayer (): Promise<void> {
    console.log(this.turn.getCurrentPlayer())
    await this.turn.getCurrentPlayer().accept(this)
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
