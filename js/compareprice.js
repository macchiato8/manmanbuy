$(function () {
  
  var productid = getSearch("productid");

  $.ajax({
    type:"get",
    url:getApi.getproduct,
    dataType:"json",
    data:{
      productid:productid
    },
    success:function (info) {
      console.log(info);
      
      var htmlStr = template("prodetailsTpl",info);
      $('.prodetails').html(htmlStr);
      //截取空格前面的字符串（商品名）
      var str = info.result[0].productName;
      var arr = str.split(" ");
      $('.mdaohang .goto').html(arr[0]);
  
      $('.bjshopinfo').html(info.result[0].bjShop);
      
      
      
      //分类导航条
      var categoryid = info.result[0].categoryId;
      console.log(categoryid);
  
      $.ajax({
        type:"get",
        url:getApi.getcategorybyid,
        dataType:"json",
        data:{
          categoryid:categoryid
        },
        success:function (info) {
          console.log(info);
          $('.mdaohang a:nth-child(2)').html(info.result[0].category+' >');
          $('.mdaohang a:nth-child(2)').attr('href','productlist.html?categoryid='+categoryid);
          
          
        }
      })
 
    }
  })



  $.ajax({
    type:"get",
    url:getApi.getproductcom,
    dataType:"json",
    data:{
      productid:productid
    },
    success:function (info) {
      console.log(info);
      var htmlStr = template("compareComTpl",info);
      $('.compareCom ul').html(htmlStr);
      
      
    }
  })

})

