using Microsoft.AspNetCore.Identity;
using System;

namespace Infrastructure
{
    public class ApplicationUser : IdentityUser
    {
        public bool IsActive { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedDate { get; set; } = DateTime.UtcNow;

        public bool IsDeleted { get; set; }
    }
}
