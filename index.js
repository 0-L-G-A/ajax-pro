const buttonLoadInfo = document.querySelector('.btnLoadInfo');
const wrapperForUsers = document.querySelector('.wrap');
buttonLoadInfo.addEventListener("click", getData);


async function getData(){
    let res = await fetch("http://localhost:2020/users", )
    const json = await streamToJSON(res)
    json.users.map(user => {return wrapperForUsers.insertAdjacentHTML('beforeend',
        `<h2>User ID: ${user.id}</h2>
        <p>Name: ${user.first_name}</p>
        <p>Lastname: ${user.last_name}</p>
        <p>Email: ${user.email}</p>
        <img src="${user.photo}" alt="userAvatar" class="avatar">`
    );
    })
    buttonLoadInfo.hidden = true;
}

async function streamToJSON(response){
    // console.log(response)
    const rb = response.body;
    // console.log(rb)
    const reader = await rb.getReader();
    // console.log(reader)
    const stream = await new ReadableStream({
        start(controller) {
        // The following function handles each data chunk
        function push() {
            // "done" is a Boolean and value a "Uint8Array"
            reader.read().then( ({done, value}) => {
            // If there is no more data to read
            if (done) {
                // console.log('done', done);
                controller.close();
                return;
            }
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            // Check chunks by logging to the console
            // console.log(done, value);
            push();
            })
        }

        push();
        }
    });
    // console.log(stream);
    const newResponse = await new Response(stream, { headers: { "Content-Type": "application/json" } }).json();
    // console.log(newResponse)
    return newResponse;
}