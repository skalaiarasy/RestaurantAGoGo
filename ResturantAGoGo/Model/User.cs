using System;
using System.Collections.Generic;

#nullable disable

namespace RestaurantAGoGo
{
    public partial class User
    {
        public User()
        {
            Favorites = new HashSet<Favorite>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Favorite> Favorites { get; set; }
    }
}
