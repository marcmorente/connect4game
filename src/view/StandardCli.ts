import {
    createInterface,
    type Interface,
    type ReadLineOptions,
} from "readline";

export class StandardCli {
    private readonly cli: Interface;

    constructor() {
        const readLineOptions: ReadLineOptions = {
            input: process.stdin,
            output: process.stdout,
        };
        this.cli = createInterface(readLineOptions);
    }

    async promptUser(message: string): Promise<string> {
        return new Promise<string>(resolve => {
            this.cli.question(
                message,
                (input: string): void => resolve(input)
            );
        });
    }

    print(message: string): void {
        this.cli.write(message);
    }

    close(): void {
        this.cli.close();
    }
}