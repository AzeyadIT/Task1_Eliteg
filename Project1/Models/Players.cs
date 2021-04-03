using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Models
{
    public class Players
    {

        public int Id { get; set; }
        public String Name { get; set; }
        public String Nationality { get; set; }
        public DateTime? DOB { get; set; }
        public byte[] Image { get; set; }

        public int TeamId { get; set; }
        public Team Team { get; set; }

    }
}
