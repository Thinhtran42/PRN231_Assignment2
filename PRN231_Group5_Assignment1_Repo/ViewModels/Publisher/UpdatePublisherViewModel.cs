using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRN231_Group5_Assignment1_Repo.ViewModels.Publisher
{
    public class UpdatePublisherViewModel
    {
        [Required(ErrorMessage = "Name is required.")]
        [StringLength(40, ErrorMessage = "Name can't be longer than 40 characters.")]
        public string Name { get; set; } = null!;

        [Required(ErrorMessage = "City is required.")]
        [StringLength(30, ErrorMessage = "City can't be longer than 30 characters.")]
        public string City { get; set; } = null!;

        [Required(ErrorMessage = "Sate is required.")]
        [StringLength(30, ErrorMessage = "State can't be longer than 30 characters.")]
        public string State { get; set; } = null!;

        [Required(ErrorMessage = "Country is required.")]
        [StringLength(15, ErrorMessage = "Country can't be longer than 15 characters.")]
        public string Country { get; set; } = null!;
    }
}
