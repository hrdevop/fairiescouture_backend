import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { MeasurementInterface } from './measurement.interface';
@Entity()
export class Measurements implements MeasurementInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true, nullable: false })
    name: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    @BeforeInsert()
    @BeforeUpdate()
    properName() {
        this.name = this.name.toLowerCase().trim()
    }
}