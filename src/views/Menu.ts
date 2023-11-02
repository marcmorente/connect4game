import assert from 'assert'
import { type Command } from './Command'
import { StandardCli } from './StandardCli'
import { ClosedInterval } from '../../utils/ClosedInterval'

export abstract class Menu {
  private readonly commands: Command[]

  constructor () {
    this.commands = []
  }

  protected addCommand (command: Command): void {
    this.commands.push(command)
  }

  async execute (): Promise<void> {
    const activeCommands: Command[] = this.getActiveCommands()
    let error: boolean
    let option: number
    do {
      error = false
      for (let i = 0; i < activeCommands.length; i++) {
        StandardCli.getInstance().print((i + 1) + ') ' + activeCommands[i].getTitle())
      }
      option = parseInt(await StandardCli.getInstance().promptUser('Choose one of the above options: ')) - 1
      if (!new ClosedInterval(0, activeCommands.length - 1).isIncluded(option)) {
        error = true
      }
    } while (error)
    await activeCommands[option].execute()
  }

  private getActiveCommands (): Command[] {
    const commands: Command[] = []
    for (let i = 0; i < this.commands.length; i++) {
      if (this.commands[i].isActive()) {
        commands.push(this.commands[i])
      }
    }

    assert(commands.length > 0)

    return commands
  }
}
