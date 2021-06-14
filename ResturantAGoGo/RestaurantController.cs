using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantAGoGo
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantController : ControllerBase
    {
        [HttpGet("GetUser")]
        //public User GetUser(int userId)
        //{
        //    User user = new User();
        //    using (RestaurantContext restaurantContext = new RestaurantContext())
        //    {
        //        user = restaurantContext.Users.ToList().Find(u => u.UserId == userId);
        //        return user;
        //    }
        //}

        public User GetUserInfo(int userId, string password)
        {
            User user = new User();
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                user = restaurantContext.Users.ToList().Find(u => u.UserId == userId && u.Password == password);
                return user;
            }
        }



        //To edit the user information-not sure 


        //Add the user information
        //api/user/adduser
        [HttpPost("AddUser")]

        public User AddUser(string userName, string password)
        {
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                User user = new User();
                user.UserName = userName;
                user.Password = password;
                restaurantContext.Add(user);
                restaurantContext.SaveChanges();
                return user;
            }
        }

        //method to getting Favorite
        //api/favorite/getmyfavorite

        [HttpGet("GetMyFavorites")]
        public List<Favorite> GetMyFavorites()
        {
            using (RestaurantContext favoriteContext = new RestaurantContext())
            {
                return favoriteContext.Favorites.ToList();
            }
        }
        //api/favorite/AddFavorite
        //adding favarite
        [HttpPost("AddFavorite")]
        public Favorite AddFavorite(int userId, string yelpId, string restaurantName, string restaurantAddress, string img)
        {
            Favorite favorite = new Favorite();
            using (RestaurantContext favoriteContext = new RestaurantContext())
            {
                favorite.UserId = userId;
                favorite.YelpId = yelpId;
                favorite.RestaurantName = restaurantName;
                favorite.RestaurantAddress = restaurantAddress;
                favorite.Img = img;
                favoriteContext.Add(favorite);
                favoriteContext.SaveChanges();
                return favorite;

            }
        }

        //removing the favorite from the favorite list
        //api/favorite/deleteFav
        [HttpDelete("deleteFav")]
        public void RemoveFavorite(int userId, int favoriteId)
        {
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                Favorite deleteFav = new Favorite();
                deleteFav = restaurantContext.Favorites.ToList().Find(d => d.UserId == userId && d.FavoriteId == d.favoriteId);
                restaurantContext.Remove(deleteFav);
                restaurantContext.SaveChanges();
            }
        }


    }



}
