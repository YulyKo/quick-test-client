export class User {
  password: string;
  name: string;
  access_token?: string;
  email: string;

  public setName(name : string) {
    this.name = name;
  }

  public setPassword(password : string) {
    this.password = password;
  }

  public setEmail(email : string) {
    this.email = email;
  }

  public setAccessToken(access_token: string) {
    this.access_token = access_token;
  }
    
}