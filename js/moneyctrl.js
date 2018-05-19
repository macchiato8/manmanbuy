$(function () {
  var prepage= $('.pagecate .prepage')
  var nextpage = $(".pagecate .nextpage")
  var currentpage = 0;
  
  // var pages;
  var total=0;
 
  render();
  function render() {
    
    $.ajax({
      type:"get",
      url:getApi.getmoneyctrl,
      data: {
        pageid:currentpage
      },
      dataType:"json",
      success:function (info) {
        console.log(info);
        
        //总页数
        total = Math.ceil(info.totalCount / info.pagesize);
        // console.log(total);
        // pages=currentpage+1;
        // info.pageNum = total;
        
        var htmlStr = template("saleproTpl",info);
        $(".salepro ul").html(htmlStr);
  
        
        
        for(var i = 1; i<=total ; i++) {
          $('.pagecate select').append("<option value =" + i + ">"+ i + '/'+ total+"</option>")
      }
          
          // $(".pagecate select").val(pages + "/"+ total);
      }
      
    })
    
  }
  
  function rendernew() {
    $.ajax({
      type:"get",
      url:getApi.getmoneyctrl,
      data: {
        pageid:currentpage
      },
      dataType:"json",
      success:function (info) {
        console.log(info);
      
        //总页数
        total = Math.ceil(info.totalCount / info.pagesize);
      
        var htmlStr = template("saleproTpl",info);
        $(".salepro ul").html(htmlStr);
  
        $('#status').val($('#status').children("option:nth-child("+ +(currentpage+1) +")").val());
        
      }
    
    })
  }
  
  
  
  //点击请求ajax获取数据
  
    prepage.on("click",function () {
      if (currentpage === 0){
        prepage.attr('href', 'javascript:;');
    
      }else{
        
        // prepage.removeAttr("disabled");
      currentpage--;
  
      rendernew();
      console.log(currentpage);
      }
    })
 
  
  
 
    nextpage.on("click", function () {
      console.log(total);
      if (currentpage === total-1){
        nextpage.attr('href', 'javascript:;');
    
      }else {
        // nextpage.removeAttr("disabled");
      currentpage++;
  
        rendernew();
        console.log(currentpage);
      }
    })
  
  
  
  
   
     $("select#status").change(function(){
        console.log($(this).val());
       currentpage = ($(this).val())-1;
       console.log(currentpage);
       rendernew();
       
       
        
     });
  
  
  
})

