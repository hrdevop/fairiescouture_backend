import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderClothInterface } from "./interface/order-cloth.interface";
import { Orders } from "./order.model";

@Entity()
export class OrderClothes implements OrderClothInterface {


    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(type => Orders, orders => orders, { cascade: true })
    order: Orders;

    @Column()
    name: string;

    @Column('boolean')
    asterRequired: boolean;

    @Column('boolean')
    asterByClient: boolean;

    @Column('boolean')
    fabricRequired: boolean;

    @Column('text', { nullable: true })
    fabricDetail: string;

    @Column('text', { nullable: true })
    notes: string;

    @Column('date', { nullable: true })
    pickupDate: Date;

    @Column('time', { nullable: true })
    pickupTime: Date;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date
}