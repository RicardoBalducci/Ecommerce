import { Injectable } from "@nestjs/common";
import { FirestoreService } from "./firestore.service";

@Injectable()
export class AppService {
  constructor(private readonly firebaseService: FirestoreService) {}

  getHello(): string {
    return "Hello World!";
  }
}
