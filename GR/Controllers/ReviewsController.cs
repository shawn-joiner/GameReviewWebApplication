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

        [HttpPost]
        public JsonResult Post(Reviews rev)
        {
            string query = @"
                            insert into dbo.Reviews
                            (Game_id, User_id, Title, Review, Gameplay, Presentation, Engagement, Difficulty, Replayable, 
                            Created) 
                            values (@Game_id, @User_id, @Title, @Review, @Gameplay, @Presentation, @Engagement, 
                            @Difficulty, @Replayable, @Created) 
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
                    myCommand.Parameters.AddWithValue("@User_id", rev.User_id);
                    myCommand.Parameters.AddWithValue("@Title", rev.Title);
                    myCommand.Parameters.AddWithValue("@Review", rev.Review);
                    myCommand.Parameters.AddWithValue("@Gameplay", rev.Gameplay);
                    myCommand.Parameters.AddWithValue("@Presentation", rev.Presentation);
                    myCommand.Parameters.AddWithValue("@Engagement", rev.Engagement);
                    myCommand.Parameters.AddWithValue("@Difficulty", rev.Difficulty);
                    myCommand.Parameters.AddWithValue("@Replayable", rev.Replayable);
                    myCommand.Parameters.AddWithValue("@Created", rev.Created);
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
                            set Game_id = @Game_id,
                             User_id = @User_id,
                             Title = @Title,
                             Review = @Review,
                             Gameplay = @Gameplay,
                             Presentation = @Presentation,
                             Engagement = @Engagement,
                             Difficulty = @Difficulty,
                             Replayable = @Replayable,
                             Created = @Created
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
                    myCommand.Parameters.AddWithValue("@Game_id", rev.Game_id);
                    myCommand.Parameters.AddWithValue("@User_id", rev.User_id);
                    myCommand.Parameters.AddWithValue("@Title", rev.Title);
                    myCommand.Parameters.AddWithValue("@Review", rev.Review);
                    myCommand.Parameters.AddWithValue("@Gameplay", rev.Gameplay);
                    myCommand.Parameters.AddWithValue("@Presentation", rev.Presentation);
                    myCommand.Parameters.AddWithValue("@Engagement", rev.Engagement);
                    myCommand.Parameters.AddWithValue("@Difficulty", rev.Difficulty);
                    myCommand.Parameters.AddWithValue("@Replayable", rev.Replayable);
                    myCommand.Parameters.AddWithValue("@Created", rev.Created);
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
