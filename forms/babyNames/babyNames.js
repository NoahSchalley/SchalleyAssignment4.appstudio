let listBabyNames = ['Teresa', 'Stephanie', 'Sarah', 'Isabella', 'Abigail', 'Nora', 'Cat', 'Brandi', 'Mari', 'Leia', 'Kaitlyn', 'Daniella', 'Gabriella', 'Maeve','Karlie','Amelia','Rowan','Emily','Samantha','Darlene']
let chosen = []


babyNames.onshow=function(){
  for (i = 0; i < listBabyNames.length; i++) 
        selNames.addItem(listBabyNames[i])
}

btnContinue.onclick=function(){
  ChangeForm(favBabyNames)
}

btnSubmitFaves.onclick=function(){
  chosen = selNames.value
  lblAlert.value = ""
  if (chosen.length > 5) {
    lblAlert.value = "If you chose more than 5 names, only the first five will be added to your favorites list."
    }
  if (chosen.length < 5) {
    lblAlert.value = "Please choose 5 names."
    }
}