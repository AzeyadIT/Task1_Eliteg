using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Models
{
    public class Team
    {
        public Team()
        {
            Players = new HashSet<Players>();
        }
        
        public int Id { get; set; }
        public String Name { get; set; }
        public String Country { get; set; }
        public String CoachName { get; set; }
        public DateTime? FoundationDate { get; set; }
        public byte[] LogoImage { get; set; }

        public virtual ICollection<Players> Players { get; set; }

    }
}
