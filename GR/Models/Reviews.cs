using System.ComponentModel.DataAnnotations;

namespace GR.Models
{
    public class Reviews
    {
        public int ReviewId { get; set; }


        public string Game {  get; set; }
        public string User {  get; set; }

        [Required (ErrorMessage = "The review's title is required")]
        public string ReviewTitle { get; set; }

        public TextWriter? Review  { get; set; }

        [Range (1, 10, ErrorMessage = "Please select a number between 1 and 10")]
        public int GamePlay { get; set; }

        [Range(1, 10, ErrorMessage = "Please select a number between 1 and 10")]
        public int Presentation { get; set; }

        [Range(1, 10, ErrorMessage = "Please select a number between 1 and 10")]
        public int Engagement { get; set; }

        [Range(1, 10, ErrorMessage = "Please select a number between 1 and 10")]
        public int Difficulty { get; set; }

        [Range(1, 10, ErrorMessage = "Please select a number between 1 and 10")]
        public int Replayable { get; set; }

        [DataType(DataType.Date)]
        public DateTime DateCreated { get; set; }

    }//Game, User, ReviewTitle, Review, GamePlay, Presentation, Engagement, Difficulty, Replayable, DateCreated
}



