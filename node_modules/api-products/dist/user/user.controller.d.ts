import { UserService } from "./user.service";
import { UserDTO } from "./dto/user.create.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(): Promise<any[]>;
    createData(data: UserDTO): Promise<void>;
    login(username: string, password: string): Promise<string>;
    getById(id: string): Promise<any>;
    delete(id: string): Promise<void>;
    Correo(email: string): Promise<void>;
}
