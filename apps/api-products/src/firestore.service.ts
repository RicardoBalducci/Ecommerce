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

  async create(createdDto: any): Promise<void> {
    const firestore = this.db;

    await firestore.collection("/devices").add(createdDto);
  }

  async eliminar(documentId: string): Promise<void> {
    const firestore = this.db;

    await firestore.collection("/devices").doc(documentId).delete();
  }

  async modificar(documentId: string, updatedDto: any): Promise<void> {
    const firestore = this.db;

    await firestore.collection("/devices").doc(documentId).update(updatedDto);
  }

  async getAll(): Promise<any[]> {
    const firestore = this.db;

    const snapshot = await firestore.collection("/devices").get();
    const devices = snapshot.docs.map((doc) => doc.data());

    return devices;
  }

  getFirestoreInstance(): FirebaseFirestore.Firestore {
    return this.db;
  }
}
