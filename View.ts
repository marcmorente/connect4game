import {
    createInterface,
    type Interface,
    type ReadLineOptions,
} from "readline";
import { Turn } from "./Turn";

export class View {
    private readonly cli: Interface;

    constructor() {
        const readLineOptions: ReadLineOptions = {
            input: process.stdin,
            output: process.stdout,
        };
        this.cli = createInterface(readLineOptions);
    }

    async promptUser(turn: Turn): Promise<number> {
        return new Promise<number>(resolve => {
            this.cli.question(
                `${turn.getCurrentPlayer().getName()}, what column do you want to place your token?: `,
                (col: string): void => resolve(parseInt(col) - 1)
            );
        });
    }

    close(): void {
        this.cli.close();
    }
}