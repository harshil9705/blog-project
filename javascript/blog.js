let fill =() =>{
    let value = document.querySelector("#value").value
    fetch(`http://localhost:3100/blog?category=${value}`)
    .then((ser)=>ser.json())
    .then((data)=>{
            data.filter((ele)=>{
                ele.category.toLowerCase().includes(value.toLowerCase())
                    output(data)
                
            })
    })
}
document.querySelector("#search").addEventListener("click",fill)

document.querySelector("#value").addEventListener("input", (e) =>{
        fill()  
})


fetch("http://localhost:3100/blog")
.then((ser)=>ser.json())
.then((data)=>output(data))