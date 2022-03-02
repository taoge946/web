var a=document.getElementById('aa')
var b=document.getElementById('bb')
var c=document.getElementById('cc')
var d=document.getElementById('dd')
a.style.backgroundColor='purple'
function zuhe(){
  if(window.confirm("你确定要买么？")){
    var cont=window.prompt("请输入地址","格式为XX省，XX市");
    if(cont!=null){
      window.alert("购买成功,订单马上发往"+cont);
    }else{
      alert("那真是太可惜了")
    }

  }else{
    alert("那真是太可惜了")
  }



  window.focus();
}
function  get(){
  var tit=document.title;
  var dom=document.domain;
  var url=document.URL;
  alert(tit+'\n'+dom+'\n'+url);
  a.style.backgroundColor='red'
}
function longer(){
  //a.onmousedown=function (){
    a.style.width='500px'
  //}
  //a.style.backgroundColor='red';
}
function  nomarl(){
  a.style.width='200px'
}
a.onmouseleave=function (){
  a.style.backgroundColor='blue'
}
a.onmouseover=function (){
  a.style.backgroundColor='purple'
}
a.onmousedown=function (){
  a.style.fontSize="100px"
}
a.onmouseup=function (){
  a.style.fontSize="10px"
}
if (b!=null){
  alert(b)
}
function  danji_shuangji(){
  var i=event.button
  if(i==2){
    b.style.backgroundColor='red'

  }
  if(i==0){
    b.style.backgroundColor='green'
    alert('X:='+event.clientX+'Y:='+event.clientY)
  }
}
function jianpan(){
  if(event.ctrlKey){
    c.style.backgroundColor='yellow'
    c.style.color='black'
  }
  if(event.altKey){
    c.style.backgroundColor='white'
    c.style.color='black'

  }
  if(event.keyCode=='65'){
    c.style.color='red'
  }
  if (event.keyCode==13){
    event.keyCode=0;
    event.returnValue=false;
    alert("当前页面不允许使用回车键")
  }
  if((event.ctrlKey)&&(event.keyCode==67)){
    event.returnValue=false;
    //alert("当前页面不允许使用快捷键复制")
  }
}
function  pingbi(){
  if(event.button==2){
    event.returnValue=false;
    alert("本页面禁止使用鼠标右键")
  }
}
d.innerHTML=s.sup()+s+'\n'+time
d.style.backgroundColor='green'
function getmouse(){
  event.clientX=
  event.clientY=200
}


document.getElementById('focus').onfocus=function (){
  alert('明智的选择')
  document.getElementById('focus').blur()
}
// document.onscroll=function(){
//   alert('别乱玩滚动条！')
// }
document.onselect=function (){
  alert("输入框内禁止选择哦~")
}
document.form1.text.value='aaaaa'
document.getElementById('form')
function copyAddress(){
  var address=document.getElementById('address')//获得收货地址对象
  var address_copy=address.cloneNode(true)//完全复制对象
  var address_container=document.getElementById('addressContainer')//获得父容器对象（用来放收货地址的最大的那个div）
  address_container.appendChild(address_copy)//为父容器添加复制对象
}
function delClick(obj){
  var address_container=document.getElementById('addressContainer')
  var delOBJ=obj.parentNode  //获取父容器节点
  if(delOBJ.previousElementSibling==null){//就是看有没有兄弟节点（判断还有没有其他的保存的地址）
    alert('无法删除，至少保留一个地址')//如果没有其他保存的地址时就禁止删除
    return ;//这个return就是直接将这个delClick函数返回了，就不再往下进行了
  }
  address_container.removeChild(delOBJ)//否则若是还有其他保存的地址的话就可以将这个节点给删了
}
function array_max(){
  var i,max=this[0]
  for(i=1;i<this.length;i++){
    if(max<this[i]){
      max=this[i]
    }
  }
  return max
}
Array.prototype.max=array_max;
var x=new Array(1,2,3,4,5)
var y=x.max()
var time=new Object()
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
var then=new Date(2021,0,1)
var later=new Date(2021,0,2,17,10,30)
var now=new Date()
var elapsed=now-then
var q='global',p='global'
var geval=eval
function f(){
  var q='local'
  q+="change"
  return q
}
function g(){
  var p='local'
  geval('p+="change"')
  return p
}
var pp={x:1,y:2,z:3}
var o={x:4,y:5}

