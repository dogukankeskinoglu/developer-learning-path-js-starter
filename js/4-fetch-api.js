/************************************************/
/*******************Fetch API********************/
/************************************************/
// GET Request.
/*fetch('https://api.github.com/users/sahinkat')
  // Handle success
  .then(response => response.json())  // convert to json
  .then(json => console.log(json))    // print data to console
  .catch(err => console.log('Request Failed', err)); // Catch errors*/

/*fetch('/save/data', {
  method: 'POST',  
  body: JSON.stringify(data),// if sending data as array or object
  headers: {
    'Content-Type': 'application/json'
  }
})*/

/*// Get wrapper
const get = async (url, callback) => {   
  const response = await fetch(url)   
  const status = await response.status      
  if (callback) callback[status](await response.json()) 
}  
// Get usage based callback
get(url, {   
  200: body => doSomething,   
  401: body => showSignInModal,   
  403: body => redirectToSafeArea,   
  422: body => showModalWithInstruction 
})*/