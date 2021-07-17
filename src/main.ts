import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

require('dotenv').config()

async function Bootstrap() {
	const logger = new Logger('Sample');
	const app = await NestFactory.create(AppModule);

	const PORT = process.env.PORT || 3000;

	await app.listen(PORT);
	
	logger.log(`Server running at port: ${PORT}`);

}
Bootstrap();