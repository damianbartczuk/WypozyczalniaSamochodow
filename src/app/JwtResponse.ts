export class JwtResponse{
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  get tokenWithoutPrefix(): string {
    console.log("to chyba taki token = "+this.token.split(' ')[1]);
    return this.token.split(' ')[1];
  }
}

