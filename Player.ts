export class Player {
    private readonly name: string;
    private readonly color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    getName() {
        return this.name;
    }

    getColor() {
        return this.color;
    }
}