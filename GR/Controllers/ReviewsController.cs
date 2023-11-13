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
                            select * from dbo.Reviews
                            where Id = @Id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Id", id); 
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpGet("user/{AppUser_Id}")]
        public JsonResult GetByUser(int AppUser_Id)
        {
            string query = @"
                            select * from dbo.Reviews
                            where AppUser_Id = @AppUser_Id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@AppUser_Id", AppUser_Id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpGet("game/{Game_Id}")]
        public JsonResult GetByGame(int Game_Id)
        {
            string query = @"
                            select * from dbo.Reviews
                            where Game_Id = @Game_Id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Game_Id", Game_Id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Reviews rev)
        {
            string query = @"
                            insert into dbo.Reviews
                            (Game_id, AppUser_id, Title, Review, Gameplay, Presentation, Engagement, Difficulty, Replayable, 
                            Created) 
                            values (@Game_id, @AppUser_id, @Title, @Review, @Gameplay, @Presentation, @Engagement, 
                            @Difficulty, @Replayable, default) 
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Game_id", rev.Game_id);
                    myCommand.Parameters.AddWithValue("@AppUser_id", rev.AppUser_id);
                    myCommand.Parameters.AddWithValue("@Title", rev.Title);
                    myCommand.Parameters.AddWithValue("@Review", rev.Review);
                    myCommand.Parameters.AddWithValue("@Gameplay", rev.Gameplay);
                    myCommand.Parameters.AddWithValue("@Presentation", rev.Presentation);
                    myCommand.Parameters.AddWithValue("@Engagement", rev.Engagement);
                    myCommand.Parameters.AddWithValue("@Difficulty", rev.Difficulty);
                    myCommand.Parameters.AddWithValue("@Replayable", rev.Replayable);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(Reviews rev)
        {
            string query = @"
                            update dbo.Reviews
                            set Title = @Title,
                             Review = @Review,
                             Gameplay = @Gameplay,
                             Presentation = @Presentation,
                             Engagement = @Engagement,
                             Difficulty = @Difficulty,
                             Replayable = @Replayable
                             where Id = @Id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Id", rev.Id);
                    myCommand.Parameters.AddWithValue("@Title", rev.Title);
                    myCommand.Parameters.AddWithValue("@Review", rev.Review);
                    myCommand.Parameters.AddWithValue("@Gameplay", rev.Gameplay);
                    myCommand.Parameters.AddWithValue("@Presentation", rev.Presentation);
                    myCommand.Parameters.AddWithValue("@Engagement", rev.Engagement);
                    myCommand.Parameters.AddWithValue("@Difficulty", rev.Difficulty);
                    myCommand.Parameters.AddWithValue("@Replayable", rev.Replayable);
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
                            where Id = @Id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Id", id);
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
