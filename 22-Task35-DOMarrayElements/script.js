const addUserBtn = document.getElementById('add-user'),
     doubleBtn = document.getElementById('double'),
     showMillionaireBtn = document.getElementById('show-millionaires'),
     sortBtn = document.getElementById('sort'),
     calculateBtn = document.getElementById('calculate-wealth'),
     main = document.getElementById('main');


let data = []; 
let newUser;

rengrateUser();
rengrateUser();
rengrateUser();

// fn reg user 
function rengrateUser() {
    fetch('https://randomuser.me/api')
      .then(res => res.json())
      .then(data => {
        //   console.log(data);

          const user = data.results[0];
          newUser = {
              name : `${user.name.first} ${user.name.last}`, 
              money : Math.floor(Math.random() * 1000000)
          }; 
          addUser(newUser);
      });

}

// // fn user 
function addUser(newUser) {
    data.push(newUser);
    updateDOM();
}

function updateDOM(provideddata = data) {
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

    provideddata.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)}`;
    console.log(element.innerHTML);
    main.appendChild(element);
    });
}

function doubleValue() {
    data.forEach(item => {
        item.money = `${item.money}` * 2;
        updateDOM();
    })
}

function millionairefn() {

    data = data.filter( user => user.money > 1000000);
    updateDOM();
}

function sortBy() {
    data.sort((a,b) => b.money - a.money);
    updateDOM();
}

function calculateWealth() {
    const wealth = data.reduce((acc, num) => (acc + num.money), 0);
    
    const wealthEL = document.createElement('div');
    wealthEL.innerHTML = `<h3>Total Weath: <strong>${formatMoney(wealth)}</strong>`;
    main.appendChild(wealthEL);
}

//Format number as money
function formatMoney(number) {
    return '₹' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


addUserBtn.addEventListener('click', rengrateUser);
doubleBtn.addEventListener('click', doubleValue);
showMillionaireBtn.addEventListener('click', millionairefn);
sortBtn.addEventListener('click', sortBy);
calculateBtn.addEventListener('click', calculateWealth);