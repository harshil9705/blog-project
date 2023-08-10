let output = (blog) => {
    document.querySelector("#ui").innerHTML=""
    blog.map((ele)=>{
        let img = document.createElement("img")
        img.src=ele.img
        img.setAttribute("class","img")
        let title = document.createElement("h2")
        title.innerHTML=ele.title
        let category = document.createElement("h3")
        category.innerHTML=`Category : ${ele.category}`
        let description = document.createElement("p")
        description.innerHTML=ele.description
        
        let div = document.createElement("div")
        div.append(img,category,title,description)
        
        document.querySelector("#ui").append(div)

    })
}

// get data

fetch("http://localhost:3100/blog")
.then((ser)=>ser.json())
.then((data)=>output(data))


document.querySelector("#addblog").addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let blog = {
        title:document.querySelector("#title").value,
        category:document.querySelector("#category").value,
        img:document.querySelector("#img").value,
        description:document.querySelector("#description").value,
    }
    
    
    fetch("http://localhost:3100/blog",{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(blog)
    })
    
    output(blog)
    console.log(blog);
    
})

// document.querySelector("#search").addEventListener("click",()=>{
//     let value = document.querySelector("#value").value
//     fetch(`http://localhost:3100/blog?category=${value}`)
//     .then((ser)=>ser.json())
//     .then((data)=>{
//         data.filter((elements)=>{
//             if(elements.category.toLowercase().includes(value.toLowercase())){
//                 output(data)
//             }
//             else{

//             }
//         })
//     })
// })







// document.querySelector("#search").addEventListener("click",()=>{
//     console.log("www");
//     let value = document.querySelector("#value").value
//     fetch(`http://localhost:3100/blog?category=${value}`)
//     .then((ser)=>ser.json())
//     .then((data)=>{
//         if(data.length > 0){
//             for(let i = 0; i<data.length; i++){
//                 if(data[i].category == value){
//                     output(data)
//                 }
//             }
//         }
//         else{
//             alert("no")
//         }
//     })
// })
