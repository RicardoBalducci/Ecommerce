export declare class FirestoreService {
    private readonly db;
    constructor();
    create(createdDto: any): Promise<void>;
    eliminar(documentId: string): Promise<void>;
    modificar(documentId: string, updatedDto: any): Promise<void>;
    getAll(): Promise<any[]>;
}
