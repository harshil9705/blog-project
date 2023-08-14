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

let cat = (pera) =>{
        let val = document.querySelector("#category").value;
        
        fetch(`http://localhost:3100/blog?category=${pera}`)
        .then((ser)=>ser.json())
        .then((data)=>{

                if (val === pera){
                        output(data);
                }
        })
}

document.querySelector("#category").addEventListener("change",()=> get())
document.querySelector("#category").addEventListener("change",()=>cat("sports"))
document.querySelector("#category").addEventListener("change",()=>cat("ecommerce"))
document.querySelector("#category").addEventListener("change",()=>cat("news"))
document.querySelector("#category").addEventListener("change",()=>cat("art"))
document.querySelector("#category").addEventListener("change",()=>cat("socialmedia"))
document.querySelector("#category").addEventListener("change",()=>cat("tech"))
document.querySelector("#category").addEventListener("change",()=>cat("photography"))

var category = document.querySelector("#category").value

fetch("http://localhost:3100/blog")
.then((ser)=>ser.json())
.then((data)=>output(data))