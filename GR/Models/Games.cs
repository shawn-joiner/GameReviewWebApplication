using System.ComponentModel.DataAnnotations;

namespace GR.Models
{
    public class Games
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Genre must be specified")]
        public int Genre_id { get; set; }

        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; }

        public string? Blurb { get; set; }

        //[DataType(DataType.Date)]
        public DateTime Release { get; set; }

        public string? Developer { get; set; }

        public string? Publisher { get; set; }

    }
}



