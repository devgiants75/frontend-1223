//! Todo 할 일 목록
// TaskManager 클래스
// : T 제네릭 타입의 할 일 목록을 관리
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = []; // 초기 할 일 목록은 비어 있는 배열
        this.nextId = 1; // ID는 1부터 시작
    }
    //? 2. 메서드(기능)
    // - 할 일 추가 메서드
    // : 할 일 내용(content)을 매개변수로 받아 목록에 추가
    TaskManager.prototype.addTask = function (content) {
        // 새 할 일을 tasks 배열에 추가
        // : id는 현재 nextId 값을 사용
        // : content는 매개변수의 값을 사용
        //? : completed는 false(완료하지 않음)을 기본값으로 설정
        this.tasks.push({ id: this.nextId, content: content, completed: false });
        // 다음 ID값을 미리 증가
        this.nextId++;
        //? 할 일 개수를 업데이트
        this.updateTaskCount();
    };
    // - 할 일 제거 메서드
    // : 제거할 할 일의 ID를 매개변수로 받아 목록에서 제거
    TaskManager.prototype.removeTask = function (id) {
        // tasks 배열에서 매개변수로 받은 id와 일치하지 않는
        // , 할 일들만 필터링하여 새로운 배열 생성
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
        // 변경된 할 일 목록을 화면에 다시 렌더링
        this.renderTasks('task-list');
        //? 할 일 개수를 업데이트
        this.updateTaskCount();
    };
    // - 할 일 목록을 화면에 렌더링하는 메서드
    // : '렌더링할 컨테이너(ul 태그)'의 ID를 매개변수로 전달받음
    // <ul id="task-list"></ul>
    TaskManager.prototype.renderTasks = function (containerId) {
        var _this = this;
        // 매개변수로 받은 ID를 가진 HTML 요소를 선택
        // : 해당 요소는 HTML의 ul 태그임을 타입으로 단언
        var container = document.getElementById(containerId);
        // 기존의 목록을 모두 비움
        container.innerHTML = '';
        // tasks 배열의 각 할 일에 대해 루프를 실행
        //? 할 일 목록을 렌더링할 때 완료 체크박스와 완료 상태에 따른 스타일 변경 로직을 추가
        this.tasks.forEach(function (task) {
            // 새로운 목록 항목(li)을 생성
            var li = document.createElement('li');
            // 할 일의 내용을 목록 항목의 텍스트로 설정
            li.textContent = "".concat(task.content);
            // 삭제 버튼(button)을 생성
            var deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제'; // 버튼의 텍스트를 '삭제'로 설정
            deleteButton.onclick = function () {
                // 버튼 클릭 시 해당 할 일을 제거하는 이벤트 리스너를 등록
                // : forEach 반복으로 해당 삭제 버튼에 각 요소의 id가 담겨있음
                _this.removeTask(task.id);
            };
            //? 완료 체크박스 추가
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            // 체크박스의 상태를 task 할 일의 completed 속성값으로 지정
            checkbox.checked = task.completed;
            checkbox.onchange = function () {
                // 체크박스 상태 변경 시 할 일의 완료 상태를 업데이트
                task.completed = !task.completed;
                // 할 일 목록을 다시 렌더링
                _this.renderTasks(containerId);
            };
            if (task.completed) {
                // 할 일 완료 시 스타일 변경
                li.style.textDecoration = 'line-through';
            }
            // JS로 생성된 DOM 요소를 HTML에 추가하기 위해서는
            // : 생성되어있는 HTML의 하위 요소로 전달(appendChild)
            // - 삭제 버튼을 목록 항목에 추가
            li.appendChild(deleteButton);
            // - 체크박스 목록 항목의 맨 앞에 추가
            // : li 태그 내에 text(내용), button(삭제버튼) 중에서 첫 번째 요소인 text 앞에 체크박스 삽입
            li.insertBefore(checkbox, li.firstChild);
            // - 완성된 목록 항목을 컨테이너(HTML의 ul태그)에 추가
            container.appendChild(li);
        });
        //? 할 일 개수를 업데이트
        this.updateTaskCount();
    };
    //? 할 일 목록이 변경될 때마다 할 일의 개수를 업데이트하는 로직
    TaskManager.prototype.updateTaskCount = function () {
        var countElement = document.getElementById('task-count');
        if (countElement) {
            countElement.textContent = "\uD560 \uC77C \uAC1C\uC218: ".concat(this.tasks.length);
        }
    };
    return TaskManager;
}());
// 웹 페이지가 모두 로드되었을 때 실행될 함수
window.onload = function () {
    // '문자열 타입'의 할 일 관리자 인스턴스를 생성
    var taskManager = new TaskManager();
    // 'add-task' ID 요소를 선택(할 일 추가 버튼)
    var addButton = document.getElementById('add-task');
    // 'new-task' ID 요소를 선택(할 일 입력 필드)
    var newTaskInput = document.getElementById('new-task');
    var taskList = document.getElementById('task-list');
    // 할 일 추가 버튼 클릭 시 실행될 이벤트 리스너
    addButton.onclick = function () {
        //? 입력 값이 비어있지 않은 경우에만 input 입력 필드의 값을 할 일로 추가
        if (newTaskInput.value.trim() !== '') {
            // 입력 필드의 값(value)을 할 일로 추가
            taskManager.addTask(newTaskInput.value);
            // 변경될 할 일 목록을 화면에 렌더링
            taskManager.renderTasks('task-list');
            // 할 일을 추가한 후, 입력 필드 초기화
            newTaskInput.value = '';
        }
    };
};
// html파일에 ts코드를 연결하기 위해서는
// : tsc(typescript compiler)를 사용하여 js 파일로 컴파일한 후 연결
