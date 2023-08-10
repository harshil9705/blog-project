document.querySelector("#inform").addEventListener("submit",(e)=>{
    e.preventDefault()
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    console.log(`${email} ${password}`);
    let emailval = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passval = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if(emailval.test(email)){
        document.querySelector("#eerror").innerHTML=""
        
    }
    else{
        document.querySelector("#eerror").innerHTML="Please enter valid Email "
    }
    if(passval.test(password)){
        document.querySelector("#perror").innerHTML=""
    }
    else{
        document.querySelector("#perror").innerHTML="Enter minimum 8 latter "
    }

    let indata = {
        email:email,
        password:password
    }
    
    fetch(`http://localhost:3100/signup?email=${email}`)
    .then((ser)=>ser.json())
    .then((data)=>{
        if(data.length > 0){
            for(let i = 0; i<data.length; i++){
                if(data[i].email == email && data[i].password == password){
                    window.location.href="index.html"
                }
                else{
                    document.querySelector("#ferror").innerHTML="* Please confirm your Email or password so you can log in...";
                }
            }
        }
        else{
            document.querySelector("#ferror").innerHTML="Enter your ditails"
        }
    })

})

let get = async()=> {

    fetch(`http://localhost:3100/signup`)
    .then((res)=>res.json())
    .then((datas)=>console.log())
}
get()