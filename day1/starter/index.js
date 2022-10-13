// 1. api calls
// 2. card layout
// 3. configurable
// 

const nameFormatter = (user) => `${user.firstName} ${user.lastName}`;
const companyPositionFormatter = (user) => `${user.company.title}`;
const companyNameFormatter = (user) => `${user.company.name}`;
let config = [
  {
    label: "Name ",
    value: "name",
    formatter: nameFormatter,
  },
  {
    label: "Age",
    value: "age",
  },
  {
    label: "Phone ",
    value: "phone",
  },
  {
    label: "Blood Group",
    value: "bloodGroup",
  },
  {
    label: "Company",
    value: "name",
    formatter: companyNameFormatter,
  },
  {
    label: "Position",
    value: "name",
    formatter: companyPositionFormatter,
  },
  {
    label: "weight ",
    value: "weight",
  },
];

function fetchDataFromServer() {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((json) => displayCards(json));
  }

function displayCards(data){
    let {users} = data;
    let mainContainer = document.getElementsByClassName("main-container")[0];
    users.forEach( (ele) => { mainContainer.appendChild(renderCard(ele)); } );
}   

function renderCard(user){
    let cardContainer = document.createElement("div");
    let imgContainer = document.createElement("img");
    let detailsContainer = document.createElement("div");

    // img Container
    imgContainer.setAttribute("class", "user-img");
    imgContainer.setAttribute("src", user.image);

    // details container
    detailsContainer.setAttribute("class", "details-container");
    config.forEach((ele) => {
        let {label, formatter, value} = ele;
        if(formatter){
            value = formatter(user);
        }else{
            value = user[value];
        }
        detailsContainer.appendChild(getDetailsContainerElements(label, value) );
    })

    // pull up the tree
    cardContainer.setAttribute("class", "card");
    cardContainer.appendChild(imgContainer);
    cardContainer.appendChild(detailsContainer);

    return cardContainer;
}

function getDetailsContainerElements(label, value){
    let detail = document.createElement("div");
    let labelContainer = document.createElement("h4");
    let valueContainer = document.createElement("h4");

    labelContainer.setAttribute("class", "label-container");
    labelContainer.innerText = label;

    valueContainer.setAttribute("class", "value-container");   
    valueContainer.innerText = value;

    detail.setAttribute("class", "detail-fields");
    detail.appendChild(labelContainer);
    detail.appendChild(valueContainer);

    return detail;
}

fetchDataFromServer();