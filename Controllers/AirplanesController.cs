using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirplaneSystem.Data;
using AirplaneSystem.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AirplaneSystem.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class AirplanesController : Controller
    {
        private readonly AirplanesDbContext _context;

        public AirplanesController(AirplanesDbContext context)
        {
            _context = context;
        }

        // GET: api/Airplanes
        [HttpGet]
        public IEnumerable<Airplane> GetAirplane()
        {
            // Obs: In a large application we would avoid using the context directly in the Controller. 
            //  We could, for example, have an infrastructure or database layer to deal with this sort of access.

            // In a large application we would probably want to use async controllers and calls as well.
            return _context.Airplane;
        }

        // GET: api/Airplanes/5
        [HttpGet("{code}")]
        public IActionResult GetAirplane([FromRoute] int code)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var airplane = _context.Airplane.FirstOrDefault(m => m.Code == code);

            if (airplane == null)
            {
                return NotFound();
            }

            return Ok(airplane);
        }

        // PUT: api/Airplanes/5
        [HttpPut("{code}")]
        public IActionResult PutAirplane([FromRoute] int code, [FromBody] Airplane airplane)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (code != airplane.Code)
            {
                return BadRequest();
            }

            _context.Entry(airplane).State = EntityState.Modified;

            try
            {
                _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AirplaneExists(code))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Airplanes
        [HttpPost]
        public IActionResult PostAirplane([FromBody] Airplane airplane)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Airplane.Add(airplane);
            _context.SaveChangesAsync();

            return CreatedAtAction("GetAirplane", new { code = airplane.Code }, airplane);
        }

        // DELETE: api/Airplanes/5
        [HttpDelete("{code}")]
        public IActionResult DeleteAirplane([FromRoute] int code)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var airplane = _context.Airplane.FirstOrDefault(m => m.Code == code);
            if (airplane == null)
            {
                return NotFound();
            }

            _context.Airplane.Remove(airplane);
            _context.SaveChangesAsync();

            return Ok(airplane);
        }

        private bool AirplaneExists(int code)
        {
            return _context.Airplane.Any(e => e.Code == code);
        }
    }
}