// var oo=inherit(pp)
// oo.z=5
function test() {

  serialnum.next
  if(serialnum.$n<4)
    alert(serialnum.$n)
  else {
    (serialnum.$n=5)
    alert(serialnum.$n)
  }
}
function test2(){
  console.log(aaa.x)
  for (i in aaa) console.log(i)

}
function factorial(x){
  //如果输入参数是非法的则抛出一个异常
  if(x<0) throw new Error('x不能是负数')
  //否则计算出一个值并且正常的返回它
  for(var f=1;x>1;f*=x,x--);/*empty*/
  return f

}
function inherit(p){
  if (p==null) throw TypeError()
  if(Object.create)
    return Object.create(p) //如果Object.create方法存在，则直接使用其来创建新的对象，函数到此结束
  var t=typeof p
  if(t!=='object'&&t!=='function') throw TypeError()
  function f(){}
  f.prototype=p
  return new f()
}
function  extend(o,p){  //将对象p的所有属性给o，返回值为对象o (单单执行这个函数就已经改变了对象o的属性了，同时也将对象o返回)
  for(prop in p){
    o[prop]=p[prop]
  }
  return o
}
function merge(o,p){  //过滤掉o中已存在的属性，只是将o中不存的的p存在的属性给o（不要同名的属性来覆盖本身的属性）
  for(prop in p){
    if(o.hasOwnProperty(prop)) continue; //有同名属性则跳过这个循环，继续下个循环，看下个属性
    o[prop]=p[prop]
  }
  return o
}
function restrict(o,p){ //如果o中的属性在p中没有同名属性则从o中删除这个属性
  for (prop in o){
    if(!(prop in p)) delete o[prop]
  }
  return o
}
function subtract(o,p){   //如果o和p存在同名属性，删除o的同名属性
  for (prop in p) delete o[prop]  //因为删除一个空属性不会报错，所以可以这么写
  return o
}
function union(o,p){return extend(extend({},o),p)}//返回一个新对象，这个对象拥有在o和p出现过的所有属性（就像是求o和p的并集，如果有重名属性则使用p的属性）
function  intersection(o,p){return restrict(extend({},o),p)} //返回一个新对象，这个对象的属性为o和p都有的属性(就像是求o和p的交集，如果有重名属性则使用o的属性)
//之所以要用extend是创建一个新对象来返回，这样的话就不会改变o对象的值了。

function keys(o){//返回一个数组，数组中为o中可枚举的所有自有属性的名字
  if(typeof o!=='object') throw  TypeError() //参数必须是对象
  var result=[]  //这是要返回的数组
  for(var prop in o){
    if(o.hasOwnProperty(prop))//判断是否是自有属性
      result.push(prop) //将属性名添加到数组中
  }
  return result
}

var serialnum={
  //这个属性包含下一个序列号
  $n:0, //$符号暗示这是一个私有属性

  get next(){return this.$n++;},//返回当前值然后自加
  set next(n){
    if(n>=this.$n) this.$n=n;
    else throw "序列号的值不能比当前值小"
  }
}
var aaa={y:2}
Object.defineProperty(aaa,'x',{
  value:1,
  configurable:true,
  enumerable:false,
  writable:false
})
Object.defineProperty(Object.prototype,"extend",{ //给Object.prototype添加一个不可枚举的extend方法
  writable:true,
  enumerable:false,//定义为不可枚举的
  configurable:true,
  value:function(o){
    var names=Object.getOwnPropertyNames(o)
    for (var i=0;i<names.length;i++){ //遍历所有的自有可枚举属性
      if(names[i] in this) continue ;//如果属性存在，则跳过
      var desc=Object.getOwnPropertyDescriptor(o,names[i])//获得对象o的所有的属性的描述符
      Object.defineProperty(this,names[i],desc)
    }
  }
})
var o=Object.seal(Object.create(Object.freeze({x:1}),{y:{value:2,writable:true}}))
      //创建一个封闭对象包括一个冻结的原型和一个不可枚举的属性
