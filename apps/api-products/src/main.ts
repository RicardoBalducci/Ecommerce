import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  var admin = require("firebase-admin");

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        databaseURL: "https://e-commerce-2021.firebaseio.com",
        storageBucket: "gs://e-commerce-2021.appspot.com",
        projectId: "e-commerce-2021",
        appId: "1:1033817468988:web:c23aaebdceb6d0d7e31339",
        measurementId: "G-0KK1FTSE68",
        apiKey: "AIzaSyAFTwRhVGBSOs75rQ5xH2Rfe4OPnL8mB2s",
      }),
    });
  }
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api");
  await app.listen(3020);
}
bootstrap();
