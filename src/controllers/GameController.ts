import { Game } from '../models/Game'
import { type Player } from '../models/Player'
import { Turn } from '../models/Turn'
import { BoardView } from '../views/BoardView'
import { StandardCli } from '../views/StandardCli'
import { TurnView } from '../views/TurnView'
import { GameView } from '../views/GameView'

export class GameController {
  private readonly cli: StandardCli
  private readonly gameView: GameView
  private readonly game: Game
  private readonly turn: any
  private readonly boardView: BoardView
  private readonly turnView: TurnView

  constructor () {
    this.cli = StandardCli.getInstance()
    this.game = new Game()
    this.gameView = new GameView(this.game)
    this.turn = new Turn(this.game)
    this.turnView = new TurnView(this.turn, this.game.getBoard())
    this.boardView = new BoardView(this.game.getBoard())
  }

  async start (): Promise<void> {
    await this.gameView.start()
    do {
      this.boardView.write()
      await this.turnView.askPlayer()
      this.turn.switchPlayer()
    } while (!this.game.isFinished())
    this.boardView.write()
    const player: Player = this.turn.getCurrentPlayer()
    this.game.getWinner() !== null
      ? this.cli.print(`${player.getName()} ${player.getColor()?.toString()} wins!`)
      : this.cli.print("It's a tie!")
  }

  async resume (): Promise<boolean> {
    return await this.gameView.resume()
  }
}
