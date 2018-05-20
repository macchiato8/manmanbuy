$(function () {
  $.ajax({
    type:"get",
    url: getApi.getinlanddiscount,
    dataType:"json",
    
    success:function (info) {
      console.log(info);
  
      var htmlStr = template("discountproTpl",info);
      $('.m_discount ul').html(htmlStr);
      
    }
  })
  
  
//  滚动出多少条 没写啊！？
})