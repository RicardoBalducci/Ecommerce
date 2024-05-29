export declare class FirestoreService {
    private readonly db;
    constructor();
    create(createdDto: any): Promise<void>;
    getFirestoreInstance(): FirebaseFirestore.Firestore;
}
