using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRN231_Group5_Assignment1_Repo.ViewModels.Book
{
    public class CreateBookViewModel
    {
        public int? PubId { get; set; }
        public string? Title { get; set; }
        public string? Type { get; set; }
        public decimal? Price { get; set; }
        public decimal? Advance { get; set; }
        public decimal? Royalty { get; set; }
        public int? YtdSale { get; set; }
        public string? Notes { get; set; }
        public DateTime? PublishedDate { get; set; }
    }
}
