import { Injectable } from "@nestjs/common";
import { FirestoreService } from "./firestore.service";

@Injectable()
export class AppService {
  constructor(private readonly firebaseService: FirestoreService) {}

  //Funcion que muestra todos los elementos de la base de datos
  async getAll() {
    return this.firebaseService.getAll();
  }

  //Funcion que añade un elemento a la base de datos
  async create(createdDto: any): Promise<void> {
    const firestore = this.firebaseService.getFirestoreInstance();
    const todoCollection = firestore.collection("/devices");
    await todoCollection.add(createdDto);
  }
  //Funcion que elimina un elemento de la base de datos
  async delete(documentId: string): Promise<void> {
    const firestore = this.firebaseService.getFirestoreInstance();
    const todoDocument = firestore.collection("/devices").doc(documentId);

    await todoDocument.delete();
  }

  async update(documentId: string, updatedDto: any): Promise<void> {
    const firestore = this.firebaseService.getFirestoreInstance();
    const todoDocument = firestore.collection("/devices").doc(documentId);

    await todoDocument.update(updatedDto);
  }

  async getHello(): Promise<string> {
    return "Hello World!";
  }
}
