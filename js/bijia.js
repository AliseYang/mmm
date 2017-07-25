$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/getcategorytitle",
        success:function(data){
            console.log(data);
            var html = template("bijia",data);
            $(".proBox").html(html)
        }
    });
    $("body").on("click",".big",function(){
        var id = $(this).attr("titleid");
        var that = this;
        console.log(id);
        $.ajax({
            url:"http://182.254.146.100:3000/api/getcategory",
            data:{titleid:id},
            success:function(data){
                console.log(data);
                var html = template("caidan",data);
                $(that).siblings(".content").html(html).
toggle(200);


            }
        })
    })

})