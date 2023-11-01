import { Command } from './Command'

export abstract class CompositeCommand extends Command {
  private readonly commands: Command[] = []

  protected add (command: Command): void {
    this.commands.push(command)
  }

  async execute (): Promise<void> {
    for (const command of this.commands) {
      await command.execute()
    }
  }
}
