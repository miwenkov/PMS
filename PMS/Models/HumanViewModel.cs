using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PMS.Models
{
    public class HumanViewModel
    {
        public Human Human { get; set; }
        public bool IsNorm { get; set; }
        //Method calculate normal weight using formul: 
        //normal_weight = 50 + 0.75 * (H - 150) + (A / 9)
        //H - height, A - age
        double CalcNormalWeight()
        {
            return 50 + 0.75 * (Human.Height - 150) + (Human.Age / 9);
        }
        public HumanViewModel(Human human)
        {
            Human = human;
            var norm = CalcNormalWeight();
            if (human.Weight <= norm + 1 && human.Weight >= norm - 1)
                IsNorm = true;
            else IsNorm = false;
        }
    }
}
