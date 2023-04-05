import { MeasurementType } from './../../measurement-type/model/measurement-type.model';
import { clientMeasurementInterface } from './../client-measurement/model/client-measurement.interface';
import { ClientMeasurement } from './../client-measurement/model/client-measurement.model';
import { ClientInterface } from './client.interface';
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Clients implements ClientInterface {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column({ nullable: true })
    lastName: string

    @Column({ length: 13, unique: true, nullable: true })
    phoneNumber: string

    @Column({ nullable: true, unique: true })
    emailId: string

    @Column({ nullable: true })
    flatNumber: string

    @Column({ nullable: true })
    residence: string

    @Column({ type: 'text', nullable: true })
    address: string

    @Column({ type: 'text', nullable: true })
    notes: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    // relationship
    @OneToMany(type => ClientMeasurement, clientMeasurement => clientMeasurement.client,)
    @JoinColumn()
    measurements: MeasurementType[]

    // function
    @BeforeUpdate()
    @BeforeInsert()
    properEmail() {
        this.emailId = this.emailId.toLowerCase().trim();
    }
}

