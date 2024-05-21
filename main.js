// 할 일 추가
// 1. 할 일 작성
// 2. 그 값을 받아서
// 3. 리스트에 넣기 (옆에 박스들도 자동으로 들어가게)

let buttonTodo = document.getElementById("button-todo");
let inputTodo = document.getElementById("input-todo");
let todoList = []

buttonTodo.addEventListener("click", addTodo);

function addTodo() {
    let task = {
        id: randomIDgenerate(), 
        taskContent: inputTodo.value,
        isComplete: false
    }
    todoList.push(task);
    console.log(todoList);
    render();
}

function render() {
    let resultHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        resultHTML += `<div class="todo-box">
        <div class="todo"> ${todoList[i].taskContent} </div>
        <div class="todo"> <button onclick="toggleComplete">Check</button> <button>Delete</button></div>
        </div>`;
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete() {
    task.isComplete
}

function randomIDgenerate() {
    return Date.now();
}
// 체크버튼: 할 일 완료, 취소선



// 탭으로 할일들의 목록을 상태별로 체크 가능
// 모바일 버전에서도 확인 가능  -> 부트스트랩 쓰라는 뜻이잖아?
// 탭 누르면 언더바가 움직임