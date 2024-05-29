/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDTO } from "./dto/user.create.dto";
import { v4 as uuidv4 } from "uuid";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<any[]> {
    return await this.userService.getAll();
  }

  @Post("register")
  async createData(@Body() data: UserDTO): Promise<void> {
    await this.userService.create(data);
  }

  @Post("login")
  async login(
    @Body("name") username: string,
    @Body("password") password: string
  ): Promise<string> {
    return this.userService.login(username, password);
  }

  @Get("/:id")
  async getById(@Param("id") id: string): Promise<any> {
    return await this.userService.getById(id);
  }

  @Delete("/:id")
  async delete(@Param("id") id: string): Promise<void> {
    await this.userService.delete(id);
  }
}
