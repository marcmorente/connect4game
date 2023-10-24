import { type GameController } from '../controllers/GameController'
import { type Board } from '../models/Board'
import { type Player } from '../models/Player'
import { Token } from '../models/Token'
import { type PlayerVisitor } from '../models/PlayerVisitor'
import { StandardCli } from './StandardCli'

export class TurnView implements PlayerVisitor {
  private readonly cli: StandardCli
  private readonly board: Board

  constructor (private readonly gameController: GameController) {
    this.gameController = gameController
    this.board = this.gameController.getBoard()
    this.cli = StandardCli.getInstance()
  }

  async askMove (): Promise<void> {
    await this.gameController.getCurrentPlayer().accept(this)
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
