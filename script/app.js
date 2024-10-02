

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
    console.log("hello world",categories);
}
