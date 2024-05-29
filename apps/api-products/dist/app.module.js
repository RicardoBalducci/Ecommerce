"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const firestore_service_1 = require("./firestore.service");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const not_found_filter_1 = require("./not-found.filter");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "../../", "web-products/dist"),
                exclude: ["api-products/*"],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            firestore_service_1.FirestoreService,
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: not_found_filter_1.NotFoundExceptionFilter,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map