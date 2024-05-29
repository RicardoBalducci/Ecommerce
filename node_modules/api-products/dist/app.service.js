"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const firestore_service_1 = require("./firestore.service");
let AppService = class AppService {
    constructor(firestoreService) {
        this.firestoreService = firestoreService;
    }
    async create(createdDto) {
        await this.firestoreService.create(createdDto);
    }
    async delete(documentId) {
        await this.firestoreService.eliminar(documentId);
    }
    async update(documentId, updatedDto) {
        await this.firestoreService.modificar(documentId, updatedDto);
    }
    async getAll() {
        return await this.firestoreService.getAll();
    }
    async getAllId(documentId) {
        const users = await this.firestoreService.getAll();
        const selecteduser = users.find((user) => user.id === documentId);
        if (selecteduser) {
            console.log(selecteduser);
            return selecteduser;
        }
        else {
            throw new Error("user not found");
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [firestore_service_1.FirestoreService])
], AppService);
//# sourceMappingURL=app.service.js.map