// How to fetch Data from server.

function fetchDataFromServer() {
  fetch('https://dummyjson.com/users')
    .then((response) => response.json())
    .then((json) => printData(json));
}

function printData(data) {
  //1. filter
  console.log(data);
  //let res = data.filter((a) => a.id < 50);

  //2. destructuring
  let {limit, skip, total, users} = data;
  console.log(users);

  //3. Template literals
  let age = users.reduce((a,b,index) => {
      a+=b.age;
      return a;
    }, 100 );
    console.log(age/ users.length);
  }

  //let res = users.map((ele) => {name: `users.firstName` + 'users.lastName'}) 


fetchDataFromServer();
