import { AppModule } from "src/app.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { FirestoreService } from "src/firestore.service";
/*
https://docs.nestjs.com/modules
*/

import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, FirestoreService],
})
export class UserModule {}
