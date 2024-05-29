import { FirestoreService } from "./firestore.service";
export declare class AppService {
    private readonly firebaseService;
    constructor(firebaseService: FirestoreService);
    getHello(): string;
}
