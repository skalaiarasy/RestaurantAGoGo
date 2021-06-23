using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantAGoGo.Model
{
    public class YelpSingle
    {
        public string id { get; set; }
        public string alias { get; set; }
        public string name { get; set; }
        public string image_url { get; set; }
        public bool is_claimed { get; set; }
        public bool is_closed { get; set; }
        public string url { get; set; }
        public string phone { get; set; }
        public string display_phone { get; set; }
        public int review_count { get; set; }
        public Category[] categories { get; set; }
        public float rating { get; set; }
        public Location location { get; set; }
        public Coordinates coordinates { get; set; }
        public string[] photos { get; set; }
        public string price { get; set; }
        public Hour[] hours { get; set; }
        public string[] transactions { get; set; }
    }

    public class Hour
    {
        public Open[] open { get; set; }
        public string hours_type { get; set; }
        public bool is_open_now { get; set; }
    }

    public class Open
    {
        public bool is_overnight { get; set; }
        public string start { get; set; }
        public string end { get; set; }
        public int day { get; set; }
    }

}

