import React,{useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListOfEmployeesComponent = () => {

const [employees, setEmployees]=useState([])

const navigater = useNavigate();

useEffect(()=>{
    getAllEmployees();
},[])

function getAllEmployees(){
    listEmployees().then((response)=>{
        setEmployees(response.data);
    }).catch(error => {
        console.error(error);
    }); 
}

function addNewEmployee(){
    navigater('/add-employee')
}

function updateEmployee(id){
    navigater(`/update-employee/${id}`)
}

function removeEmployee(id) {
    console.log(id);
    deleteEmployee(id).then((response)=>{
        getAllEmployees();
    }).catch(error=>{
        console.error(error);
    })
}

  return (
    <div className='container'>
        <h2>List of Employees</h2>
        <button onClick={addNewEmployee} className="btn btn-success mb-2">Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}
                                style={{marginLeft:'10px'}}
                                    >Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListOfEmployeesComponent