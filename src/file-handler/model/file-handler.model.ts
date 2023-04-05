  
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { FileHandlerInterface } from './file-handler.interface';

@Entity()
export class Files implements FileHandlerInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('integer')
    size: number;

    @Column({ length: 10 })
    mimeType: string;

    @Column()
    url: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date
}