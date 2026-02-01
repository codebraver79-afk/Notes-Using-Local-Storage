const form1 = document.getElementById('form1');
const inputField = document.getElementById('note');

notes = JSON.parse(localStorage.getItem('notes')) || [];

form1.addEventListener('submit',function(e){
    e.preventDefault();
    
    
    if (inputField.value == ""){
        alert('Please enter a valid note!')
    }
    else{
        
        notes.push(inputField.value);
        e.target.reset();
        displayNotes()
    }

})

function displayNotes(){
        const mylist = document.getElementById('mylist');
        mylist.innerHTML = "";

        notes.forEach(function(x){
            
            const deletebtn = document.createElement('button');
            const content = document.createElement('li');
            content.innerHTML = x;

            
            localStorage.setItem('notes',JSON.stringify(notes));

            content.appendChild(deletebtn);
            mylist.appendChild(content);
            deletebtn.classList.add('btn')
            deletebtn.innerHTML = 'Delete';
            

            deletebtn.addEventListener('click', function(){
                newlist = [];

                notes.forEach(function(z){
                    if (z!== x){
                        newlist.push(z);
                    }
                    notes = newlist;
                    localStorage.setItem('notes',JSON.stringify(notes))
                    displayNotes()

                })
                })
                
            })


        }

    

displayNotes()
