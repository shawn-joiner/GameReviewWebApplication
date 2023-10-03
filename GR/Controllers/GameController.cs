﻿using GR.Models;
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
        private readonly IWebHostEnvironment _env;
        public GamesController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
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
                            select from dbo.Games 
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
                    myCommand.Parameters.AddWithValue("@GameId", id); //I'm not sure if this line is needed in the code
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Games emp)
        {
            string query = @"
                            insert into dbo.Games
                            (Game, GenreId, Blurb, ReleaseDate, Developer, Publisher) 
                            values (@Game, @GenreId, @Blurb, @ReleaseDate, @Developer, @Publisher) 
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
                    myCommand.Parameters.AddWithValue("@GenreId", emp.GenreId);
                    myCommand.Parameters.AddWithValue("@Blurb", emp.Blurb);
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
                            set Game = @Game,
                             GenreId = @GenreId,
                             Blurb = @Blurb,
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
                    myCommand.Parameters.AddWithValue("@Game", emp.Game);
                    myCommand.Parameters.AddWithValue("@GenreId", emp.GenreId);
                    myCommand.Parameters.AddWithValue("@Blurb", emp.Blurb);
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
