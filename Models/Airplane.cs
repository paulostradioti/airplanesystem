using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AirplaneSystem.Models
{
    public class Airplane
    {
        [Key]
        public int Code { get; set; }
        public string Model { get; set; }
        public int Passengers { get; set; }
        public DateTime? Created { get; set; }
        public DateTime? LastUpdate { get; set; }
    }
}
