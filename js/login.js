var userName=document.getElementById('userName');
var userPassword=document.getElementById('userPassword');
var btn=document.getElementById('btn');
btn.onclick=function(e){
	if(userName.value==''||userPassword.value==''){
		if(e&&e.preventDefault){
			e.preventDefault();
		}else{
			window.event.returnValue=false;
		}
	}
	if(userName.value==''){
		document.getElementById('userNameError').innerHTML='用户名不能为空！';
		userName.style.borderColor='#FF5A3D';
		userName.style.borderWidth='2px';
	}
	if(userPassword.value==''){
		document.getElementById('passwordError').innerHTML='密码不能为空！';
		userPassword.style.borderColor='#FF5A3D';
		userPassword.style.borderWidth='2px';
	}
	return false;
};
userName.onfocus=function(){
	document.getElementById('userNameError').innerHTML='';
	this.style.borderColor='#ccc';
	this.style.borderWidth='1px';
};
userPassword.onfocus=function(){
	document.getElementById('passwordError').innerHTML='';
	this.style.borderColor='#ccc';
	this.style.borderWidth='1px';
};
