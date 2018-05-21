function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list li')
  
  for(var i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild(){
  
  var children = document.querySelectorAll('#grand-node div')
  for(var i = 0; i < children.length; i++){
    
  }
  return current

}