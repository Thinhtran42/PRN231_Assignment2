using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRN231_Group5_Assignment1_Repo.ViewModels.Book
{
    public class UpdateBookViewModel
    {
        public int? PubId { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public double Price { get; set; }
        public string Advance { get; set; }
        public string Royalty { get; set; }
        public int? YtdSale { get; set; }
        public string Notes { get; set; }
        public DateTime? PublishedDate { get; set; }
    }
}
