function inquiry()
{
    var cha = document.getElementById("cha");
	if (cha.value == "王一"||cha.value=="01" )
	{
        window.location.href="wangyi.html";    
	}
	else if (cha.value == "李二"||cha.value=="02" )
	{
        window.location.href="lier.html";    
	}
	else if (cha.value == "赵三"||cha.value=="03" )
	{
        window.location.href="zhaosan.html";    
	}
	else {
		alert("请请按参考表来查询！")
	}
}
function submitted()
{
	alert("提交成功！！")
}
