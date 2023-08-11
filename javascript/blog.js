let fill =() =>{
    let value = document.querySelector("#value").value
    fetch(`http://localhost:3100/blog`)
    .then((ser)=>ser.json())
    .then((data)=>{

        let filcat = data.filter((ele)=>ele.category.match(value.toLowerCase()))
                    output(filcat)         
    })
}


document.querySelector("#search").addEventListener("click",fill)

document.querySelector("#value").addEventListener("input", (e) =>{
        fill()  
})

let match = (pera) =>{
        fetch(`http://localhost:3100/blog?category=${pera}`)
        .then((ser)=>ser.json())
        .then((data)=>output(data))
}

// match()

document.querySelector("#sports").addEventListener("click",()=>match("sports"))
document.querySelector("#e-commerce").addEventListener("click",()=>match("e-commerce"))
document.querySelector("#news").addEventListener("click",()=>match("news"))
document.querySelector("#art").addEventListener("click",()=>match("art"))
document.querySelector("#socialmedia").addEventListener("click",()=>match("socialmedia"))
document.querySelector("#tech").addEventListener("click",()=>match("tech"))
document.querySelector("#photography").addEventListener("click",()=>match("photography"))


// document.querySelector("#news").addEventListener("click",()=>{
//         fetch(`http://localhost:3100/blog?category=news`)
//         .then((ser)=>ser.json())
//         .then((data)=>output(data))
// })
// document.querySelector("#readmore").addEventListener("click",()=>{
//         document.querySelector("p").style.overflow="hidden"
//     })


fetch("http://localhost:3100/blog")
.then((ser)=>ser.json())
.then((data)=>output(data))