using ApplicationCore.Entities;
using ApplicationCore.Interface;
using System;
using System.Collections.Generic;

namespace ApplicationCore.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IRepository<Employee> _repository;
        public EmployeeService(IRepository<Employee> repository)
        {
            _repository = repository;
        }

        public void Create(Employee employee)
        {
            _repository.Add(employee);
        }

        public IEnumerable<Employee> GetAllEmployee()
        {
            return _repository.ListAll();
        }

        public Employee GetById(Guid id)
        {
            return _repository.GetById(id);
        }

        public void Update(Employee employee)
        {
            _repository.Update(employee);
        }
        public void Delete(Employee employee)
        {
            _repository.Delete(employee);
        }
    }
}
