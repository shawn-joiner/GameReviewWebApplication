using System.ComponentModel.DataAnnotations;

namespace GR.Models
{
    public class Genres
    {
        public int GenreId { get; set; }

        [Required(ErrorMessage = "Genre name is required")]
        public string Genre { get; set; }

    }
}



