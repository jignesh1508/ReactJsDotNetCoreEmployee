using System;

namespace ApplicationCore.Entities
{
    public class Employee : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public decimal Salary { get; set; }

        public Guid DepartmentId { get; set; }
        public Department Department { get; set; }

    }
}
