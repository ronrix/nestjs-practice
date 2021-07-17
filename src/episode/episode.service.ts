import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Episode } from "./episode.entity";
import { EpisodeCreateInput, EpisodeStatus } from "./episode.type";

@Injectable()
export class EpisodeService {

	constructor(@InjectRepository(Episode) private EpisodRepo: Repository<Episode>) {}

	// this service, takes the body data from the client as the argument, and create data to the DB and saves it 
	async create(params: EpisodeCreateInput): Promise<Episode> {
		const episode = this.EpisodRepo.create({...params, status: EpisodeStatus.ACTIVE})

		// save the data into the mongoDB
		return episode.save()
	}

}

// Entity: The Scheme or the columns properties that your database will save
// @InjectRepository({Entity})
// Repository<{Entity}>: our type