import { UserModule } from "./user/user.module";
import { UserService } from "./user/user.service";
import { FirestoreService } from "./firestore.service";
import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { APP_FILTER } from "@nestjs/core";
import { NotFoundExceptionFilter } from "./not-found.filter";
@Module({
  imports: [
    UserModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../../", "web-products/dist"),
      exclude: ["api-products/*"],
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    },
  ],
})
export class AppModule {}
