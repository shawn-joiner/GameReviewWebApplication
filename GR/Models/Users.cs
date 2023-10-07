using System.ComponentModel.DataAnnotations;

namespace GR.Models
{
    public class Users
    {
        public int Id { get; set; }

        [Required (ErrorMessage = "Enter a valid username")]
        public string Username { get; set; }

        [Required (ErrorMessage = "Enter a valid password")]
        public string Password { get; set; }

        [Required]
        public string Email { get; set; }

        public string? Bio { get; set; }

        //[DataType(DataType.Date)]
        public DateTime? Joined { get; set; }

        public string? Picture { get; set; }

    }
}



