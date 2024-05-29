import { FirestoreService } from "./firestore.service";
export declare class AppService {
    private readonly firestoreService;
    constructor(firestoreService: FirestoreService);
    create(createdDto: any): Promise<void>;
    delete(documentId: string): Promise<void>;
    update(documentId: string, updatedDto: any): Promise<void>;
    getAll(): Promise<any[]>;
    getAllId(documentId: string): Promise<any>;
}
