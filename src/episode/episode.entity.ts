import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";


// baseEntity is like schema, for database data
@Entity()
export class Episode extends BaseEntity {
	// adds ID automatically no need for "uuid"
	@ObjectIdColumn()
	_id: string;

	@Column({type: 'timestamptz'})
	startDate: Date;

	@Column({type: 'timestamptz', nullable: true})
	endDate: Date;

	@Column()
	status: string;

	@Column()
	qrCodeMade: number;

	// automatic
	@CreateDateColumn({type: 'timestamptz'})
	created: Date;

	// automatic
	@UpdateDateColumn({type: 'timestamptz'})
	updated: Date;

}