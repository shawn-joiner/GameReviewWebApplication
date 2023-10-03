using System.ComponentModel.DataAnnotations;

namespace GR.Models
{
    public class Games
    {
        public int GameId { get; set; }

        [Required(ErrorMessage = "Genre must be specified")]
        public int GenreID { get; set; }

        [Required(ErrorMessage = "Title is required")]
        public string GameTitle { get; set; }

        public TextWriter? GameBlurb { get; set; }

        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }

        public string? Developer { get; set; }

        public string? Publisher { get; set; }

    }
}



