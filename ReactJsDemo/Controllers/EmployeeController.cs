using ApplicationCore.Entities;
using ApplicationCore.Interface;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactJsDemo.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return _employeeService.GetAllEmployee();
        }

        // GET api/<controller>/6
        [HttpGet("{id}")]
        public Employee Get(Guid id)
        {
            if(id==Guid.Empty)
            {
                return null;
            }

            return _employeeService.GetById(id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post(Employee employee)
        {
            employee.Id = Guid.NewGuid();
            employee.DepartmentId = employee.DepartmentId; //Hard Coded for time being

            _employeeService.Create(employee);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(Guid id,Employee employee)
        {
            var employeeToEdit = _employeeService.GetById(id);

            employeeToEdit.FirstName = employee.FirstName;
            employeeToEdit.LastName = employee.LastName;
            employeeToEdit.Salary = employee.Salary;
            employeeToEdit.DepartmentId = employee.DepartmentId;

            _employeeService.Update(employeeToEdit);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            var employeeToDelete = _employeeService.GetById(id);
            _employeeService.Delete(employeeToDelete);
        }
    }
}
