export class Token {
    constructor(private readonly color: string) {
        this.color = color;
    }

    getColor(): string {
        return this.color;
    }
}