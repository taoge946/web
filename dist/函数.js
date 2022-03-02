var a=function(x){return x*x}
var aa={
  aaa:2,
  bbb:3
}
var b=[function(x){return x*x},2,3]
function test2() {
  console.log(f(1).m())
}
function  f(x){
  function  m(y){
    return y*y
  }
  return m(x)
}

