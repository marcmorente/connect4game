import assert from "assert";
import {Color} from "../../types/Color";

export class Token {
    constructor(private readonly color: string) {
        assert([Color.RED, Color.YELLOW, Color.BLANK].includes(color));
        this.color = color;
    }

    getColor(): string | null {
        return this.color;
    }
}