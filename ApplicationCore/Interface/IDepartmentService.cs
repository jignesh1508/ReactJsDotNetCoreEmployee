using ApplicationCore.Entities;
using System;
using System.Collections.Generic;

namespace ApplicationCore.Interface
{
    public interface IDepartmentService
    {
        IEnumerable<Department> GetAll();

        Department GetById(Guid Id);
    }
}
