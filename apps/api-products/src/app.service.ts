import { Injectable } from "@nestjs/common";
import { FirestoreService } from "./firestore.service";

@Injectable()
export class AppService {
  constructor(private readonly firestoreService: FirestoreService) {}

  async create(createdDto: any): Promise<void> {
    await this.firestoreService.create(createdDto);
  }

  async delete(documentId: string): Promise<void> {
    await this.firestoreService.eliminar(documentId);
  }

  async update(documentId: string, updatedDto: any): Promise<void> {
    await this.firestoreService.modificar(documentId, updatedDto);
  }

  async getAll(): Promise<any[]> {
    return await this.firestoreService.getAll();
  }

  async getAllId(documentId: string): Promise<any> {
    return await this.firestoreService.getAllId(documentId);
  }
}
