import { Controller, Get, Post, Body } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateDto } from "./dto/create.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/create")
  async create(@Body() createDto: CreateDto): Promise<void> {
    await this.appService.create(createDto);
  }
}
