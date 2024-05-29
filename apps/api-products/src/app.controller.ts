import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateDto } from "./dto/create.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll(): Promise<any[]> {
    return await this.appService.getAll();
  }

  @Post("/create")
  async create(@Body() createDto: CreateDto): Promise<void> {
    await this.appService.create(createDto);
  }

  @Get("/:id")
  async selectAndShow(@Param("id") id: string): Promise<any> {
    return await this.appService.getAllId(id);
  }

  @Delete("/:id")
  async delete(@Param("id") id: string): Promise<any> {
    return await this.appService.delete(id);
  }
}
