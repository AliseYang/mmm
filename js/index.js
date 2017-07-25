$(function(){
   $.ajax({
      url:"http://182.254.146.100:3000/api/getindexmenu",
      success:function(data){
          console.log(data);
          var html = template("list",data);
          $(".nav ul").html(html)
      }
   });
    $.ajax({
        url:"http://182.254.146.100:3000/api/getmoneyctrl",
        success:function(data){
            //console.log(data);
            var html = template("pro",data);
            $(".menus").html(html)

        }
    })
})
