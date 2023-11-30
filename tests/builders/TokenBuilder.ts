import { Token } from '../../src/models/Token'
import { Color } from '../../types/Color'

export class TokenBuilder {
  buildParityColor (index: number): Token {
    const color: Color = index % 2 === 0 ? Color.RED : Color.YELLOW
    return new Token(color)
  }

  buildRed (): Token {
    return new Token(Color.RED)
  }

  buildYellow (): Token {
    return new Token(Color.YELLOW)
  }

  buildNull (): Token {
    return new Token(Color.NULL)
  }

  buildBlank (): Token {
    return new Token(Color.BLANK)
  }
}
