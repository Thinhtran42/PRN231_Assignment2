using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRN231_Group5_Assignment1_Repo.ViewModels.Author
{
    public class CreateAuthorViewModel
    {
        public int AuthorId { get; set; }

        [Required(ErrorMessage = "FullName is required.")]
        [StringLength(40, ErrorMessage = "FullName can't be longer than 40 characters.")]
        public string FullName { get; set; } = null!;

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid Email Address.")]
        public string Email { get; set; } = null!;

        [Required(ErrorMessage = "Phone is required.")]
        [StringLength(10, ErrorMessage = "Phone numbers are 10 digits and start with 0")]
        public string Phone { get; set; } = null!;


        [Required(ErrorMessage = "Address is required.")]
        [StringLength(30, ErrorMessage = "Country can't be longer than 30 characters.")]
        public string Address { get; set; } = null!;

        [Required(ErrorMessage = "City is required.")]
        [StringLength(30, ErrorMessage = "City can't be longer than 30 characters.")]
        public string City { get; set; } = null!;


        [Required(ErrorMessage = "State is required.")]
        [StringLength(30, ErrorMessage = "State can't be longer than 30 characters.")]
        public string State { get; set; } = null!;

        [Required(ErrorMessage = "Zip is required.")]
        [StringLength(30, ErrorMessage = "Zip can't be longer than 30 characters.")]
        public string Zip { get; set; } = null!;
    }
}
