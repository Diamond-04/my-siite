function performSearch() {
    
    let searchTerm = document.querySelector('.inp_3').value;

   
    let searchResults = document.querySelectorAll('div');
    searchResults.innerHTML = 'Searching for: ' + searchTerm;
    
}