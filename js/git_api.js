let api = fetch('https://api.github.com/users/kkoroleva') 
    .then((response) => {
        response.json();
        console.log('fetch then1');
    }) 
    .then((data) => { 
        console.log('fetch then2'); 
    }); 
 
 
