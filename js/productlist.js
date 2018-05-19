$(function () {
  
  var categoryid = getSearch("categoryid");
  
  $.ajax({
    type:"get",
    url:getApi.getcategorybyid,
    dataType:"json",
    data:{
      categoryid:categoryid
    },
    success:function (info) {
      console.log(info);
      
      $('.mdaohang .goto').html(info.result[0].category);
    }
  })
  
  var prepage= $('.pagecate .prepage')
  var nextpage = $(".pagecate .nextpage")
  var currentpage = 1;
  
  
  var total=0;
  render();
  
  
  
  function render(){
   $.ajax({
     type:"get",
     url:getApi.getproductlist,
     dataType:"json",
     data:{
       categoryid:categoryid,
       pageid : currentpage
     },
     success:function (info) {
       console.log(info);
       
       //总页数
       total = Math.ceil(info.totalCount / info.pagesize);
       
       var htmlStr = template("productlistTpl",info);
       $('.prolistinfo ul').html(htmlStr);
  
       for(var i = 1;i<=total;i++) {
         $('.pagecate select').append("<option value="+i+">"+i + '/'+ total+"</option>")
       }
       
     }
   })
   
 }
 
 
 //不添加select的方法
  function rendernew(){
    $.ajax({
      type:"get",
      url:getApi.getproductlist,
      dataType:"json",
      data:{
        categoryid:categoryid,
        pageid : currentpage
      },
      success:function (info) {
        console.log(info);
        
        //总页数
        total = Math.ceil(info.totalCount / info.pagesize);
        
        var htmlStr = template("productlistTpl",info);
        $('.prolistinfo ul').html(htmlStr);
  
        $('#status').val($('#status').children("option:nth-child("+currentpage+")").val());
        
       
        
        
      }
    })
    
  }
 
  
  //点击请求ajax获取数据
  
  prepage.on("click",function () {
    if (currentpage === 1){
      prepage.attr('href', 'javascript:;');
      
    }else{
      
      // prepage.removeAttr("disabled");
      currentpage--;
      console.log(currentpage)
      rendernew();
      console.log(currentpage);
    }
  })
  
  
  
  
  nextpage.on("click", function () {
    console.log(total);
    if (currentpage === total){
      nextpage.attr('href', 'javascript:;');
      
    }else {
      // nextpage.removeAttr("disabled");
      currentpage++;
      console.log(currentpage)
      rendernew();
      
      // console.log(currentpage);
    }
  })
  
  
  $("select#status").change(function(){
    console.log($(this).val());
    currentpage = $(this).val();
    rendernew();
    
  });
  
  
})