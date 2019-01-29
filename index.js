// add solution here
function theBeatlesPlay(arrMus, arrIns) {
  var arr = []
  for(var i = 0; i < arrMus.length; i++){
    var string = arrMus[i] + " plays " + arrIns[i]
    arr.push(string)
  }
  return arr
}
