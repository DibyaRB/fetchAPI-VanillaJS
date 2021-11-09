document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);

document.getElementById('addPostForm').addEventListener('submit', addPost);


function fetchUserData() {
    fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then(users => {

        let output = '<h2> List of Users </h2>';

        output += '<ul>';

        users.forEach(user => {
            output += `
            <li>
            ${user.name}
            </li>
        `;
        });

        output += '</ul>';

        document.getElementById("response").innerHTML = output;

    });
}


function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    const myPost = {
        title: title,
        body: body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myPost)
    }).then((res) => res.json()).then((data) => {
        console.log(data);
    });

}