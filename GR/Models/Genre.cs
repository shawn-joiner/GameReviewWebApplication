using System.ComponentModel.DataAnnotations;

namespace GR.Models
{
    public class Genre
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Genre name is required")]
        public string Name { get; set; }

    }
}



