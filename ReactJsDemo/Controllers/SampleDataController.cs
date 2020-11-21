using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Entities;
using ApplicationCore.Interface;
using Microsoft.AspNetCore.Mvc;

namespace ReactJsDemo.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private readonly IEmployeeService _employeeService;

        public SampleDataController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }


        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        //public List<Employee> employees = new List<Employee>
        //{
        //    new Employee{ Id=1,Name="Manthan", Mobile="9867333333",Salary=4000},
        //    new Employee{ Id=2,Name="Ruhi", Mobile="9861111111",Salary=5000}
        //};

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        [HttpGet("[action]")]
        public IEnumerable<Employee> GetEmployees()
        {
            return _employeeService.GetAllEmployee();
        }

        [HttpGet("[action]")]
        public Employee GetById(Guid id)
        {
            if(id== Guid.Empty)
            {
                return null;
            }
            var employee =  _employeeService.GetById(id);

            if(employee==null)
            {
                return null;
            }
            return employee;
        }

        [HttpPost("[action]")]
        public void AddEmployee(Employee employee)
        {
            employee.Id = Guid.NewGuid();
            employee.DepartmentId = new Guid("039777f2-101c-49e7-9a1b-3627ca5d5327"); //Hard Coded for time being

            _employeeService.Create(employee);
        }

       
        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
        //public class Employee
        //{

        //    public int Id { get; set; }
        //    public string Name { get; set; }
        //    public string Mobile { get; set; }
        //    public decimal Salary { get; set; }
        //}
    }
}
