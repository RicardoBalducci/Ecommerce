import { FirestoreService } from "./firestore.service";
export declare class AppService {
    private readonly firebaseService;
    constructor(firebaseService: FirestoreService);
    getAll(): Promise<any[]>;
    create(createdDto: any): Promise<void>;
    delete(documentId: string): Promise<void>;
    update(documentId: string, updatedDto: any): Promise<void>;
    getHello(): Promise<string>;
}
