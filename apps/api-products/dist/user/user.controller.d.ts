import { UserService } from "./user.service";
import { UserDTO } from "./dto/user.create.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(): Promise<any[]>;
    create(createDto: UserDTO): Promise<void>;
    getById(id: string): Promise<any>;
    delete(id: string): Promise<void>;
}
