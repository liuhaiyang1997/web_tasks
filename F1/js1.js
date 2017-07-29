function login() {
	
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if (username.value == "") {
        alert("请输入用户名");
    } else if (password.value  == "") {
        alert("请输入密码");
    } else if(username.value == "admin" && password.value == "123456"){
        window.location.href="successed.html";    /*获取当前页面*/
    } else {
        alert("请输入正确的用户名和密码！")
    }
}