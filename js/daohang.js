$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/getsitenav",
        success:function(data){
            console.log(data);
            var html = template("daohang",data);
            $(".link").html(html)
        }
    })
})