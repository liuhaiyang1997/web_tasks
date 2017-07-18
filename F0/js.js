function login() {

    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    if (username.value == "") {
        alert("请输入用户名");
    } else if (pass.value  == "") {
        alert("请输入密码");
    } else if(username.value == "admin" && pass.value == "123456"){
        window.location.href="denglu.html";    /*获取当前页面*/
    } else {
        alert("请输入正确的用户名和密码！")
    }
}
window.onload=function(){
                var btn=document.getElementById("btn");
                var password=document.getElementById("password")
                btn.onmousedown=function(){
                    password.type="text"
                };
                btn.onmouseup=btn.onmouseout=function(){
                    password.type="password"
                }
            }