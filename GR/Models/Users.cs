using System.ComponentModel.DataAnnotations;

namespace GR.Models
{
    public class Users
    {
        public int Id { get; set; }

        public string? Username { get; set; }

        public string? Password { get; set; }

        public string? Email { get; set; }

        public string? Bio { get; set; }

        public DateTime? Joined { get; set; }

        public string? Picture { get; set; }

    }
}



