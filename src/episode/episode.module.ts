import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { EpisodeController } from "./episode.controller";
import { Episode } from "./episode.entity";
import { EpisodeService } from "./episode.service";

@Module({
	imports: [TypeOrmModule.forFeature([Episode])],
	controllers: [EpisodeController],
	providers: [EpisodeService],
})

export class EpisodeModule{}