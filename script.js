// Get the containers and items
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const items = document.querySelectorAll('.item');
const resetButton = document.getElementById('resetButton');

// Add event listeners for drag and drop
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);

// Store the dragged item
let draggedItem = null;

// Drag Start
function dragStart() {
  draggedItem = this;
  this.classList.add('dragging');
}

// Drag End
function dragEnd() {
  this.classList.remove('dragging');
}

// Drag Over
function dragOver(e) {
  e.preventDefault();
}

// Drag Enter
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

// Drag Leave
function dragLeave() {
  this.classList.remove('hovered');
}

// Drop
function drop() {
  this.classList.remove('hovered');
  this.appendChild(draggedItem);
  // Display a success message
  const successMessage = document.createElement('p');
  successMessage.classList.add('success-message');
  successMessage.textContent = 'Item dropped successfully!';
  this.appendChild(successMessage);
}

// Reset Button
resetButton.addEventListener('click', resetContainers);

// Reset Containers
function resetContainers() {
  container1.innerHTML = `
    <div class="item" draggable="true">
      <p>Item 1</p>
    </div>
    <div class="item" draggable="true">
      <p>Item 2</p>
    </div>
    <div class="item" draggable="true">
      <p>Item 3</p>
    </div>
  `;
  container2.innerHTML = '';
}
