$(function () {
  
  var productid = getSearch("productid");
  
  $.ajax({
    type:"get",
    url:getApi.getmoneyctrlproduct,
    dataType:"json",
    data:{
      productid:productid
    },
    success:function (info) {
      console.log(info);
      var htmlStr = template("moneyproductTpl",info);
      $('.productinfobox').html(htmlStr);
      $('.mdaohang .goto').html(info.result[0].productName);
    }
  })
  
  
})