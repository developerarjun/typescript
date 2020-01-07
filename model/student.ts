export class Student{
    private id:number;
    private firstName: string;
    private lastName: string;
    getFirstName():string{
        return this.firstName;
    }
    getLastName(): string{
        return this.lastName;
    }
    getId():number{
        return this.id;
    }
    setFirstName(firstName : string){
        this.firstName=firstName;
    }
    setLastName(lastName: string){
        this.lastName=lastName;
    }
    setId(id:number){
        this.id=id;
    }
}