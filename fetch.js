let arrayOfUsers = [];


const getUsers = () => {
  fetch("https://randomuser.me/api/?results=100")
  .then(res => res.json())
  .then(user => arrayOfUsers = data.results[0])
  console.log(user)
  
  addressBook(user)
}

getUsers()




const addressBook = (user) => {
  const name = document.getElementById("user-name");
  const image = document.getElementById("user-image");
  
  name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
  image.setAttribute('src', `${user.picture.large}`);
}

addressBook()



/*async function getUsers() {
  const response = await fetch("https://randomuser.me/api/?results=100");
  const data = await response.json();
  const user = data.results[0];
  console.log(user)
  
  addressBook(user)
}

getUsers()*/