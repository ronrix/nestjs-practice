import { Body, Controller, Get, Post, Res} from "@nestjs/common";
import { Response } from "express";
import { EpisodeService } from "./episode.service";

@Controller('episodes')
export class EpisodeController {

	constructor(private readonly episodeService: EpisodeService){}

	@Get()
	async getQrCodes() {

	}

	@Post()	
	async create(@Body() body, @Res() res: Response) {
		const newEpisode = await this.episodeService.create(body);

		return res.json(newEpisode);
	}


}