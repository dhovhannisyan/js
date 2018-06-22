

window.onload = function(){


   class A {   // class singleton
      constructor(){
        if(A.instance){
          return A.instance
        }else {
          A.instance = this;
        }
      }
    }

  class User {

        constructor(firstName, lastName, age, email, password){
            // this.id = getID();
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
            this.password = password;
            // this.table = table;
        }

        addToTable(){
            let table = document.getElementsByTagName('table')[0],
                row = document.createElement('tr'),
                cell, input;
                cell = document.createElement('td');
                cell.innerHTML = getId();
                input = document.createElement('input');
                input.setAttribute("type", 'checkbox');
                input.style.float = 'left'
                cell.appendChild(input);
                
                row.appendChild(cell);

            for(let prop in this) {
                

               cell = document.createElement('td');
               input = document.createElement('input');

               input.style.width = this[prop].toString().length  * 9 + 'px';
               input.value = this[prop];
               
               cell.appendChild(input);
               row.appendChild(cell);
               table.appendChild(row);

               cell.onclick = function(){
                   this.children[0].focus();
               }

               input.onkeyup = function(){
                   this.style.width = this.value.length * 9 + 'px'
               }

            }
        }

    }

    let i = 1;
    function getId() {
        
        return i++
    }


        let cellesDom = document.getElementsByTagName('td'),
        data = [
                    new User('Armen', 'Gevorgyan', 19, 'e-mail', 'password').addToTable(),
                    new User('Karen', 'Vardanyan', 47, 'e-mail', 'password').addToTable(),
                    new User('Gevorg', 'Avetisyan', 19, 'e-mail', 'password').addToTable()
                ];

        

        

    
    let buttons = document.getElementsByClassName('button');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function(){
            this.style.boxShadow = 'none';
            let self = this;
            setTimeout(function(){
                self.style.boxShadow = '1px 2px #777';
            }, 120)
        }
    }
  
}



