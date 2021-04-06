favBabyNames.onshow=function(){
  selFav.clear()   
    for (i = 0; i <= 4; i++) 
          selFav.addItem(chosen[i])
  lblMessage4.value = ""
}

selFav.onchange=function(s){
  let favorite = selFav.value
  lblMessage4.value = `Your favorite baby name is ${favorite}`
  imgMe.show()
  }