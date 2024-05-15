import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { APP_FILTER } from "@nestjs/core";
import { NotFoundExceptionFilter } from "./not-found.filter";
@Module({
  imports: [
    /*ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../../", "web-products/dist"),
      exclude: ["api-products/*"],
    }),*/
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    },
  ],
  /* */
})
export class AppModule {}
