//dom selection
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () =>{
   
    if(title.value == '' && author.value == '' && year.value == ''){
        alert('Please in our value correctly')
    }else{
        //creating title
        const showData = document.getElementById('showData')
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('td');
        const newAuthor = document.createElement('td');
        const newYear = document.createElement('td');
        newTitle.innerHTML = title.value;
        newAuthor.innerHTML = author.value;
        newYear.innerHTML = year.value;

        newRow.appendChild(newTitle);
       
        //creating title    
        newRow.appendChild(newAuthor);
      
         //creating Year
         newRow.appendChild(newYear);
         showData.appendChild(newRow);
         title.value = '';
         author.value = '';
         year.value = '';
    }
})
