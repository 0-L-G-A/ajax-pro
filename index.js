const buttonLoadInfo = document.querySelector('.btnLoadInfo');
const wrapperForUsers = document.querySelector('.wrap');
buttonLoadInfo.addEventListener("click", getData);


async function getData(){
    let res = await fetch("http://localhost:2020/users", {  
    method: 'GET',  
    headers: {  
      "Content-type": "application/json; charset=UTF-8"  
    }
    }).then((response) =>  response.json()).then((data) => data);

    res.users.map(user => {return wrapperForUsers.insertAdjacentHTML('beforeend',
        `<h2>User ID: ${user.id}</h2>
        <p>Name: ${user.first_name}</p>
        <p>Lastname: ${user.last_name}</p>
        <p>Email: ${user.email}</p>
        <img src="${user.photo}" alt="userAvatar" class="avatar">`
    );
    })
    buttonLoadInfo.hidden = true;
}