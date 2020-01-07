import { RepoImpl } from "./Impl/repoimpl";
import { Student } from "./model/student";

let student = new RepoImpl();
let s1 = new Student();
s1.setId(1);
s1.setLastName("Ghimire")
s1.setFirstName("Arjun")
student.add(s1);