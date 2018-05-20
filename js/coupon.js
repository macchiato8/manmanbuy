$(function () {
  
  
  $.ajax({
    type:"get",
    url: getApi.getcoupon,
    dataType:"json",
   
    success:function (info) {
      console.log(info);
      
      var htmlStr = template("couponTpl",info);
      $('.m_coupon ul').html(htmlStr);
      
    }
  })
  
  
  
})