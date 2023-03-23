import { ClientInterface } from './client.interface';
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Clients implements ClientInterface {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column({ nullable: true })
    lastName: string

    @Column({ type: 'integer', unique: true, nullable: true })
    phoneNumber: number

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

    @BeforeUpdate()
    @BeforeInsert()
    properEmail() {
        this.emailId = this.emailId.toLowerCase().trim();
    }
}

