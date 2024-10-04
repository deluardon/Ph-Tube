

// check html file javascript file add 
// console.log("hello world");


const loadCategory = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
    .catch(error => console.error('Data problem with Error:', error));
}

loadCategory();




const displayCategory = (categories)=>{
    // console.log("hello world",categories);
    const categoriesContainer = document.getElementById('categories-btn');
    categories.forEach((item) => {
        // console.log(item);
        const btn=document.createElement('button');
        btn.classList.add('btn')
        btn.innerText=item.category;
        // console.log(btn);

        // show btn category
        categoriesContainer.appendChild(btn);
        
    });
}



const loadvideos = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.error('Data problem with video Error:', error))
};



const displayVideos = (videos)=>{
    const videosContainer=document.getElementById('video');
    console.log(videos);
    videos.forEach((video)=>{
        console.log(video);

        const card=document.createElement('div');
        card.classList.add('card-compact', 'shadow-xl', 'rounded-lg','px-2');
        card.innerHTML=`
         <figure class="h-[200px]">
    <img 
      src=${video.thumbnail} class="w-full h-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2 items-center">
  <div>
  <img 
      src="${video.authors[0].profile_picture}" class="rounded-full w-[50px] h-[50px]" /> 
     
  </div>
  <div class="">
  <h1 class=" font-bold text-[16px] text-black">${video.title}</h1>
  <div class="">
  <div class="flex">
  <h2>${video.authors[0].profile_name}</h2>

  ${video.authors[0].verified ? '<img src="https://img.icons8.com/?size=100&id=FNbnqlDTjR45&format=png&color=000000" class="verified-icon flex  w-5 h-5 items-center m-auto"  alt="Verified">' :''}
  </div>
  <span>${video.others.views}   views</span>
</div>

  </div>
  </div>`;
  videosContainer.append(card);
    })
}
loadvideos();


const demu=
    {
        "category_id": "1001",
        "video_id": "aaag",
        "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
        "title": "Sunrise Reverie",
        "authors": [
            {
                "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
                "profile_name": "Ava Johnson",
                "verified": false
            }
        ],
        "others": {
            "views": "1.1K",
            "posted_date": "16950"
        },
        "description": "'Sunrise Reverie' by Ava Johnson takes listeners on a serene journey through tranquil melodies and soft harmonies. With 1.1K views, this track is perfect for morning relaxation or an evening wind-down. Ava's heartfelt lyrics and soothing voice create a sense of peace, making it a go-to for fans seeking calm and inspiration in their musical choices."
    }

