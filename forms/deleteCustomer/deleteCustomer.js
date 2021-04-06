
showNames.onclick=function(){
   query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are /n ${results}`)
        if (results.length === 0)    
           lblMessage.value = "There are no customers in the database."
        else {        
       results = JSON.parse(req.responseText)
      console.log(`The results are /n ${results}`)
    drpCustomerState.clear()   
    for (i = 0; i < results.length; i++) 
        selCustomer.addItem(results[i])
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage.value = "Error code: " + req.status
}



btnDelete.onclick = function() {
  let companyDelete = ""
  companyDelete = selCustomer.value 
  query = "DELETE FROM customer WHERE  name = '" + companyDelete + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
}

refresh.onclick=function(){
selCustomer.clear() 
   query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are /n ${results}`)
        if (results.length === 0)    
           console.log("That customer does not exist in the databse")
        else {        
       results = JSON.parse(req.responseText)
      console.log(`The results are /n ${results}`)
    drpCustomerState.clear()   
    for (i = 0; i < results.length; i++) 
        selCustomer.addItem(results[i])
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage.value = "Error code: " + req.status
}
