import { IStudentRepo } from "../CRUDRepo/IServices";

export abstract class BaseRepository<T> implements IStudentRepo<T>{
    add(t: T): void {
        throw new Error("Method not implemented.");
    }   
    update(t: T): void {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    findAll(): T[] {
        throw new Error("Method not implemented.");
    }
    findById(id: number): T {
        throw new Error("Method not implemented.");
    }
}