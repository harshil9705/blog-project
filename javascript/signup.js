document.querySelector("#upform").addEventListener("submit", (e) => {
  e.preventDefault();

  updata = {
    username: document.querySelector("#username").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };
  // let username = document.querySelector("#username").value;
  // let email = document.querySelector("#email").value;
  // let password = document.querySelector("#password").value;

  let userval = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
  let emailval = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let passval = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  if (!userval.test(updata.username)) {
    document.querySelector("#uerror").innerHTML =
      "Please enter valid username ";
  }
  if (!emailval.test(updata.email)) {
    document.querySelector("#eerror").innerHTML =
      "Please enter valid Email address";
  }
  if (!passval.test(updata.password)) {
    document.querySelector("#perror").innerHTML = "Enter minimum 8 latter ";
  } 

  if (
    userval.test(updata.username) &&
    emailval.test(updata.email) &&
    passval.test(updata.password)
  ) {
    fetch(`http://localhost:3100/signup?email=${updata.email}`)
      .then((ele) => ele.json())
      .then((mix) => {
        if (mix.length > 0) {

          document.querySelector("#ferror").innerHTML = "* Email is already registered ";
          setTimeout(() => {
                window.location.href = "/html/signin.html";
            }, 3000);
        } else {

            fetch("http://localhost:3100/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updata),
            });
            alert("login")
            setTimeout(() => {
                window.location.href = "/html/index.html";
            }, 3000);
        }
      });
  }
});
