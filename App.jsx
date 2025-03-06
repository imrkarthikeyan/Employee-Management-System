import { useState } from 'react'
import './App.css'
import ListOfEmployeesComponent from './components/ListOfEmployeesComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* //http://localhost:3001 */}
          <Route path='/' element={<ListOfEmployeesComponent/>}></Route>

          {/* //http:localhost:3001/employees */}
          <Route path='/employees' element={<ListOfEmployeesComponent/>}></Route>

          {/* //http://localhost:3001/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent/>}></Route>

          {/* //http://localhost:3001/update-employee/1 */}
          <Route path='/update-employee/:id' element={<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent/>  
      </BrowserRouter>
    </>
  )
}

export default App
