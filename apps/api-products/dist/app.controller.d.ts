import { AppService } from "./app.service";
import { CreateDto } from "./dto/create.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    create(createDto: CreateDto): Promise<void>;
}
