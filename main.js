// 할 일 추가
// 1. 할 일 작성
// 2. 그 값을 받아서
// 3. 리스트에 넣기 (옆에 박스들도 자동으로 들어가게)

let buttonTodo = document.getElementById("button-todo");
let inputTodo = document.getElementById("input-todo");
let todoList = [];

buttonTodo.addEventListener("click", addTodo);

function addTodo() {
  let task = {
    id: randomIDgenerate(),
    taskContent: inputTodo.value,
    isComplete: false
  };
  todoList.push(task);
  console.log(todoList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].isComplete == true) {
      resultHTML += `<div class="todo-box-done" "todo-box">
            <div class="todo-done"> ${todoList[i].taskContent} </div>
            <div class="todo"> <svg xmlns="http://www.w3.org/2000/svg" color="green" width="32" height="32" fill="currentColor" onclick="toggleComplete('${todoList[i].id}')" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
          </svg>
            <svg xmlns="http://www.w3.org/2000/svg" color="red" width="32" height="32" fill="currentColor" onclick="deleteTask('${todoList[i].id}')" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg></div>
            </div>`;
    }
    else {
      resultHTML += `<div class="todo-box">
        <div class> ${todoList[i].taskContent} </div>
        <div class="todo"> <svg xmlns="http://www.w3.org/2000/svg" color="green" width="32" height="32" fill="currentColor" onclick="toggleComplete('${todoList[i].id}')" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" color="red" width="32" height="32" fill="currentColor" onclick="deleteTask('${todoList[i].id}')" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg></div>
        </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id == id) {
      todoList[i].isComplete = !todoList[i].isComplete;
      render();
      break;
    }
  }
}

function deleteTask(id) {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id == id) {
        todoList.splice(i, 1)
        render();
        break;
    }
  }
}

function randomIDgenerate() {
  return Date.now();
}
// 체크버튼: 할 일 완료, 취소선

// 탭으로 할일들의 목록을 상태별로 체크 가능
// 모바일 버전에서도 확인 가능  -> 부트스트랩 쓰라는 뜻이잖아?
// 탭 누르면 언더바가 움직임
