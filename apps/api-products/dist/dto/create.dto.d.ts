export declare class CreateDto {
    private static counter;
    id: string;
    name: string;
    email: string;
    password: string;
    constructor(name: string, email: string, password: string);
    private static generateId;
}
