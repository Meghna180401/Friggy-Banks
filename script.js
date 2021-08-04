'use strict';

// Data
const account1 = {
  owner: 'Peter',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-05-27T17:01:17.194Z',
    '2021-07-30T23:36:17.929Z',
    '2021-08-01T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account2 = {
  owner: 'Janet',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2021-05-27T14:43:26.374Z',
    '2021-07-29T18:49:59.371Z',
    '2021-08-01T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account3 = {
  owner: 'Jake',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-05-27T17:01:17.194Z',
    '2021-07-30T23:36:17.929Z',
    '2021-08-01T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account4 = {
  owner: 'Pam',
  movements: [430, 1000, 700, -50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2021-07-30T18:49:59.371Z',
    '2021-08-03T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account5 = {
  owner: 'Barbara',
  movements: [800,60,-240,567,-20,-80,-130],
  interestRate: 1,
  pin: 5555,

  movementsDates: [
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-05-27T17:01:17.194Z',
    '2021-07-29T23:36:17.929Z',
    '2021-08-03T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account6 = {
  owner: 'Colin',
  movements: [450,50,-40,-230,1000,20],
  interestRate: 1,
  pin: 6666,

  movementsDates: [
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2021-04-10T14:43:26.374Z',
    '2021-07-29T18:49:59.371Z',
    '2021-08-03T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account7 = {
  owner: 'George',
  movements: [1000,-70,-450,300,20,800],
  interestRate: 1,
  pin: 7777,

  movementsDates: [
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-05-27T17:01:17.194Z',
    '2021-07-30T23:36:17.929Z',
    '2021-08-03T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const accounts = [account1, account2, account3, account4, account5,account6, account7];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerMovements = document.querySelector('.movements');

//const btnLogin = document.querySelector('.login__btn');
const btnScamper = document.querySelector('.bone');
const btnDeposit = document.querySelector('.form__btn--deposit');
const btnGift = document.querySelector('.form__btn--gift');
const btnWithdraw = document.querySelector('.form__btn--withdraw');
const btnSort = document.querySelector('.btn--sort');
const btnClose = document.querySelector('.btn-close-acc');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputDepositAmount = document.querySelector('.form__input--deposit-amount');
const inputWithdrawAmount = document.querySelector('.form__input--withdraw-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
//const inputClosePin = document.querySelector('.form__input--pin');

const containerApp = document.getElementById('app');
const intro = document.getElementById('intro');
const selectUserInput = document.getElementById('selectUser');
const greet = document.getElementById('greetUser');

window.onload = function(){
  containerApp.classList.add('no-show');
}

function greetUser(currentUser){
  greet.innerHTML = `Hey ${currentUser}!`;
}


function start(){
  const currentUser = selectUserInput.options[selectUserInput.selectedIndex].text;
  console.log(currentUser);
  if(currentUser==='--Choose character--')
    alert('Please choose a character first');
  else{
    intro.classList.add('no-show');
    containerApp.classList.remove('no-show');
    greetUser(currentUser);
    displayInfo(currentUser);
  }  
}

function rechoose(){
  containerApp.classList.add('no-show');
  intro.classList.remove('no-show');
}

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function(acc,sort=false){
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a,b)=>a-b):acc.movements;

  movs.forEach(function(mov,i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatCur(Math.abs(mov), acc.locale, acc.currency);

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${
  i + 1
} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
  </div>`;

  containerMovements.insertAdjacentHTML('afterbegin',html);
  });
};

const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc,mov)=>acc+mov,0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
}

const calcDisplaySummary = function(acc){
  const incomes = acc.movements
  .filter(mov=>mov>0)
  .reduce((acc,mov)=>acc+mov,0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
}

const createSecretPin = function(accs){
  accs.forEach(function(acc){
    acc.secretPin = acc.owner.toLowerCase().substring(0,2)+"ss"+acc.pin;
  })
};
createSecretPin(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      rechoose();
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 300;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

let currentAccount,timer;
function displayInfo(currentUser){
  currentAccount = accounts.find(
    acc=>acc.owner === currentUser
  );
  console.log(currentAccount);

  //Display current date and time in label
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    // weekday: 'long',
  };
  // const locale = navigator.language;
  // console.log(locale);

  labelDate.textContent = new Intl.DateTimeFormat(
    currentAccount.locale,
    options
  ).format(now);

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

  updateUI(currentAccount);
}

btnDeposit.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputDepositAmount.value);
  inputDepositAmount.value = '';

  if(amount>0){
    currentAccount.movements.push(amount);
    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnWithdraw.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputWithdrawAmount.value);
  inputWithdrawAmount.value='';

  if(amount>0 && currentAccount.balance>=amount){
    currentAccount.movements.push(-amount);
    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
  else{
    alert('Sorry ! Your friggy bank holdings are insufficient');
  }
});

btnGift.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.owner === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.owner !== currentAccount.owner
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    
    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }else{
    if(amount<=0)
      alert('Please gift some valid amount');
    if(!(currentAccount.balance >= amount))
      alert('Sorry ! Save up some more to gift');
    if(!receiverAcc)
      alert('Please gift some Secret Seven member');
    if(!(receiverAcc?.owner !== currentAccount.owner))
      alert('Please Deposit instead');
  }
});

btnClose.addEventListener('click',function(e){
  let userPin = prompt("Find and enter your secret pin.🔎");
  if(userPin==currentAccount.secretPin){
    const index = accounts.findIndex(
      acc => acc.secretPin ===userPin
    );
    accounts.splice(index,1);
    for(let option of selectUserInput.options){
      if(option.text===currentAccount.owner){
        //selectUserInput.options[selectUserInput.selectedIndex].text;
        console.log("It matches");
        selectUserInput.options[selectUserInput.selectedIndex].text = '--Choose character--';
        option.classList.add('no-show');
      }
    }
    rechoose();
  }else{
    alert("Re-enter correct secret pin")
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});