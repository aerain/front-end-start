//start...

var input = document.querySelector('#memo');
var form = document.querySelector('.new-task');

function addTodo(event) {   
    // if(event.keyCode === 13) {
        let todo = input.value;
        console.log(todo);
    // }

    // 해당 url로 넘어가지 않게 동작하기
    return false;
}

// input.addEventListener('keydown', addTodo);
form.addEventListener('submit', addTodo);