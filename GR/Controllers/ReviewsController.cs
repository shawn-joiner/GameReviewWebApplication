using GR.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;

namespace GR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public ReviewsController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            string query = @"
                            select * from dbo.Reviews
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpGet("{id}")]
        public JsonResult GetById(int id)
        {
            string query = @"
                            select from dbo.Reviews
                            where ReviewId = @ReviewId
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ReviewId", id); //I'm not sure if this line is needed in the code
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Reviews emp)
        {
            string query = @"
                            insert into dbo.Reviews
                            (Game, User, ReviewTitle, Review, GamePlay, Presentation, Engagement, Difficulty, Replayable, 
                            DateCreated) 
                            values (@Game, @User, @ReviewTitle, @Review, @GamePlay, @Presentation, @Engagement, 
                            @Difficulty, @Replayable, @DateCreated) 
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Game", emp.Game);
                    myCommand.Parameters.AddWithValue("@User", emp.User);
                    myCommand.Parameters.AddWithValue("@ReviewTitle", emp.ReviewTitle);
                    myCommand.Parameters.AddWithValue("@Review", emp.Review);
                    myCommand.Parameters.AddWithValue("@GamePlay", emp.GamePlay);
                    myCommand.Parameters.AddWithValue("@Presentation", emp.Presentation);
                    myCommand.Parameters.AddWithValue("@Engagement", emp.Engagement);
                    myCommand.Parameters.AddWithValue("@Difficulty", emp.Difficulty);
                    myCommand.Parameters.AddWithValue("@Replayable", emp.Replayable);
                    myCommand.Parameters.AddWithValue("@DateCreated", emp.DateCreated);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(Reviews emp)
        {
            string query = @"
                            update dbo.Reviews
                            set Game = @Game,
                             User = @User,
                             ReviewTitle = @ReviewTitle,
                             Review = @Review
                             GamePlay = @GamePlay
                             Presentation = @Presentation
                             Engagement = @Engagement
                             Difficulty = @Difficulty
                             Replayable = @Replayable
                             DateCreated = @DateCreated
                             where ReviewId = @ReviewId
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Game", emp.Game);
                    myCommand.Parameters.AddWithValue("@User", emp.User);
                    myCommand.Parameters.AddWithValue("@ReviewTitle", emp.ReviewTitle);
                    myCommand.Parameters.AddWithValue("@Review", emp.Review);
                    myCommand.Parameters.AddWithValue("@GamePlay", emp.GamePlay);
                    myCommand.Parameters.AddWithValue("@Presentation", emp.Presentation);
                    myCommand.Parameters.AddWithValue("@Engagement", emp.Engagement);
                    myCommand.Parameters.AddWithValue("@Difficulty", emp.Difficulty);
                    myCommand.Parameters.AddWithValue("@Replayable", emp.Replayable);
                    myCommand.Parameters.AddWithValue("@DateCreated", emp.DateCreated);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                            delete from dbo.Reviews
                            where ReviewId = @ReviewId
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ReviewId", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }


        
    }
}
