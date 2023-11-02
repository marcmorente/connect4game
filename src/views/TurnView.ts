import { type Board } from '../models/Board'
import { type Player } from '../models/Player'
import { type PlayerVisitor } from '../models/PlayerVisitor'
import { StandardCli } from './StandardCli'
import { type Session } from '../models/Session'
import { Message } from '../../types/Message'
import { TurnState } from '../models/TurnState'

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
    TurnState.getInstance().setTurn(TurnState.HUMAN)
    let col: number
    let wrongColumn: boolean = false
    do {
      if (wrongColumn) {
        this.cli.print(Message.WRONG_COLUMN.toString())
      }
      col = parseInt(await this.cli.promptUser(this.message(player)))
      player.setColumn(col)
      wrongColumn = true
    } while (this.board.isInvalidColumn(col) || !player.putToken(this.board))
  }

  async playBot (player: Player): Promise<void> {
    TurnState.getInstance().setTurn(TurnState.BOT)
    await new Promise<void>((resolve): void => {
      setTimeout((): void => {
        player.putToken(this.board)
        this.cli.print(`${this.message(player)} ${player.getColumn() + 1}`)
        resolve()
      }, 300)
    })
  }

  private message (player: Player): string {
    return Message.replace(
      Message.PLAYER_TEMPLATE,
      Message.CHOOSE_COLUMN,
      `${player.getName()}(${player.getColor()?.toString()})`
    ).toString()
  }
}
