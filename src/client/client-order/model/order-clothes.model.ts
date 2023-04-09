import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderClothesInterface } from "./interface/order-clothes.interface";
import { Clients } from "src/client/model/client.model";
import { OrderClothesMeasurements } from "./order-clothes-measurements.model";
import { OrderClothesMeasurementsInterface } from "./interface/order-clothes-measurements.interface";
import { OrderClothesReferences } from "./order-clothes-references.model";
import { OrderClothesReferencesInterface } from "./interface/order-clothes-references.interface";
import { OrderClothesCost } from "./order-clothes-cost.model";
import { OrderClothesCostInterface } from "./interface/order-clothes-cost.interface";


@Entity()
export class OrderClothes implements OrderClothesInterface {


    @PrimaryGeneratedColumn('uuid')
    id: string


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

    // foreign key
    @ManyToOne(() => Clients, clients => clients, { cascade: true })
    client: Clients

    @OneToMany(() => OrderClothesMeasurements, orderClothesMeasurements => orderClothesMeasurements)
    measurement: OrderClothesMeasurementsInterface[];

    @OneToMany(() => OrderClothesReferences, orderClothesReferences => orderClothesReferences)
    references: OrderClothesReferencesInterface[];

    @OneToMany(() => OrderClothesCost, orderClothesCost => orderClothesCost)
    cost: OrderClothesCostInterface[]
}