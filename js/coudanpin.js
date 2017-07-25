$(function () {
    var shopId=0,
        areaId=0;
    $.ajax({
        url:"http://127.0.0.1:3000/api/getgsshop",
        success: function (data) {
            //console.log(data);
            var html = template("coudanpin",data);
            $(".aa ").html(html);
            $('.aa').change(function(){
                shopId = $(this).val();
                //console.log(shopId,a.aId)
                //$.get()
                fn();
            })
            fn();
        }
    });

    $.ajax({
        url:"http://127.0.0.1:3000/api/getgsshoparea",
        success: function (data) {
            //console.log(data);
            var html = template("coudan",data);
            $(".bb ").html(html);
            $(".bb").change(function(){
                areaId = $('.bb').val();
                fn();
            })

        }
    });
    //添加点击事件，获取导航ID
    var fn =function(){
        $.ajax({
            url:"http://127.0.0.1:3000/api/getgsproduct",
            data:{
                "shopid":shopId,
                "areaid":areaId
                },
            success:function(data){
                console.log(data);
                var html = template("cou",data);
                $(".commoditys").html(html);
            }
        })
    }



});


