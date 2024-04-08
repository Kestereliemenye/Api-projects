class Pixabay{
// i used a class for cleaner code space

    async getPictures(input){
         const API_KEY = "43288731-605e72dc6ed596d7677d2a835"
         const url = `https://pixabay.com/api/?key=${API_KEY}&q=${input}&image_type=photo
         `

         const response = await fetch(url)
         const picture = await response.json();

         return picture
            
         
}
}