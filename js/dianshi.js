$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/getproductlist",
        //data:{categoryid:id},
        success:function(data){
            console.log(data);
            //var html = template("dianshi",data);
            //$(".menus").html(html)

        }
    });

})