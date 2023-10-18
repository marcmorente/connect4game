import { GAME_MODE } from '../../types/GameMode'
import { type Game } from '../models/Game'
import { type Player } from '../models/Player'
import { Turn } from '../models/Turn'
import { BoardView } from '../views/BoardView'
import { StandardCli } from '../views/StandardCli'
import { TurnView } from '../views/TurnView'

export class GameController {
  private readonly cli: StandardCli

  constructor (private readonly game: Game) {
    this.cli = StandardCli.getInstance()
  }

  async start (): Promise<void> {
    const players: Player[] = GAME_MODE[this.game.getMode()]
    const turn: Turn = new Turn(this.game.getBoard(), players)
    do {
      new BoardView(this.game.getBoard()).write()
      await new TurnView(this.game.getBoard()).play(turn.getCurrentPlayer())
      turn.switchPlayer()
    } while (!this.game.getBoard().isFinished())
    new BoardView(this.game.getBoard()).write()
    const player: Player = turn.getCurrentPlayer()
    this.game.getBoard().getWinner() !== null
      ? this.cli.print(`${player.getName()} ${player.getColor()?.toString()} wins!`)
      : this.cli.print("It's a tie!")
  }
}
