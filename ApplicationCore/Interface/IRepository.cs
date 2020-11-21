using ApplicationCore.Entities;
using System;
using System.Collections.Generic;

namespace ApplicationCore.Interface
{
    public interface IRepository<T> where T : BaseEntity
    {
        T Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        T GetById(Guid id);
        IEnumerable<T> ListAll();
    }
}
