$(function () {
  
  
  var productid = getSearch("productid");
  $.ajax({
    type:"get",
    url: getApi.getdiscountproduct,
    dataType:"json",
    data:{
      productid:productid
    },
    success:function (info) {
      console.log(info);
      
      var htmlStr = template("inlanddetailTpl",info);
      $('.inlanddetailbox').html(htmlStr);
      
    }
  })



})