import { FirestoreService } from "../firestore.service";
export declare class UserService {
    private readonly firestoreService;
    constructor(firestoreService: FirestoreService);
    create(createdDto: any): Promise<void>;
    login(username: string, password: string): Promise<any>;
    getAll(): Promise<any[]>;
    getById(id: string): Promise<any>;
    delete(id: string): Promise<void>;
}
