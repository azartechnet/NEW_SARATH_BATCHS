import { useEffect,useState } from "react";
import api from "../services/api";
function StudentTable()
{
    const [students,setStudents]=useState([]);
    const loadStudents=async()=>{
        const res=await api.get("/students");
        setStudents(res.data);
    }
    useEffect(()=>{
        loadStudents();
    },[])
    return(
        <div className="container mt-4">
           <h2>StudentList</h2>
           <table className="table table-bordered table-striped">
               <thead>
                   <tr>
                       <td>ID</td>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Course</th>
                   </tr>
               </thead>
               <tbody>
                   {
                    students.map((student,index)=>(
                        <tr key={student._id}>
                            <td>{index+1}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.course}</td>
                        </tr>
                    ))
                   }
               </tbody>
           </table>
        </div>
    )
}
export default StudentTable;