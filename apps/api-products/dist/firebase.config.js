"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseConfig = void 0;
const app_1 = require("firebase/app");
const analytics_1 = require("firebase/analytics");
exports.firebaseConfig = {
    apiKey: "AIzaSyAFTwRhVGBSOs75rQ5xH2Rfe4OPnL8mB2s",
    authDomain: "ecommerce-9e7cc.firebaseapp.com",
    projectId: "ecommerce-9e7cc",
    storageBucket: "ecommerce-9e7cc.appspot.com",
    messagingSenderId: "611837136539",
    appId: "1:611837136539:web:6f7704f8967220882b403e",
    measurementId: "G-0KK1FTSE68",
};
const app = (0, app_1.initializeApp)(exports.firebaseConfig);
const analytics = (0, analytics_1.getAnalytics)(app);
//# sourceMappingURL=firebase.config.js.map