type PlayerType = 'Human' | 'Bot'

export class TurnState {
  private static instance: TurnState
  public static readonly HUMAN: PlayerType = 'Human'
  public static readonly BOT: PlayerType = 'Bot'
  private playerType: PlayerType = TurnState.HUMAN

  public static getInstance (): TurnState {
    if (this.instance === undefined) {
      this.instance = new TurnState()
    }

    return this.instance
  }

  getTurn (): PlayerType {
    return this.playerType
  }

  setTurn (playerType: PlayerType): void {
    this.playerType = playerType
  }
}
