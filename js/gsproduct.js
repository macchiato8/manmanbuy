$(function () {
  
  
  
  //渲染商城
  $.ajax({
    type:"get",
    url: getApi.getgsshop,
    dataType:"json",
    
    success:function (info) {
      console.log(info);
      
      var htmlStr = template("mallTpl",info);
      $('.mall').html(htmlStr);
      
    }
  })
  
 
  //渲染地址
  $.ajax({
    type:"get",
    url: getApi.getgsshoparea,
    dataType:"json",
    
    success:function (info) {
      console.log(info);
      
      var htmlStr = template("addrTpl",info);
      $('.addr').html(htmlStr);
      
    }
  })
  
  //商城下拉框
  $('.gsnav .from').on('click','.mallfrom',function () {
    $('.mall').slideToggle();
    $('.addr').hide();
  });
  //地址下拉框
  $('.gsnav .from').on('click','.addrfrom',function () {
    $('.addr').slideToggle();
    $('.mall').hide();
  });
  
  //点击mall内的每一项加上right类名
  $('.top_nav').on('click','.mall li',function () {
    $(this).addClass('right').siblings().removeClass('right');
    $('.mall').slideUp();
    $('.mallfrom').text($(this).text());
    //更新shopId
    shopId = $(this).data('shopid');
    $('.mallfrom').attr('data-shopid',shopId);
    //重新渲染
    render();
    
  });
  
  //点击addr内的每一项加上right类名
  $('.top_nav').on('click','.addr li',function () {
    $(this).addClass('right').siblings().removeClass('right');
    $('.addr').slideUp();
    $('.addrfrom').text($(this).text());
    areaId = $(this).data('areaid');
    $('.addrfrom').attr('data-areaid',areaId);
    render();
  });
  
  
  var shopId = 0;
  var areaId = 0;
  
  //渲染列表
  render();
  
  function render() {
    $.ajax({
      url: getApi.getgsproduct,
      data:{
        shopid:shopId,
        areaid:areaId
      },
      success: function (info) {
        var htmlStr = template('gsprolistTpl',info);
        $('.gsprolist ul').html(htmlStr);
      }
    })
    
  }
  
});