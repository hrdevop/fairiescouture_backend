import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { MeasurementTypeInterface } from './measurement-type.interface';

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

    @BeforeInsert()
    @BeforeUpdate()
    properName() {
        this.name = this.name.toLowerCase().trim()
    }
}