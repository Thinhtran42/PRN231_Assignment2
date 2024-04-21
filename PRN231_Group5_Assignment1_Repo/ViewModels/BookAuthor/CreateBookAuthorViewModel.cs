using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRN231_Group5_Assignment1_Repo.ViewModels.BookAuthor
{
    public class CreateBookAuthorViewModel
    {
        public int AuthorId { get; set; }
        public int BookId { get; set; }
        public int AuthorOrder {  get; set; }
        public double RoyalityPercentage { get; set; }

    }
}
