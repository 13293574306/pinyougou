window.addEventListener('load', function() {
	// 1.获取元素
	var eye = document.getElementById('eye');
	var pwd = document.getElementById('pwd');
	// 2.注册事件  处理程序
	var flag = 0;
	eye.onclick = function() {
		//点击一次之后， flag  一定要变化
		if (flag == 0) {
			pwd.type = 'text';
			eye.src = 'img/up.png';
			flag = 1;
		} else {
			pwd.type = 'password';
			eye.src = 'img/closs.png'
			flag = 0;
		}
	}
})