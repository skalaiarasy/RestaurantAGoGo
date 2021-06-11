using System;
using System.Collections.Generic;

#nullable disable

namespace RestaurantAGoGo
{
    public partial class Favorite
    {
        public int FavoriteId { get; set; }
        public int? UserId { get; set; }
        public string YelpId { get; set; }
        public string RestaurantName { get; set; }
        public string RestaurantAddress { get; set; }
        public string Img { get; set; }

        public virtual User User { get; set; }
    }
}
