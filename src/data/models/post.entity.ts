import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('data_post')
export class DataPostEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({default : ''})
    body: string;

    @Column({type : 'timestamp', default: () =>'CURRENT_TIMESTAMP'})
    createdAt: Date
}