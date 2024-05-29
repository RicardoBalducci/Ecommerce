"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreService = void 0;
const common_1 = require("@nestjs/common");
const admin = __importStar(require("firebase-admin"));
let FirestoreService = class FirestoreService {
    constructor() {
        const serviceAccount = require("../ecommerce-9e7cc-firebase-adminsdk-e5y0v-052a641049.json");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://ecommerce-9e7cc-default-rtdb.europe-west1.firebasedatabase.app",
        });
        this.db = admin.firestore();
    }
    async create(createdDto) {
        const firestore = this.db;
        await firestore.collection("/user").add(createdDto);
        console.log("si se pudo");
    }
    async eliminar(documentId) {
        const firestore = this.db;
        await firestore.collection("/user").doc(documentId).delete();
    }
    async modificar(documentId, updatedDto) {
        const firestore = this.db;
        await firestore.collection("/user").doc(documentId).update(updatedDto);
    }
    async getAll() {
        const firestore = this.db;
        const snapshot = await firestore.collection("/user").get();
        const user = snapshot.docs.map((doc) => doc.data());
        return user;
    }
};
exports.FirestoreService = FirestoreService;
exports.FirestoreService = FirestoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirestoreService);
//# sourceMappingURL=firestore.service.js.map