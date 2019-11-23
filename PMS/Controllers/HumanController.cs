using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PMS.Models;

namespace PMS.Controllers
{
    [Route("api/humans")]
    public class HumanController : Controller
    {
        ApplicationContext db;
        //public IActionResult Index()
        //{
        //    return View();
        //}
        public HumanController(ApplicationContext context)
        {
            db = context;
            db.Humans.RemoveRange(db.Humans);
            db.SaveChanges();
        }
        [HttpGet]
        public IEnumerable<HumanViewModel> Get()
        {
            var humans = new List<HumanViewModel>();
            foreach (var i in db.Humans.ToList())
                humans.Add(new HumanViewModel(i));
            return humans;
        }
        [HttpPost]
        public IActionResult Post([FromBody]Human human)
        {
            if (ModelState.IsValid)
            {
                db.Humans.Add(human);
                db.SaveChanges();
                return Ok(new HumanViewModel(human));
            }
            return BadRequest(ModelState);
        }
        //[HttpGet]
        //public IActionResult Put()
        //{
        //    return Ok("Lalal");
        //    //if (ModelState.IsValid)
        //    //{
        //    //    db.Humans.Add(human);
        //    //    db.SaveChanges();
        //    //    return Ok(human);
        //    //}
        //    //return BadRequest(ModelState);
        //}
    }
}