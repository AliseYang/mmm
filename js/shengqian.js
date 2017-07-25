$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/getmoneyctrl",
        //data:{categoryid:id},
        success:function(data){
            console.log(data);
            var html = template("shengqian",data);
            $(".commodity").html(html)
        }
    })
})