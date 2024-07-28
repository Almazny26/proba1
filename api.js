
const host = "https://webdev-hw-api.vercel.app/api/v2/todos";
let password = prompt('Введите пароль');

export function getTodos() {
    return fetch(host, {
       method: "GET",
       headers: {
        Authorization: password,
       }
    }).then((response) => {
        if(response.status === 401){
            password = prompt('Введите верный пароль');
            // что прописать ниже? 
            fetchAndRenderTasks(); 
            throw new Error('Нет авторизации')
        }
       return response.json();
    });
 }
 
 export function deleteTodo({ id }) {
    return fetch(host + id, {
       method: "DELETE",
       headers: {
        Authorization: password,
       }
    }).then((response) => {
       return response.json();
    });
 }
 
 export function postTodo({ text }) {
    return fetch(host, {
       method: "POST",
       body: JSON.stringify({
          text,
       }),
       headers: {
        Authorization: password,
       }
    }).then((response) => {
       return response.json();
    });
 }