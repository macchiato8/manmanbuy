$(function () {
  //导航
  $.ajax({
    type: 'get',
    url: getApi.getbaicaijiatitle,
    success: function (info) {
      console.log(info);
      var htmlStr = template('scrollnavTpl',info);
      $('.scrollnav ul').html(htmlStr);
      //动态渲染ul宽度
      var width = 0;
      $('.nav li').each(function (i,e) {
        width += $(e).width();
      });
      $('.nav ul').width(width);
      myScroll = new IScroll('#wrapper',{
        scrollX: true,
        scrollY: false
      });
    }
  });
  
  
  //商品列表渲染
  var titleId = 0;
  render();
  function render() {
    $.ajax({
      url: getApi.getbaicaijiaproduct,
      data: {titleid: titleId},
      success: function (info) {
        console.log(info);
        var htmlStr = template('baiprolistTpl',info);
        $('.baiprolist ul').html(htmlStr);
      }
    })
  }
  
  //导航条点击事件
  $('#wrapper').on('click','a',function () {
    //添加类
    $(this).addClass('current').parent()
      .siblings().find('a').removeClass('current');
    //区域滚动 元素居中
    myScroll.scrollToElement(this, 500, true, true);
    //点击谁渲染谁
    titleId = $(this).data('titleid');
    render();
  });
  
});