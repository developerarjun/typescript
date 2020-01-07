export interface IStudentRepo<T>{
    add(t: T):void;
    update(t: T):void;
    delete(id:number):boolean;
    findAll():T[];
    findById(id: number): T;
}