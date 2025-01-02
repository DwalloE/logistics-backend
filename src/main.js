import { NestFactory } from "@nestjs/core";
import { AppModule } from './app.module';
async function bootstrap() {
    var _a;
    const app = await NestFactory.create(AppModule);
    await app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000);
}
bootstrap();
