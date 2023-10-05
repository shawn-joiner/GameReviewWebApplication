using System.ComponentModel.DataAnnotations;

namespace GR.Models
{
    public class Reviews
    {
        public int Id { get; set; }


        public int Game_id {  get; set; }
        public int User_id {  get; set; }

        [Required (ErrorMessage = "The review's title is required")]
        public string Title { get; set; }

        public string Review  { get; set; }//I'm not sure if string is the right type for text in SQL

        [Range (1, 10, ErrorMessage = "Please select a number between 1 and 10")]
        public int Gameplay { get; set; }

        [Range(1, 10, ErrorMessage = "Please select a number between 1 and 10")]
        public int Presentation { get; set; }

        [Range(1, 10, ErrorMessage = "Please select a number between 1 and 10")]
        public int Engagement { get; set; }

        [Range(1, 10, ErrorMessage = "Please select a number between 1 and 10")]
        public int Difficulty { get; set; }

        [Range(1, 10, ErrorMessage = "Please select a number between 1 and 10")]
        public int Replayable { get; set; }

        //[DataType(DataType.Date)]
        public DateTime Created { get; set; }

    }
}



