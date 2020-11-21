using ApplicationCore.Entities;
using System;
using System.Collections.Generic;

namespace ApplicationCore.Interface
{
    public interface IEmployeeService
    {
        IEnumerable<Employee> GetAllEmployee();
        Employee GetById(Guid id);
        void Create(Employee employee);
        void Update(Employee employee);
        void Delete(Employee employee);
    }
}
