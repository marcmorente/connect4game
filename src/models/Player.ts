import {TurnVisitor} from "./TurnVisitor";

export interface Player {
    getName(): string;
    getColor(): string;
    accept(visitor: TurnVisitor): Promise<void>;
}