import { IsString } from "class-validator";

export class CreateDto {
  private static counter: number = 0;

  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  constructor(name: string, email: string, password: string) {
    this.id = CreateDto.generateId();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  private static generateId(): string {
    CreateDto.counter++;
    return `ID-${CreateDto.counter}`;
  }
}
