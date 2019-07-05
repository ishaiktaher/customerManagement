import config from "./config.js";
export function getPosts() {
    const p = new Promise(function (resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1")
            .then(res => res.json())
            .then(data => resolve(data));
    });
    return p;
}

export function getUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(
            res => res.json()
        );
}

export function savePost(post) {
    return fetch(`${config.endpoint}/customers`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}

export function getPost(post) {
    return fetch(`${config.endpoint}/customers`, {
        method: "GET",
    }).then(customers => customers.json());
}

export function deletePost(id) {
    return fetch(`${config.endpoint}/customers/${id}`, {
        method: "DELETE",
    }).then(res => res.json());
}