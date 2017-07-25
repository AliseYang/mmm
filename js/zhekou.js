$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/getinlanddiscount",
        success:function(data){
            //console.log(data);
            var html = template("zhekou",data);
            $(".inland").html(html)
        }
    })
})