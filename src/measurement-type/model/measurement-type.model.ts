import { ClientMeasurement } from './../../client/client-measurement/model/client-measurement.model';
import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn, Index, OneToMany } from 'typeorm';
import { MeasurementTypeInterface } from './measurement-type.interface';
import { clientMeasurementInterface } from 'src/client/client-measurement/model/client-measurement.interface';

@Entity()
export class MeasurementType implements MeasurementTypeInterface {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Index()
    @Column({ unique: true, nullable: false })
    name: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    // relationship
    @OneToMany(type => ClientMeasurement, clientMeasurement => clientMeasurement.measurementTypeId,)
    measurement: clientMeasurementInterface[];


    // functions
    @BeforeInsert()
    @BeforeUpdate()
    properName() {
        this.name = this.name.toLowerCase().trim()
    }


}