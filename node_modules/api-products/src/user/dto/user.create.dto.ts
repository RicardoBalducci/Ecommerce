import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { v4 as uuidv4 } from "uuid";

export class UserDTO {
  @IsString()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  password: string;

  constructor(name: string, email: string, password: string) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
