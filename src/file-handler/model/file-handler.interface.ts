export interface FileHandlerInterface {
    id?: string;
    name: string,
    size: number,
    mimeType: string,
    url: string,
    createdAt?: Date,
    updatedAt?: Date,
}