/* 可以类似下面这样的处理，封装成函数，放到common.js中 */

function Api(){
  /* 自己本地IP加上项目端口号 */
  // this.base = 'http://192.168.45.23:9999';
  this.base = 'http://192.168.1.107:9999';
  
  /*首页接口地址管理*/
  this.getindexmenu = this.base + '/api/getindexmenu';
  
  /* 省钱控接口地址管理 */
  // 获取折扣商品的列表信息   传参：pageid 不传默认返回第一页数据
  this.getmoneyctrl = this.base + '/api/getmoneyctrl';
  // 获取省钱控商品详情信息     传参：productid
  this.getmoneyctrlproduct = this.base + '/api/getmoneyctrlproduct';
  
  /*比价搜索 */
  //商品分类大标题
  this.getcategorytitle = this.base + '/api/getcategorytitle';
  //分类列表
  this.getcategory = this.base + '/api/getcategory';
  //三级菜单
  this.getcategorybyid = this.base + '/api/getcategorybyid';
  //商品列表详情
  this.getproductlist = this.base + '/api/getproductlist';
  //获取单个商品详情
  this.getproduct = this.base + '/api/getproduct';
  //获取商品评论
  this.getproductcom = this.base + '/api/getproductcom';
  
  
  
}
/* 将api接口暴露到全局 */
window.getApi = new Api();


//左箭头回到上一页
$('.m_header .leftarrow').click(function () {
   history.back();
})

//滚动回到顶部
$('.returnTop').click(function () {
  var timetop = setInterval(function () {
    document.documentElement.scrollTop -= 50;
    if (document.documentElement.scrollTop <= 0) {
      clearInterval(timetop);
    }
  }, 100);
})

// 作用: 根据传入的key值, 解析地址栏参数, 获取对应的value值
  function getSearch(key) {
    // 获取地址栏参数  "?name=pp&age=18&desc=%E5%B8%85"
    var search = location.search;
    // 需要解码  "?name=pp&age=18&desc=帅"
    search = decodeURI(search);
    // 去掉 ?
    search = search.slice(1);
    // 根据 & 将字符串, 切割成数组   ["name=pp", "age=18", "desc=帅"]
    var arr = search.split("&");
    
    var obj = {};
    
    arr.forEach(function (element, index) {
      // "name=pp"
      var k = element.split("=")[0];
      var v = element.split("=")[1];
      // obj["name"]="pp";
      obj[k] = v;
    });
    
    // return obj["name"];
    return obj[key];
  }

