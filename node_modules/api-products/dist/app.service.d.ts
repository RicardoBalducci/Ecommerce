import { FirestoreService } from "./firestore.service";
export declare class AppService {
    private readonly firestoreService;
    constructor(firestoreService: FirestoreService);
    create(createdDto: any): Promise<void>;
    getAll(): Promise<any[]>;
    getById(id: string): Promise<any>;
    delete(id: string): Promise<void>;
}
