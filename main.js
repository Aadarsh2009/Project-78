var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg",  "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg"];
var names = ["Fmaily Book","Aadarsh Rath", "Kalpana Rath", "Raghunath Rath"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }

    var updatedImage = [images];
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
