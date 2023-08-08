document.querySelector("#addblog").addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let blog = {
        title:document.querySelector("#title").value,
        category:document.querySelector("#category").value,
        img:document.querySelector("#img").value,
        description:document.querySelector("#description").value,
    }
    
    
    fetch("http://localhost:8080/blog",{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(blog)
    })
    
    console.log(blog);
    
})


document.querySelector("#upform").addEventListener("submit",(e)=>{
    e.preventDefault()

    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let userval = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    let emailval = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passval = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if(userval.test(username)){
        window.location.href="index.html"
        document.querySelector("#uerror").innerHTML=""
    }
    else{
        document.querySelector("#uerror").innerHTML="Please enter valid username "
    }
    if(emailval.test(email)){
        window.location.href="index.html"
        document.querySelector("#eerror").innerHTML=""
    }
    else{
        document.querySelector("#eerror").innerHTML="Please enter valid Email address"
    }
    if(passval.test(password)){
        document.querySelector("#perror").innerHTML=""
        window.location.href="index.html"
    }
    else{
        document.querySelector("#perror").innerHTML="Enter minimum 8 latter "
    }

    
    updata={
        username : document.querySelector("#username").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#password").value
    }
    
    console.log(updata);

    fetch("http://localhost:8080/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(updata)
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
})  

document.querySelector("#inform").addEventListener("submit",(e)=>{
    e.preventDefault()
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    console.log(`${username} ${password}`);
    let userval = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    let passval = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if(userval.test(username)){
        document.querySelector("#uerror").innerHTML=""
        window.location.href="index.html"
    }
    else{
        document.querySelector("#uerror").innerHTML="Please enter valid username "
    }
    if(passval.test(password)){
        document.querySelector("#perror").innerHTML=""
        window.location.href="index.html"
    }
    else{
        document.querySelector("#perror").innerHTML="Enter minimum 8 latter "
    }
})
