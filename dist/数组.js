var a=[33,4,1111,222]
var b=Object.create(a)

var d=new Array(4)
b[1]=10
//Object.defineProperty(a,'length',{writable:false})
function test1(){
  console.log(a.slice(-2))
}

function  findall(a,x){
  var result=[],len=a.length,pos=0;//分别为将会返回的索引值的数组，待搜索数组的长度以及起始位置
  while (pos<len){        //判断是否遍历完整个数组
    pos=a.indexOf(x,pos)  //寻找指定的值
    if(pos===-1)break     //若不存在则直接跳出循环返回空数组
    result.push(pos)      //若在则将索引压进结果中
    pos=pos+1             //位置加一再来一遍看看还有没有
  }
  return result
}
