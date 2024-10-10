let stickySections = [...document.querySelectorAll(".sticky")]
console.log(stickySections);

let images =[
    "https://lemanoosh.com/app/uploads/cupra_formentor-2020_013.jpg",
    "https://lemanoosh.com/app/uploads/cupra_formentor-2020_013.jpg",
    "https://d2w9rnfcy7mm78.cloudfront.net/17931439/original_61d6fae935e5ea6e30661dd632f5b7d4.jpg?1662515888?bc=0",
    "https://lemanoosh.com/app/uploads/cupra_formentor-2020_013.jpg",
    "https://d2w9rnfcy7mm78.cloudfront.net/17931439/original_61d6fae935e5ea6e30661dd632f5b7d4.jpg?1662515888?bc=0",
    "https://d2w9rnfcy7mm78.cloudfront.net/17931439/original_61d6fae935e5ea6e30661dd632f5b7d4.jpg?1662515888?bc=0",
    "https://d2w9rnfcy7mm78.cloudfront.net/17931439/original_61d6fae935e5ea6e30661dd632f5b7d4.jpg?1662515888?bc=0",
]

images.forEach(img => {
    stickySections.forEach(section =>{
        let image = document.createElement("img")
        image.src = img;
        section.querySelector(".scroll_section").appendChild(image)
    })
})

window.addEventListener("scroll", (e) =>{
    for(let i = 0; i< stickySections.length; i++){
        transform(stickySections[i])
    }
})
function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection =section.querySelector(".scroll_section")
    let percentage = ((window.scrollY -offsetTop) /window.innerHeight * 100);
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage ;
    scrollSection.style.transform =`translate3d(${-(percentage)}vw, 0, 0 )`
    console.log(scrollSection)
} 