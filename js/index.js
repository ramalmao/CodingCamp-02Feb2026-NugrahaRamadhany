// Temporary storage for todo items
let todos = [];

// Function to add a new todo item
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    // Simple validation to check if inputs are filled (both of them)
    if (todoInput.value.trim() === '' || todoDate.value === '') {
        alert('Please enter both a todo item and a due date.');
    } else {
        // Create a new todo object
        const newTodo = {
            todo: todoInput.value.trim(),
            date: todoDate.value
        };
        // Add the new todo to the todos array
        todos.push(newTodo);

        // Clear input fields after adding
        todoInput.value = '';
        todoDate.value = '';

        // Render the updated todo list
        renderTodos();
    }
}

/// Function to render todo items to the DOM
function renderTodos() {
    const todoList = document.getElementById('todo-list');

    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach((item, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${item.todo} <span class="text-sm text-gray-500">(${item.date})</span></p>
            <hr />
        </li>`;
    });
}


// Function to delete all todo items
function deleteAllTodos() {
    todos = [];
    renderTodos();
}

// Function to filter todos by selected month and year
function filterTodosByMonth() {
    const filterMonth = document.getElementById('filter-month');
    
    // Validate if a month is selected
    if (filterMonth.value === '') {
        alert('Please select a month and year to filter by.');
        return;
    }
    
    // Filter todos by the selected month and year (YYYY-MM format)
    const filteredTodos = todos.filter(item => {
        // Extract YYYY-MM from the stored date (YYYY-MM-DD format)
        const itemMonthYear = item.date.substring(0, 7);
        return itemMonthYear === filterMonth.value;
    });
    
    // Display filtered results
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    
    if (filteredTodos.length === 0) {
        todoList.innerHTML = '<li>No tasks available for this month</li>';
    } else {
        filteredTodos.forEach((item) => {
            todoList.innerHTML += `
            <li>
                <p class="text-2xl">${item.todo} <span class="text-sm text-gray-500">(${item.date})</span></p>
                <hr />
            </li>`;
        });
    }
}

// Function to show all todos
function showAllTodos() {
    renderTodos();
}