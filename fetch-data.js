document.addEventListener('DOMContentLoaded', function() {

    fetchUserData(); 

})



async function fetchUserData(){
    let apiUrl  = 'https://jsonplaceholder.typicode.com/users'; 
    let dataContainer = document.getElementById("api-data"); 
    dataContainer.innerHTML= "" ; 

    let userList = document.createElement("ul")
    

    try{
        response = await fetch(apiUrl) 
        
        users = await response.json(); 
         console.log(users)
         users.forEach(element => {
            let li = document.createElement("li") ; 
            li.textContent = element.name; 
            userList.appendChild(li) ; 
        });
        dataContainer.appendChild(userList); 
    
    
    }catch(error){
        dataContainer.innerHTML= 'Failed to load user data.' ; 

    }
    

}
