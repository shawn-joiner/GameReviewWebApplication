using GR.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;

namespace GR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public GameController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }



        [HttpPost]
        public JsonResult Post(Games emp)
        {
            string query = @"
                            insert into dbo.Game
                            (GameTitle, GenreId, GameBlurb, ReleaseDate, Developer, Publisher) 
                            values (@GameTitle, @GenreId, @GameBlurb, @ReleaseDate, @Developer, @Publisher) 
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@GameTitle", emp.GameTitle);
                    myCommand.Parameters.AddWithValue("@GenreId", emp.GenreId);
                    myCommand.Parameters.AddWithValue("@GameBlurb", emp.GameBlurb);
                    myCommand.Parameters.AddWithValue("@ReleaseDate", emp.ReleaseDate);
                    myCommand.Parameters.AddWithValue("@Developer", emp.Developer);
                    myCommand.Parameters.AddWithValue("@Publisher", emp.Publisher);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }
       

        [HttpPut]
        public JsonResult Put(Games emp)
        {
            string query = @"
                            update dbo.Games
                            set GameTitle = @GameTitle,
                             GenreId = @GenreId,
                             GameBlurb = @GameBlurb,
                             ReleaseDate = @ReleaseDate
                             Developer = @Developer
                             Publisher = @Publisher
                             where GameId = @GameId
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@GameTitle", emp.GameTitle);
                    myCommand.Parameters.AddWithValue("@GenreId", emp.GenreId);
                    myCommand.Parameters.AddWithValue("@GameBlurb", emp.GameBlurb);
                    myCommand.Parameters.AddWithValue("@ReleaseDate", emp.ReleaseDate);
                    myCommand.Parameters.AddWithValue("@Developer", emp.Developer);
                    myCommand.Parameters.AddWithValue("@Publisher", emp.Publisher);
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
                            delete from dbo.Games
                            where GameId = @GameId
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@GameId", id);
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
