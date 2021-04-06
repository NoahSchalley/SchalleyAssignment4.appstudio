let query = ""
let req = {}
let netID = "ncs12245"
let pw = "Caliooo333"
let results = []

customerDropDown.onshow = function() {
  query = "SELECT DISTINCT state FROM customer"
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
        drpCustomerState.addItem(results[i])
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage.value = "Error code: " + req.status
}

drpCustomerState.onclick=function(s){
    if (typeof(s) == "object"){// means the control was clicked but no selection made yet
    return                     // do nothing
  } else {
    drpCustomerState.value = s   // make dropdown show choice user made
    console.log(`The user chose ${s} and selection is ${drpCustomerState.selection}.`)
query = `SELECT DISTINCT name FROM Customer
WHERE state='${drpCustomerState.selection}';`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are /n ${results}`)
        if (results.length === 0)    
           lblMessage.value = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][0] + "\n"
           txtaCustomerNames.value = message
        } // end else
    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage.value = "Error code: " + req.status    
  }
}
    
    
