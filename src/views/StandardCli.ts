import { createInterface, type Interface } from 'readline/promises'
import { stdin as input, stdout as output } from 'process'

export class StandardCli {
  private readonly cli: Interface

  constructor () {
    this.cli = createInterface({ input, output })
  }

  async promptUser (message: string): Promise<string> {
    return await this.cli.question(message)
  }

  print (message: string): void {
    console.log(message)
  }

  close (): void {
    this.cli.close()
  }
}
