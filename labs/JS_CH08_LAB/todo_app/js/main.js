'use strict';

let nextNum = 1;

const saveTasks = () => {
  if (!localStorage) {
    console.error('localStorage not supported!');
    return;
  }

  const tasks = [];
  $('#taskList .task:not(.taskPlaceholder)').each((index, element) => {
    // if (!$(element).hasClass('taskPlaceholder')) {}
    const num = $(element).data('taskNum');
    const name = $(element).data('taskName');
    tasks.push({ num, name });
  });
  console.log('save', tasks);

  // localStorage.clear();
  localStorage.setItem('nextNum', nextNum);
  // localStorage.setItem('tasks.length', tasks.length);
  // for (let i = 0; i < tasks.length; ++i) {
  //   localStorage.setItem(`tasks[${i}].num`, tasks[i].num);
  //   localStorage.setItem(`tasks[${i}].name`, tasks[i].name);
  // }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addPlaceholderTask = () => {
  if ($('#taskList .task').length === 0) {
    $('#taskList').append(`
       <li class="task taskPlaceholder">No tasks added yet</li>
    `);
  }
};

const addTask = (newTask) => {
  $('#taskList .taskPlaceholder').remove();

  const num = nextNum;
  const taskElement = $(`
    <li class="task d-flex justify-content-between align-items-center mb-2"
        data-task-num="${num}"
        data-task-name="${newTask}" 
        id="task-${num}">
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="${newTask}">
          ${newTask}
        </label>
      </div>
      <button id="taskDelete-${num}" type="button" class="btn btn-outline-danger btn-sm deleteTaskBtn">
        Delete
      </button>
    </li>
  `);

  taskElement.find('.deleteTaskBtn').on('click', (evt) => {
    evt.preventDefault();
    // $(evt.currentTarget).closest('.task').remove();
    taskElement.remove();
    addPlaceholderTask();
    saveTasks();
  });

  $('#taskList').append(taskElement);

  ++nextNum;
};

const loadTasks = () => {
  if (!localStorage) {
    console.error('localStorage not supported!');
    return;
  }

  nextNum = parseInt(localStorage.getItem('nextNum')) || 1;

  // const tasksLength = parseInt(localStorage.getItem('tasks.length')) || 0;
  // const tasks = new Array(tasksLength);
  // for (let i = 0; i < tasksLength; ++i) {
  //   const num = localStorage.getItem(`tasks[${i}].num`);
  //   const name = localStorage.getItem(`tasks[${i}].name`);
  //   tasks[i] = { num, name };
  // }
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  console.log('load', tasks);

  if (tasks) {
    for (let i = 0; i < tasks.length; ++i) {
      addTask(tasks[i].name);
    }
  }
};

$(() => {

  loadTasks();

  $('#addTaskButton').on('click', (evt) => {
    evt.preventDefault();

    const newTask = $('#addTaskName').val();
    if (!newTask) {
      $('#addTaskError').text('Please enter your task name.');
    } else {
      $('#addTaskError').text('');
      addTask(newTask);
      saveTasks();
    }

    $('#addTaskName').val('').focus();
  });

  $('#removeTasksButton').on('click', (evt) => {
    evt.preventDefault();

    // $('#taskList .task :checked').closest('.task').remove();
    $('#taskList .task:has(:checked)').remove();

    addPlaceholderTask();
    saveTasks();
  });

});

// Do not use!!
// $(document).ready(() => {
//   console.log('ready');
// });
