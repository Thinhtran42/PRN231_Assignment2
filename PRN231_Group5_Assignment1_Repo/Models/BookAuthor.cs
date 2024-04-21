using System;
using System.Collections.Generic;

namespace PRN231_Group5_Assignment1_Repo.Models
{
    public partial class BookAuthor
    {
        public int? AuthorId { get; set; }
        public int? BookId { get; set; }
        public int? AuthorOrder { get; set; }
        public decimal? RoyalityPercentage { get; set; }

        public virtual Author? Author { get; set; }
        public virtual Book? Book { get; set; }
    }
}
