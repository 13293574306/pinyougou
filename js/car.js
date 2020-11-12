$(function() {
    // 事件可以使用 change
    $(".checkall").change(function() {
        // console.log($(this).prop("checked"));
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            // 让所有的商品添加 check-cart-item 类名
            $(".short").addClass(".check-cart-item");
        } else {
            $(".short").removeClass(".check-cart-item");
        }
    });
    // 如果小复选框全部选中那么 就应该把全选按钮选上，否则全部选
    $(".j-checkbox").change(function() {
        // if (被选中的小的复选框的个数 === 5) {
        //     就要选中全选按钮
        // } else {
        //     不要选中全选按钮
        // }
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            // 让当前的商品添加 check-cart-item 类名
            $(".short").addClass(".check-cart-item");
        } else {
            $(".short").removeClass(".check-cart-item");
        }
    });

    //  增减商品数量模块 首先声明一个变量，当我们点击+号 ，就让这个值++，然后赋值给文本框
    $(".increment").click(function() {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        // 计算小计模块 根据文本框的值 乘以  当前商品的价格  就是 商品的小计
        var p =$(this).parent().parent().siblings(".p-price").html();
        p = p.substr(1);
        console.log(p);
        var price = (p * n).toFixed(2);  // 保留小数点后两位数字
        $(this).parent().parent().siblings(".p-sum").html("￥" + price);
        getSum();
    });
    $(".decrement").click(function() {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        var p =$(this).parent().parent().siblings(".p-price").html();
        p = p.substr(1);
        console.log(p);
        //  小计模块
        $(this).parent().parent().siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });
    //  用户修改文本框的值 计算  小计模块
    $(".itxt").change(function() {
        // 先得到文本框里面的值  乘以  当前商品的价格
        var n = $(this).val();
        // 当前商品的单价
        var p =$(this).parent().parent().siblings(".p-price").html();
        p = p.substr(1);
        $(this).parent().parent().siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });
    // 计算总计和总额模块
    getSum();
    function getSum() {
        var count = 0; // 计算总件数
        var money = 0; // 计算总价钱
        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i, ele) {
            money += parseInt($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    };
    // 删除商品模块
    // (1) 商品后面的删除按钮
    $(".p-action a").click(function() {
        // 删除的是当前的商品
        $(this).parents(".short").remove();
        getSum();

    });
    // (2) 删除选中的商品
    $(".remove-batch").click(function() {
        // 删除的是小复选框选中的按钮
        $(".j-checkbox:checked").parents(".short").remove();
        getSum();

    });
    // (3) 清空购物车  删除全部商品
    $(".clear-all").click(function() {
        $(".short").remove();
        getSum();
    });
})