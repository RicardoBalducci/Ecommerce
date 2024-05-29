import { Injectable } from "@nestjs/common";
import * as admin from "firebase-admin";

@Injectable()
export class FirestoreService {
  private readonly db: FirebaseFirestore.Firestore;

  constructor() {
    const serviceAccount = require("../ecommerce-9e7cc-firebase-adminsdk-e5y0v-052a641049.json");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL:
        "https://ecommerce-9e7cc-default-rtdb.europe-west1.firebasedatabase.app",
    });
    this.db = admin.firestore();
  }
  getFirestoreInstance(): FirebaseFirestore.Firestore {
    return this.db;
  }
}
