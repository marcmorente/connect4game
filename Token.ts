export class Token {
    private symbol: string;
  
    constructor(symbol: string) {
      this.symbol = symbol;
    }
  
    getSymbol(): string {
      return this.symbol;
    }
  }