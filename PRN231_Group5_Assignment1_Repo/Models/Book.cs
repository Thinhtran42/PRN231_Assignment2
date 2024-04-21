using System;
using System.Collections.Generic;

namespace PRN231_Group5_Assignment1_Repo.Models
{
    public partial class Book
    {
        public int BookId { get; set; }
        public int? PubId { get; set; }
        public string? Title { get; set; }
        public string? Type { get; set; }
        public decimal? Price { get; set; }
        public decimal? Advance { get; set; }
        public decimal? Royalty { get; set; }
        public int? YtdSale { get; set; }
        public string? Notes { get; set; }
        public DateTime? PublishedDate { get; set; }

        public virtual Publisher? Pub { get; set; }
    }
}
