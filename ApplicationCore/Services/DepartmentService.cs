using ApplicationCore.Entities;
using ApplicationCore.Interface;
using System;
using System.Collections.Generic;

namespace ApplicationCore.Services
{
    public class DepartmentService : IDepartmentService
    {
        private readonly IRepository<Department> _repository;

        public DepartmentService(IRepository<Department> repository)
        {
            _repository = repository;
        }

        public IEnumerable<Department> GetAll()
        {
            return _repository.ListAll();
        }

        public Department GetById(Guid Id)
        {
            return _repository.GetById(Id);
        }
    }
}
