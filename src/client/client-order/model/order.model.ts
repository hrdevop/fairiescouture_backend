import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrdersInterface } from "./interface/order.interface";
import { Clients } from "src/client/model/client.model";

@Entity()
export class Orders implements OrdersInterface {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => Clients, client => client, { cascade: true })
    client: Clients;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date
}