import { type Board } from '../models/Board'
import { type Player } from '../models/Player'
import { type PlayerVisitor } from '../models/PlayerVisitor'
import { StandardCli } from './StandardCli'
import { type Session } from '../models/Session'

export class TurnView implements PlayerVisitor {
  private readonly cli: StandardCli
  private readonly board: Board

  constructor (private readonly session: Session) {
    this.cli = StandardCli.getInstance()
    this.board = this.session.getBoard()
  }

  async askPlayer (): Promise<void> {
    await this.session.getCurrentPlayer().accept(this)
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
      player.setColumn(col)
      wrongColumn = true
    } while (this.board.isInvalidColumn(col) || !player.putToken(this.board))
  }

  async playBot (player: Player): Promise<void> {
    await new Promise<void>((resolve): void => {
      setTimeout((): void => {
        player.putToken(this.board)
        this.cli.print(`${player.getName()}(${player.getColor()?.toString()}), has chosen column: ${player.getColumn() + 1}`)
        resolve()
      }, 300)
    })
  }
}
