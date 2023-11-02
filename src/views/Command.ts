export abstract class Command {
  protected title: string

  protected constructor (title: string) {
    this.title = title
  }

  getTitle (): string {
    return this.title
  }

  abstract execute (): Promise<void>

  abstract isActive (): boolean
}
