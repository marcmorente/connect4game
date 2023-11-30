/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Token } from '../../src/models/Token'
import { Color } from '../../types/Color'

export class TokenExamples {
  static parityColor (index: number): Token {
    const color: Color = index % 2 === 0 ? Color.RED : Color.YELLOW
    return new Token(color)
  }

  static red (): Token {
    return new Token(Color.RED)
  }

  static yellow (): Token {
    return new Token(Color.YELLOW)
  }

  static nullish (): Token {
    return new Token(Color.NULL)
  }

  static blank (): Token {
    return new Token(Color.BLANK)
  }
}
