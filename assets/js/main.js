var films = [
  {
    bal: "7.6",
    img: "https://boxofficemom.com/wp-content/uploads/2011/11/tower-heist-movie-poster-21-200x200.jpg",
    ad: "Tower Heist",
    type: "Adventure"
  },
  {
    bal: "9.5",
    img: "https://www.astortheatre.net.au/wp-content/uploads/tt01203381-200x296.jpg",
    ad: "Titanic",
    type: "Drama"
  },
  {
    bal: "9.0",
    img: "https://www.astortheatre.net.au/wp-content/uploads/tt08166921-200x296.jpg",
    ad: "Interstellar",
    type: "Adventure"
  },
  {
    bal: "8.4",
    img: "https://www.astortheatre.net.au/wp-content/uploads/once_upon_a_time_in_hollywood_ver9-200x296.jpg",
    ad: "Hollywood",
    type: "Adventure"
  },
  {
    bal: "6.7",
    img: "https://www.astortheatre.net.au/wp-content/uploads/women-talking-200x296.jpg",
    ad: "Women Talking",
    type: "Art"
  },
  
]

for(var i=0; i < films.length; i++) {
 area.innerHTML += `<div class="col-2">   
 <div class="item item1">
  <i class="las la-play-circle"></i><span>${films[i].bal}</span><img src="${films[i].img}" alt="">
     <p>${films[i].ad}</p>
     <p>${films[i].type}</p>
   </div> 
</div>`
}


var film = [
{
  bal: "8.7",
  img: "https://lwlies.com/wp-content/uploads/2019/12/alita_battle_angel-BLT-Communications-LLC-900x0-c-default.jpg",
  ad: "Alita",
  type: "Adventure"
},
{
  bal: "7.2",
  img: "https://c8.alamy.com/comp/EYWANM/avatar-year-2009-usa-director-james-cameron-sam-worthington-zoe-saldana-EYWANM.jpg",
  ad: "Avatar",
  type: "Fantastic"
},
{
  bal: "7.4",
  img: "https://www.shortlist.com/media/images/2019/05/the-40-coolest-movie-posters-ever-39-1556671086-EFtY-column-width-inline.jpg",
  ad: "Zodiac",
  type: "Drama"
},
{
  bal: "8.6",
  img: "https://cdn.shopify.com/s/files/1/1057/4964/products/Avengers-Endgame-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1670821335",
  ad: "Avengers",
  type: "Super Heros"
},
{
  bal: "7.6",
  img: "https://tilt.goombastomp.com/wp-content/uploads/2021/12/MaydayPostercolorimagebigimg5991-691x1024.jpg",
  ad: "MayDay",
  type: "Adventure"
}
]
for(var i=0; i < film.length; i++) {
  sahe.innerHTML += `<div class="col-2">   
  <div class="item item2">
   <i class="las la-play-circle"></i><span>${film[i].bal}</span><img src="${film[i].img}" alt="">
      <p>${film[i].ad}</p>
      <p>${film[i].type}</p>
    </div> 
 </div> `
 }