import { MeasurementType } from './../../../measurement-type/model/measurement-type.model';
import { Clients } from 'src/client/model/client.model';
import { clientMeasurementInterface } from './client-measurement.interface';
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, TableForeignKey, UpdateDateColumn } from "typeorm";

@Entity()
export class ClientMeasurement implements clientMeasurementInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Index()
    @Column()
    clientId: string;

    @Index()
    @Column()
    measurementTypeId: string;

    @Column({ type: 'decimal', precision: 5, scale: 3, nullable: false })
    inches: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date


    // relationship
    @ManyToOne(type => Clients, client => client, { cascade: true })
    // @JoinColumn()
    client: Clients[];

    @ManyToOne(type => MeasurementType, measurementType => measurementType, { cascade: true })
    // @JoinColumn()
    measurementType: MeasurementType;
}