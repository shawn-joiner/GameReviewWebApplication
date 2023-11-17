using GR.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;

namespace GR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public GamesController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            string query = @"
                            select * from dbo.Games
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
                            select * from dbo.Games 
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
        public JsonResult Post(Games gam)
        {
            string query = @"
                            insert into dbo.Games
                            (Title, Genre_id, Blurb, Release, Developer, Publisher, Image) 
                            values (@Title, @Genre_id, @Blurb, @Release, @Developer, @Publisher, @Image) 
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Title", gam.Title);
                    myCommand.Parameters.AddWithValue("@Genre_id", gam.Genre_id);
                    myCommand.Parameters.AddWithValue("@Blurb", gam.Blurb);
                    myCommand.Parameters.AddWithValue("@Release", gam.Release);
                    myCommand.Parameters.AddWithValue("@Developer", gam.Developer);
                    myCommand.Parameters.AddWithValue("@Publisher", gam.Publisher);
                    myCommand.Parameters.AddWithValue("@Image", gam.Image);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }
       

        [HttpPut]
        public JsonResult Put(Games gam)
        {
            string query = @"
                            update dbo.Games
                            set Title = @Title,
                             Genre_id = @Genre_id,
                             Blurb = @Blurb,
                             Release = @Release,
                             Developer = @Developer,
                             Publisher = @Publisher
                             Image = @Image
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
                    myCommand.Parameters.AddWithValue("@Id", gam.Id);
                    myCommand.Parameters.AddWithValue("@Title", gam.Title);
                    myCommand.Parameters.AddWithValue("@Genre_id", gam.Genre_id);
                    myCommand.Parameters.AddWithValue("@Blurb", gam.Blurb);
                    myCommand.Parameters.AddWithValue("@Release", gam.Release);
                    myCommand.Parameters.AddWithValue("@Developer", gam.Developer);
                    myCommand.Parameters.AddWithValue("@Publisher", gam.Publisher);
                    myCommand.Parameters.AddWithValue("@Image", gam.Image);
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
