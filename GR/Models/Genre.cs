using System.ComponentModel.DataAnnotations;

namespace GR.Models
{
    public class Genre
    {
        public int GenreId { get; set; }

        [Required(ErrorMessage = "Genre name is required")]
        public string GenreName { get; set; }

    }
}



