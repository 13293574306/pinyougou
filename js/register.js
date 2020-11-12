window.onload = function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
    var regmsg = /^\d{6}$/;  //短信验证
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;  // 密码验证
    var tel = document.querySelector('#tel');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(tel, regtel);   // 手机号码验证
    regexp(msg, regmsg);    // 短信验证
    regexp(pwd, regpwd); // 密码框

    // 表单验证的函数
    function regexp(ele, reg) {
        ele.onblur = function() {
            if(reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                    this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
                } else {
                    // console.log('不正确');
                    this.nextElementSibling.className = 'error';
                    this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 ';
                }
        }
    };
    surepwd.onblur = function() {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致';

        }
    }

        
}
