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
                    myCommand.Parameters.AddWithValue("@Id", id); //I'm not sure if this line is needed in the code
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
                    myCommand.Parameters.AddWithValue("@Game_id", emp.Game_id);
                    myCommand.Parameters.AddWithValue("@User_id", emp.User_id);
                    myCommand.Parameters.AddWithValue("@Title", emp.Title);
                    myCommand.Parameters.AddWithValue("@Review", emp.Review);
                    myCommand.Parameters.AddWithValue("@Gameplay", emp.Gameplay);
                    myCommand.Parameters.AddWithValue("@Presentation", emp.Presentation);
                    myCommand.Parameters.AddWithValue("@Engagement", emp.Engagement);
                    myCommand.Parameters.AddWithValue("@Difficulty", emp.Difficulty);
                    myCommand.Parameters.AddWithValue("@Replayable", emp.Replayable);
                    myCommand.Parameters.AddWithValue("@Created", emp.Created);
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
                    myCommand.Parameters.AddWithValue("@Game_id", emp.Game_id);
                    myCommand.Parameters.AddWithValue("@User_id", emp.User_id);
                    myCommand.Parameters.AddWithValue("@Title", emp.Title);
                    myCommand.Parameters.AddWithValue("@Review", emp.Review);
                    myCommand.Parameters.AddWithValue("@Gameplay", emp.Gameplay);
                    myCommand.Parameters.AddWithValue("@Presentation", emp.Presentation);
                    myCommand.Parameters.AddWithValue("@Engagement", emp.Engagement);
                    myCommand.Parameters.AddWithValue("@Difficulty", emp.Difficulty);
                    myCommand.Parameters.AddWithValue("@Replayable", emp.Replayable);
                    myCommand.Parameters.AddWithValue("@Created", emp.Created);
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
