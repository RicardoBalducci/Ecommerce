import { Injectable } from "@nestjs/common";
import { FirestoreService } from "../firestore.service";
import { sendEmailWithAttachment } from "src/email/email.service";
import { emailBodyTemplate } from "src/template/email.template";
@Injectable()
export class UserService {
  constructor(private readonly firestoreService: FirestoreService) {}

  async create(createdDto: any): Promise<void> {
    const firestore = this.firestoreService.getFirestoreInstance();
    const prueba = await firestore.collection("/user").add(createdDto);
    console.log("si se pudo");
  }

  async login(username: string, password: string): Promise<any> {
    const firestore = this.firestoreService.getFirestoreInstance();
    const userDoc = await firestore.collection("user").doc(username).get();
    const passwordDoc = await firestore.collection("user").doc(password).get();
    if (!userDoc.exists && !passwordDoc) {
      throw new Error("El usuario no existe");
    }
    return console.log("esta logeado");
  }
  async getAll(): Promise<any[]> {
    const firestore = this.firestoreService.getFirestoreInstance();
    const snapshot = await firestore.collection("/user").get();
    const user = snapshot.docs.map((doc) => doc.data());
    return user;
  }

  async getById(id: string): Promise<any> {
    const firestore = this.firestoreService.getFirestoreInstance();
    const userDoc = await firestore.collection("user").doc(id).get();
    if (!userDoc.exists) {
      throw new Error("El usuario no existe");
    }
    return {
      id: userDoc.id,
      ...userDoc.data(),
    };
  }

  async delete(id: string): Promise<void> {
    const firestore = this.firestoreService.getFirestoreInstance();
    const userDoc = await firestore.collection("user").doc(id).get();

    if (!userDoc.exists) {
      throw new Error("El usuario no existe"); //Manejar con hhtps errores
    }

    await firestore.collection("user").doc(id).delete();
  }

  async Correo(createdDto): Promise<void> {
    const emailBody = emailBodyTemplate(createdDto.username);
    await sendEmailWithAttachment(createdDto.email, emailBody);

    return console.log("si se pudo");
  }
}
