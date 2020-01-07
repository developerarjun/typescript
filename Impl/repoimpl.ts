import { BaseRepository } from "../Repo/BaseRepo";
import { Student } from "../model/student";

export class RepoImpl extends BaseRepository<Student>{
    add(t: Student): void {
        console.log(t.getId());
        console.log(t.getFirstName());
        console.log(t.getLastName());
    }   
    update(t: Student): void {
        console.log("Inside update");
    }
    delete(id: number): boolean {
        return true;
    }
    findAll(): Student[] {
        console.log("Inside findall");
        return null;
    }
    findById(id: number): Student {
        console.log("Inside findbyid");
        return null;
    }
}