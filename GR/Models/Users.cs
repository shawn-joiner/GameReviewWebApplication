using System.ComponentModel.DataAnnotations;

namespace GR.Models
{
    public class Users
    {
        public int UserId { get; set; }

        [Required (ErrorMessage = "Enter a valid username")]
        public string Username { get; set; }

        [Required (ErrorMessage = "Enter a valid password")]
        public string Password { get; set; }

        [Required]
        public string Email { get; set; }

        public TextReader? Bio { get; set; }

        public string? UserPicture { get; set; }

    }
}



