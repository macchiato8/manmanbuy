$(function () {


var couponid = getSearch('couponId');

$.ajax({
  type:"get",
  url: getApi.getcouponproduct,
  dataType:"json",
  data:{
    couponid : couponid
  },
  success:function (info) {
    console.log(info);
    
    var htmlStr = template("couponproductTpl",info);
    $('.m_couponproduct ul').html(htmlStr);
    
  }
})

})