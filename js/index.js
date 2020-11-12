// window.addEventListener('load', function() {
   
//     // 1.获取元素
//     var text = document.querySelector('input');
//     // 2.注册事件   获取焦点事件 onfocus
//     text.onfocus = function() {
//         if (this.value === '电脑') {
//             this.value = '';
//         }
//         //  获得焦点需要把文本框里面的文字颜色变黑
//         this.style.color = '#333';
//     }
//     // 3. 注册事件 失去焦点事件  onblur
//     text.onblur = function() {
//         if (this.value === '') {
//             this.value = '电脑';
//         }
//         //  失去焦点需要把文本框里面的文字颜色变黑
//         this.style.color = '#999';
//     };

//     //  导航栏下拉菜单 
//     //  1.获取元素
//     var fr = document.querySelector('.fr');
//     var lis = fr.children;  //得到小  li
//     // 2. 循环注册事件
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].onmouseover = function() {
//             this.children[1].style.display = 'block';
//         }
//         lis[i].onmouseout = function() {
//             this.children[1].style.display = 'none';
//         }
//     }


//     // 按键输入内容
//     // 核心思路： 检测用户是否按下S键。如果按下，就会把光标定在搜索框
//     //  使用键盘事件对象里面的 keyCode， 判断用户是否按下S键
//     //  搜索框获得焦点：  使用 js 里面的 focus() 方法
//     var search = document.querySelector('input');
//     document.addEventListener('keyup', function(e) {
//         if (e.keyCode === 83) {
//             search.focus();
//         }
//     });

// // 轮播图区域 开始
//     // 1. 获取元素
//     var arrow_l = document.querySelector('.arrow-l');
//     var arrow_r = document.querySelector('.arrow-r');
//     var focus = document.querySelector('.focus');
//     var focusWidth = focus.offsetWidth;
//     // 2. 鼠标经过 focus 就显示隐藏的左右按钮 以及轮播图的播放与停止
//     focus.addEventListener('mouseenter', function() {
//         arrow_l.style.display = 'block';
//         arrow_r.style.display = 'block';
//         clearInterval(timer);
//         timer = null;  // 清除定时器
//     });
//     focus.addEventListener('mouseleave', function() {
//         arrow_l.style.display = 'none';
//         arrow_r.style.display = 'none';
//         timer = setInterval(function() {
//             // 手动调用点击事件
//             arrow_r.click();
//         }, 1500);
        
//     });
//     // 3. 动态生成小圆圈 有几张图片，我就生成几个小圆圈
//     var ul = focus.querySelector('ul');
//     //console.log(ul.children.length);
    
//     var ol = focus.querySelector('.circle');
//     for (var i = 0; i < ul.children.length; i++) {
//         // 创建一个小li
//         var li = document.createElement('li');
//         //  记录当前小圆圈的索引号  通过自定义属性来做
//         li.setAttribute('index', i);
//         // 把小 li 插入到 ol 里面
//         ol.appendChild(li);

//         // 4.小圆圈的排他思想  可以直接在生成小圆圈的同时直接绑定点击事件
//         li.addEventListener('click', function() {
//             // 干掉所以人 把所有的小 li 清除 current 类名
//             for (var i = 0; i < ol.children.length; i++) {
//                 ol.children[i].className = '';
//             }
//             // 留下自己  当前的小 li 设置 current 类名
//             this.className = 'current';

//             //  5.点击小圆圈，移动图片 ul
//             //    ul 的移动距离小圆圈的索引号 乘以  图片的宽度  他是负值
//             //    当我们点击了某个小 li 就拿到当前的小 li 的索引号
//             var index = this.getAttribute('index');
//             // 当我们点击了某个小 li 就要把这个 li 索引号给 num
//             num = index;
//             // 当我们点击了某个小 li 就要把这个 li 索引号给 circle
//             circle = index;
//             console.log(focusWidth);
//             console.log(index);

//             animate(ul, -index * focusWidth);
            
//         })
//     }
//     // 把 ol 里面的第一个小 li 设置类名为 current
//     ol.children[0].className = 'current';
//     //6. 克隆第一张图片 放到  ul 最后面
//     var first = ul.children[0].cloneNode(true);
//     ul.appendChild(first);
//     // 7. 点击右侧按钮，图片滚动一张
//     var num = 0;
//     // circle 控制小圆圈的播放
//     var circle = 0;
//     // flag  节流阀
//     var flag = true; 
//     arrow_r.addEventListener('click', function() {
//        if (flag) {
//            flag = false;   //  关闭节流阀
//             // 如果走到了最后一张图片，此时 我们的 ul 要快速复原 left 改为0
//             if (num == ul.children.length - 1) {
//                 ul.style.left = 0;
//                 num = 0;
//             }
//             num++;
//             animate(ul, -num * focusWidth, function() {
//                 flag = true;  // 打开节流阀
//             });
//             // 8. 点击右侧按钮，小圆圈跟随一起变化  可以在声明一个变量控制小圆圈的播放
//             circle++;
//             // 如果 circle == 6 说明走到最后我们克隆的这张图片  我们就复原
//             if (circle == ol.children.length) {
//                 circle = 0;
//             }
//             //调用函数
//             circleChange();
//         }
//     });

//     // 9.  左侧按钮的做法
//         arrow_l.addEventListener('click', function() {
//             if (flag) {
//                 flag = false;  //  关闭节流阀
//                 // 如果走到了最后一张图片，此时 我们的 ul 要快速复原 left 改为0
//                 if (num == 0) {
//                     num = ul.children.length - 1;
//                     ul.style.left = -num * focusWidth + 'px';
                
//                 }
//                 num--;
//                 animate(ul, -num * focusWidth, function() {
//                     flag = true; // 打开节流阀
//                 });
//                 // 10. 点击右侧按钮，小圆圈跟随一起变化  可以在声明一个变量控制小圆圈的播放
//                 circle--;
//                 // 如果 circle < 0 说明第一张图片， 则小圆圈要改为第6个小圆圈
//                 // if (circle < 0) {
//                 //     circle = ol.children.length - 1;
//                 // }
//                 circle = circle < 0 ? ol.children.length - 1 : circle;
//                 //调用函数
//                 circleChange();
//             }
//         });

//         function circleChange() {
//             //先清除其余小圆圈的 current 类名
//             for (var i = 0; i < ol.children.length; i++) {
//                 ol.children[i].className = '';
//             }
//             //留下当前的小圆圈的 current 的类名
//             ol.children[circle].className = 'current';
//         }
//         // 11. 自动播放轮播图
//         var timer = this.setInterval(function() {
//             // 手动调用点击事件
//             arrow_r.click();
//         }, 1500);

// // 轮播图区域 结束

//     $(function() {
//         //     // 鼠标经过
//         //     $(".fr>li").mouseover(function() {
//         // 		// $(this) jQuery  当前元素 this不要加引号
//         // 		// show() 显示元素 hide（）  隐藏元素
//         //         $(this).children("ul").slideDown(200);
//         // 	});
//         // 	// 鼠标离开
//         // 	$(".fr>li").mouseout(function() {
//         //         $(this).children("ul").slideUp(200);
//         // 	});

//         //  1. 事件切换 hover 就是鼠标经过和离开的复合写法
//         // $(".fr>li").hover(function() {
//         // 	$(this).children("ul").slideDown(200);
//         // }, function() {
//         // 	$(this).children("ul").slideUp(200);
//         // });

//         //  2. 事件切换 hover 如果只写一个函数，那么鼠标经过和离开都会出发这个函数
//         $(".fr>li").hover(function() {
//             // stop 方法必须写到动画的前面
//             $(this).children("ul").stop().slideToggle();
//         });

//     });


    
// });