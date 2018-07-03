function LazyLoad(ele) {
  this.imageBox = document.querySelector(ele);
  // 防止手机
  this.load = true;
}
// 图片初始化
LazyLoad.prototype.init = function(words) {
  // 初始化
  var _this = this
  // -> ulbox内容为空
  // 根据浏览器宽度自动生成li， 完成自适应
  this.imageBox.innerHTML = ''
  for(var i = 0; i < Math.floor(this.imageBox.clientWidth / 200); i++) {
    this.imageBox.innerHTML += '<li></li>'
  }
  var params = {
    page_num: 1,
    page_size: 80,
    q: words
  }
  this.getImage(params);
  this.imageBox.onscroll = function() {
    console.log(this.scrollTop);
    // 计算滚动条离底部距离
    var bottom = this.scrollHeight - this.scrollTop - this.clientHeight;
    // console.log(bottom)
    if(bottom < 80 && _this.load) {
      _this.load = false;
      params.page_num++;
      _this.getImage(params);
    }

  }
  
}
LazyLoad.prototype.getImage = function(params) {
  var _default = {
    url: "http://dev.91jianke.com:1091/id_v2_5/search_img",
    page_num: 1,
    page_size: 40,
    q: '世界杯'
  }
  for (var i in params) {
    // 替换默认值
    _default[i] = params[i]
  }
  // 接口地址
  // -> url http://dev.91jianke.com:1091/id_v2_5/search_img
  // -> q  查询内容
  // -> page_no 页码
  // -> page_size 每次返回条数
  // 通过ajax获取图片
  // var arr = [_default.url, '?' ,'page_no=', (_default.page_num - 1)* _default.page_size, '&page_size=', _default.page_size]
  var _this = this
  function loadImage(json) {
    _this.insertImage(json.data);
  }
  var params = {
    url: `${_default.url}?page_no=${_default.page_num}&page_size=${_default.page_size}&q=${_default.q}`,
    success: loadImage
  }
  sendAJAX(params)
}
LazyLoad.prototype.insertImage = function(arrIamge) {
  // 瀑布流，插入图片时， 固定宽，不固定高
  var liAll = this.imageBox.querySelectorAll('li');
  for (let index = 0; index < arrIamge.length; index++) {
        var div = document.createElement('div');
        div.className = 'img-list'
        div.style.width = 200 + 'px';
        div.style.height = 200 / arrIamge[index].width * arrIamge[index].height + 'px';
        var img = document.createElement('img');
        img.src = arrIamge[index].img;
        let _index = countIndex(liAll)
        div.appendChild(img);
        liAll[_index].appendChild(div);
        liAll[_index].style.height = parseInt(liAll[_index].style.height) + parseInt(div.style.height) + 'px'
      }
      this.load =  true;
  // this.imageBox.appendChild(frag);
}
function countIndex(liAll) {
  // 计算出此时宽度最小的那一个
  var arr = []
  for(let i = 0; i < liAll.length; i++) {
    // 由于flex布局的特殊性，li默认高度100%， 所以要动态给他设置高度
    liAll[i].style.height = liAll[i].style.height ? liAll[i].style.height : 0
    const obj = {
      index: i,
      height: parseInt(liAll[i].style.height)
    }
    arr.push(obj);
  }
  arr.sort(function(a, b){
    return a.height -b.height;
  })
  console.log(arr);
  return arr[0].index
}