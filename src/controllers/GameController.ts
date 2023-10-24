import { type Board } from '../models/Board'
import { Game } from '../models/Game'
import { type Player } from '../models/Player'
import { BoardView } from '../views/BoardView'
import { StandardCli } from '../views/StandardCli'
import { TurnView } from '../views/TurnView'

export class GameController {
  private readonly game: Game
  private readonly board: Board
  private readonly boardView: BoardView
  private readonly turnView: TurnView
  private readonly cli: StandardCli

  constructor () {
    this.game = new Game()
    this.board = this.game.getBoard()
    this.boardView = new BoardView(this)
    this.turnView = new TurnView(this)
    this.cli = StandardCli.getInstance()
  }

  async start (): Promise<void> {
    do {
      this.boardView.write()
      await this.turnView.askMove()
      this.game.switchPlayer()
    } while (!this.board.isFinished())
    this.boardView.write()
    const player: Player = this.getCurrentPlayer()
    this.board.getWinner() !== null
      ? this.cli.print(`${player.getName()} ${player.getColor()?.toString()} wins!`)
      : this.cli.print("It's a tie!")
  }

  reset (): void {
    this.board.reset()
  }

  getBoard (): Board {
    return this.board
  }

  getCurrentPlayer (): Player {
    return this.game.getCurrentPlayer()
  }

  setPlayers (mode: number): void {
    this.game.setPlayers(mode)
  }

  isInvalidMode (): boolean {
    return this.game.isInvalidMode()
  }
}
