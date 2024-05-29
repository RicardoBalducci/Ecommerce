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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const firestore_service_1 = require("../firestore.service");
let UserService = class UserService {
    constructor(firestoreService) {
        this.firestoreService = firestoreService;
    }
    async create(createdDto) {
        const firestore = this.firestoreService.getFirestoreInstance();
        const prueba = await firestore.collection("/user").add(createdDto);
        console.log("si se pudo");
    }
    async login(username, password) {
        const firestore = this.firestoreService.getFirestoreInstance();
        const userDoc = await firestore.collection("user").doc(username).get();
        const passwordDoc = await firestore.collection("user").doc(password).get();
        if (!userDoc.exists && !passwordDoc) {
            throw new Error("El usuario no existe");
        }
        return console.log("esta logeado");
    }
    async getAll() {
        const firestore = this.firestoreService.getFirestoreInstance();
        const snapshot = await firestore.collection("/user").get();
        const user = snapshot.docs.map((doc) => doc.data());
        return user;
    }
    async getById(id) {
        const firestore = this.firestoreService.getFirestoreInstance();
        const userDoc = await firestore.collection("user").doc(id).get();
        if (!userDoc.exists) {
            throw new Error("El usuario no existe");
        }
        return {
            id: userDoc.id,
            ...userDoc.data(),
        };
    }
    async delete(id) {
        const firestore = this.firestoreService.getFirestoreInstance();
        const userDoc = await firestore.collection("user").doc(id).get();
        if (!userDoc.exists) {
            throw new Error("El usuario no existe");
        }
        await firestore.collection("user").doc(id).delete();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [firestore_service_1.FirestoreService])
], UserService);
//# sourceMappingURL=user.service.js.map