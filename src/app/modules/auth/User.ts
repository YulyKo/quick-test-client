export class User {
  password: string;
  name: string;
  accessToken?: string;
  email: string;

  public setName(name: string): void {
    this.name = name;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public setAccessToken(accessToken: string): void {
    this.accessToken = accessToken;
  }
  public getAccessToken(): string {
    return this.accessToken;
  }
}
