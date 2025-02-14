package com.ems.ems_backend.service;

import com.ems.ems_backend.dto.EmployeeDto;
import com.ems.ems_backend.entity.Employee;
import com.ems.ems_backend.mapper.EmployeeMapper;
import com.ems.ems_backend.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class EmployeeServiceimpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee  createEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(createEmployee);
    }
}
