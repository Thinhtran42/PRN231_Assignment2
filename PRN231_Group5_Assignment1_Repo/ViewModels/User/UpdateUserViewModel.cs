using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRN231_Group5_Assignment1_Repo.ViewModels.User
{
    public class UpdateUserViewModel
    {
        public int? RoleId { get; set; }
        public int? PubId { get; set; }

        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? FulleName { get; set; }
        public string? Source { get; set; }
        public DateTime? HireDate { get; set; }
    }
}
