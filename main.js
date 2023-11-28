const login = () =>{
    const uname = username.value
    const pswd  = password.value

    if(!uname || !pswd){
        alert("Please fill all fields")
    }else{
        console.log(`Username : ${uname}, Password: ${pswd}`);
        localStorage.setItem("username",uname)
        console.log("login Succesfully");
        window.location = "home.html"
        
    }
}