using System;
using System.Collections.Generic;

namespace PRN231_Group5_Assignment1_Repo.Models
{
    public partial class Author
    {
        public int AuthorId { get; set; }
        public string? FullName { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? Zip { get; set; }
    }
}
