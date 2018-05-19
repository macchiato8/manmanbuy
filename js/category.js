$(function () {
  // var titleId;
    $.ajax({
      type: "get",
      url: getApi.getcategorytitle ,
      dataType: "json",
      success: function (info) {
        console.log(info);
        // titleId = info.titleId;
        var htmlStr = template("categorytitleTpl",info);
        $('.category ul').html(htmlStr);
      }
    })
    
  
  
  $(".category ul").on("click",'li',function () {
    
    $(this).find('.hidelist').toggleClass('item');
    $(this).siblings().find('.hidelist').addClass('item');
    
    var id = $(this).data("id");
    console.log(id);
    $.ajax({
      type: "get",
      url: getApi.getcategory,
      dataType: "json",
      data:{
        titleid:id
      },
      success: function (data) {
        console.log(data);
        var htmlStr = template("categorylistTpl",data);
        $('.hidelist').html(htmlStr);
        
      }
    })
  })
  
    
  
})