$(function () {
  
  //1-导航获取数据
    $.ajax({
      type:"get",
      url:getApi.getindexmenu,
      dataType:"json",
      success: function (info) {
        console.log(info);
        var htmlStr = template("navTpl",info);
        $(".nav ul").html(htmlStr);
      }
    });
  
  //导航添加类名隐藏类名功能
  $('.nav li:nth-last-child(-n + 4)').addClass('item');
  $('.nav').on("click",'li:nth-child(8)>a',function () {
   
     $('.nav li:nth-last-child(-n + 4)').toggleClass('item');
     
  })
  
 
  //2-超值折扣区获取数据
    $.ajax({
      type:"get",
      url:getApi.getmoneyctrl,
      dataType:"json",
      success:function (info) {
        console.log(info);
        var htmlStr = template("saleproTpl",info);
        $(".salepro ul").html(htmlStr);
      }
    })
  
  
  
  
  
})