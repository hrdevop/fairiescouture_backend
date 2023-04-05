import { OrderClothCostInterface } from './interface/order-cloth-cost.interface';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderClothes } from './order-cloth.model';

@Entity()

export class OrderClothCosts implements OrderClothCostInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => OrderClothes, orderClothes => orderClothes)
    orderClothes: OrderClothes;


    @Column({ nullable: true })
    title: string;

    @Column({ type: 'decimal', precision: 5, scale: 3, nullable: true })
    price: number;


    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

}