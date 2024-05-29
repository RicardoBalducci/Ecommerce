import { AppService } from "./app.service";
import { CreateDto } from "./dto/create.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAll(): Promise<any[]>;
    create(createDto: CreateDto): Promise<void>;
    selectAndShow(id: string): Promise<any>;
    delete(id: string): Promise<any>;
}
