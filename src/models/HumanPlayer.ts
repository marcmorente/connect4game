import {Player} from "./Player";
import {TurnVisitor} from "./TurnVisitor";

export class HumanPlayer implements Player {
    private readonly name: string;
    private readonly color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    accept(visitor: TurnVisitor): Promise<void> {
        return visitor.playHuman(this);
    }

    getName(): string {
        return this.name;
    }

    getColor(): string {
        return this.color;
    }
}