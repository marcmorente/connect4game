import { createInterface, type Interface } from 'readline/promises'
import { stdin as input, stdout as output } from 'process'

export class StandardCli {
  private static instance: StandardCli
  private readonly cli: Interface

  private constructor () {
    this.cli = createInterface({ input, output })
  }

  public static getInstance (): StandardCli {
    if (StandardCli.instance === undefined) {
      StandardCli.instance = new StandardCli()
    }

    return StandardCli.instance
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
