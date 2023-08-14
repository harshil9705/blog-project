
document.querySelector("#upform").addEventListener("submit",(e)=>{
    e.preventDefault()

    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let userval = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    let emailval = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passval = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if(userval.test(username)){
        document.querySelector("#uerror").innerHTML=""
    }else{
        document.querySelector("#uerror").innerHTML="Please enter valid username "
    }
    if(emailval.test(email)){
        document.querySelector("#eerror").innerHTML=""
    }else{
        document.querySelector("#eerror").innerHTML="Please enter valid Email address"
    }
    if(passval.test(password)){
        document.querySelector("#perror").innerHTML=""
    }else{
        document.querySelector("#perror").innerHTML="Enter minimum 8 latter "
    }
    
        if(userval.test(username) && emailval.test(email) && passval.test(password)){
            window.location.href="index.html"
        }

    updata={
        username : document.querySelector("#username").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#password").value
    }

    fetch(`http://localhost:3100/signup?email=${email}`)
    .then((ele)=>ele.json())
    .then((mix)=>{
        if(mix.length > 0){
            for(let i = 0; i < mix.length ; i++){
                if(mix[i].email == email){
                    document.querySelector("#ferror").innerHTML="* Email is already registered "
                    alert("email is already ragistrate")
                }
                else{
                    window.location.href="index.html"
                }
            }
        }
        else{
            document.querySelector("#ferror").innerHTML="fill data"
        }
    })

    fetch("http://localhost:3100/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(updata)
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
})  
