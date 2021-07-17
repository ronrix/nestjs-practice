export type EpisodeCreateInput = {
	startDate: Date;
	endDate?: Date;
	qrCodeMade: number;
}

export enum EpisodeStatus {
	ACTIVE = 'active',
	PAUSED = 'paused',
	CANCELLED = 'cancelled',
	DELETED = 'deleted'
}