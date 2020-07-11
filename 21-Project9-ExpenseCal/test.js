const inputText = document.getElementById('text'),
    inputAmount = document.getElementById('amount'),
    form = document.getElementById('form'),
    list = document.getElementById('list'),
    deleteBtn = document.querySelector('.delete-btn'),
    balanceValue = document.getElementById('balance'),
    incomeValue = document.getElementById('money-plus'),
    expenseValue = document.getElementById('money-minus'),
    tasks = document.getElementById('list'),
    container = document.querySelector('.container');


//Event Listners
form.addEventListener('submit', e => {
    e.preventDefault();
   
    updateTransactions();
});

tasks.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        let txt = e.target.parentElement.children[0].textContent;
        let expt = e.target.parentElement.firstChild.textContent;
        // console.log('aata',expt);

        if(txt < 0) {
              // Assingin variable a to the input value and delete it from expense array
            let deleteexp = txt;
            let b = inc.indexOf(deleteexp);
            exp.splice(b, 1);
        } else {
              // Assingin variable a to the input value and delete it from income array
            let deleteinc = txt;
            let b = inc.indexOf(deleteinc);
            inc.splice(b, 1);
        }
        
        // Assingin variable a to the input value and delete it from balance array
        let a = bal.indexOf(txt);
        bal.splice(a, 1);
        e.target.parentElement.remove();
        calculateValues();
        removeFromLocalStorage(expt);
        
    }
    e.preventDefault();
});


//Assigning an empty array to get the input values      
let bal = [0];
let exp = [0];
let inc = [0];


//Update Input values to list/History tab
function updateTransactions() {
    
    //assiging the input amount to sign to check + & -ve values
    let sign = amount.value;
    let texts = text.value;

    if(text.value === '') {
        alert('Please enter the text for Transaction');
    } else if (amount.value === '') {
        alert('Please enter the sum for Transaction');
    } else {


    //creating an li element 
    tab = document.createElement('li');
    //Adding minus or plus to created li 
    tab.classList.add(sign < 0 ? 'minus' : 'plus');


    //Assiging the input values to a variable 
    const balance = amount.value;
    console.log(balance);
    // pushin the variable to array
    bal.push(parseInt(amount.value));

    if(amount.value < 0) {
        // expense calculating and pushin into array
        const expense = amount.value;
        exp.push(parseInt(expense));
        
    } else {
        // income calculating and pushin into array
        const income = amount.value;
        inc.push(parseInt(income));
    }


    //Adding HTML to be inplemented under histroy tab
    tab.innerHTML = `
     ${text.value} <span>${sign}</span>
     <button class="delete-btn" >x</button>
    `;

    list.appendChild(tab);
    
    }
    localStore(texts, sign);
    calculateValues();
    text.value = '';
    amount.value = '';
}

function calculateValues() {
    //Calculating the values of 
    const total = bal.reduce(function(a, b){
        return a + b;
    });
    
    const incm = inc.reduce(function(a, b){
        return a + b;
    });
    const expe = exp.reduce(function(a, b){
        return a + b;
    });

    console.log('total: ', total);
    console.log('income: ', incm);
    console.log('expnse: ', expe);

    balanceValue.innerText = `$${total}`;
    incomeValue.innerText = `$${incm}`;
    expenseValue.innerText = `$${expe}`;

}

// Local storage 

//Add to Local storage
function localStore(text, amount) {
    let inputentries;
    if (localStorage.getItem('inputentries') === null) {
        inputentries = [];
    } else {
        inputentries = JSON.parse(localStorage.getItem('inputentries'));
    }

    inputentries.push({ inputText: text, value: amount });
    localStorage.setItem('inputentries', JSON.stringify(inputentries));

}

// Get from local storage 
function getFromLocalStore() {
    let getItems;

    if (localStorage.getItem('inputentries') === null) {
        getItems = [];
        console.log(getItems);
    } else {
        getItems = JSON.parse(localStorage.getItem('inputentries'));
        console.log('v' , getItems);
    }
    getItems.forEach(data => {
        console.log(data.inputText, data.value);
        tab = document.createElement('li');
        tab.classList.add(data.value < 0 ? 'minus' : 'plus');
        sign = data.value;

        // pushin the variable to array
        bal.push(parseInt(data.value));
        if(data.value < 0) {
            // expense calculating and pushin into array
            const expense = data.value;
            exp.push(parseInt(expense));
            
        } else {
            // income calculating and pushin into array
            const income = data.value;
            inc.push(parseInt(income));
        }
        //Adding HTML to be inplemented under histroy tab
        tab.innerHTML = `
        ${data.inputText} <span>${sign}</span>
        <button class="delete-btn" >x</button>
        `;
        list.appendChild(tab);
        calculateValues();
        });
}

getFromLocalStore();

//Delete from local stroage 
function removeFromLocalStorage(inputtext) {
    let inputentries;
    console.log('a');
    if (localStorage.getItem('inputentries') === null) {
        inputentries = [];
    } else {
        inputentries = JSON.parse(localStorage.getItem('inputentries'));
        console.log('a', inputentries);
    }
    console.log('ab', inputentries);
    inputentries.forEach((data, index) => {
        console.log(data.inputText);
        if (data.inputText === inputtext) {
            inputentries.splice(index, 1);
            console.log(inputentries);
        }
    })
    console.log(inputentries);
    console.log(data.inputText);
    localStorage.setItem('inputentries', JSON.stringify(inputentries));
}





