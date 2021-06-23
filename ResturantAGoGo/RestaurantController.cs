using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestaurantAGoGo.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace RestaurantAGoGo
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantController : ControllerBase
    {

        [HttpGet("getall")]
        //api/Restaurant/getall
        public List<User> GetAll()
        {
            User user = new User();
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                
                return restaurantContext.Users.ToList();
            }
        }
        
        [HttpGet("getuser")]
        public User GetUser(int userId)
        {
            User user = new User();
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                user = restaurantContext.Users.ToList().Find(u => u.UserId == userId);
                return user;
            }
        }
        [HttpGet("getuserinfo")]
        //api/Restaurant/getuserinfo
        public User GetUserInfo(string userName, string password)
        {
            User user = new User();
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                user = restaurantContext.Users.ToList().Find(u => u.UserName == userName && u.Password == password);
                return user;
            }
        }

        

        //To edit the user information-not sure 
        //api/Restaurant/updateuser
        //https://localhost:44334/api/Restaurant/updateuser?userName=Jean&password=54321
        [HttpPut("updateuser")]
        public User UpdateUserInfo(string userName, string password)
        {
            User user = new User();
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                user = restaurantContext.Users.ToList().Find(u => u.UserName == userName);
                user.Password = password;
                restaurantContext.SaveChanges();
                return user;
            }
        }

        

    //Register the new user 
    //api/Restaurant/adduser
    [HttpPost("adduser")]

        public User AddUser(string userName, string password)
        {
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                User user = new User();
                user.UserName = userName;
                user.Password = password;                
                User result = restaurantContext.Users.ToList().Find(f => f.Password == password); 
                if (result == null)
                {
                    user.UserName = userName;
                    user.Password = password;
                    restaurantContext.Add(user);
                    restaurantContext.SaveChanges();
                    return user;
                }
                else
                {
                    Console.WriteLine("The user is already exists");
                    return null;
                }
                
            }
        }

        //method for getting Favorite
        //api/Restaurant/getmyfavorites

        [HttpGet("getmyfavorites")]
        public List<Favorite> GetMyFavorites()
        {
            using (RestaurantContext favoriteContext = new RestaurantContext())
            {
                return favoriteContext.Favorites.ToList();
            }
        }
        //api/favorite/addfavorite
        //adding favarite
        [HttpPost("addfavorite")]
        public Favorite AddFavorite(int userId, string yelpID, string name, string address, string img)
        {
            
            Favorite favorite = new Favorite();
            
            using (RestaurantContext favoriteContext = new RestaurantContext())
            {
                Favorite result = favoriteContext.Favorites.ToList().Find(f => f.UserId == userId && f.YelpId == yelpID);
                if (result == null)
                {
                    favorite.UserId = userId;
                    favorite.YelpId = yelpID;
                    favorite.RestaurantName = name;
                    favorite.RestaurantAddress = address;
                    favorite.Img = img;
                    favoriteContext.Favorites.Add(favorite);
                    favoriteContext.SaveChanges();
                    return favorite;
                }
                else
                {
                    return result;
                }
            }
        }

        //removing the favorite from the favorite list
        //api/Restaurant/deleteFav
        [HttpDelete("deletefav")]
        public void RemoveFavorite(int userId, int favId)
        {
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                Favorite deleteFav = new Favorite();
                deleteFav = restaurantContext.Favorites.ToList().Find(d => d.UserId == userId && d.FavoriteId == favId);
                restaurantContext.Remove(deleteFav);
                restaurantContext.SaveChanges();
            }
        }

        [HttpGet("api")]
        public Yelp GetYelp(string location, string category)
        {
            string url = $"https://api.yelp.com/v3/businesses/search?location={ location }&sort_by=distance&limit=50&term=restaurants&radius=40000&categories={ category }";
            HttpWebRequest request = WebRequest.CreateHttp(url);
            request.Headers.Add("Authorization", "Bearer aA3pXKu5ij8oTY5mGvkjPBZGogIh3JfjLj9TRGszvGw4EDFTv4lBCj-73-ql_YJ6KJrEhYl_o5XQ-BwT5m3y1qTuOaHdbhBIe2JI_3bQyMix2W_qfQKXTmSdI6nDYHYx");
            request.Headers.Add("Access-Control-Allow-Origin", "*");
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();
            Yelp result = JsonConvert.DeserializeObject<Yelp>(JSON);
            return result;
        }

        [HttpGet("apisingle")]
        public YelpSingle GetYelpSingle (string id)
        {
            string url = $"https://api.yelp.com/v3/businesses/{ id }";
            HttpWebRequest request = WebRequest.CreateHttp(url);
            request.Headers.Add("Authorization", "Bearer aA3pXKu5ij8oTY5mGvkjPBZGogIh3JfjLj9TRGszvGw4EDFTv4lBCj-73-ql_YJ6KJrEhYl_o5XQ-BwT5m3y1qTuOaHdbhBIe2JI_3bQyMix2W_qfQKXTmSdI6nDYHYx");
            request.Headers.Add("Access-Control-Allow-Origin", "*");
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();
            YelpSingle result = JsonConvert.DeserializeObject<YelpSingle>(JSON);
            return result;
        }
    }
}
   


