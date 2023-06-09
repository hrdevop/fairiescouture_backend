import { OrderClothesMeasurementsInterface } from './interface/order-clothes-measurements.interface';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderClothes } from './order-clothes.model';
import { MeasurementType } from 'src/measurement-type/model/measurement-type.model';

@Entity()

export class OrderClothesMeasurements implements OrderClothesMeasurementsInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => OrderClothes, orderClothes => orderClothes)
    orderClothes: OrderClothes;

    @ManyToOne(type => MeasurementType, measurementType => measurementType)
    measurementType: MeasurementType;

    @Column({ type: 'decimal', precision: 5, scale: 3, nullable: true })
    inches: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date
}