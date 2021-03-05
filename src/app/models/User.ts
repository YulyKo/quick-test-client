export class User {
  password: string;
  name: string;
  token?: string;
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
    
}