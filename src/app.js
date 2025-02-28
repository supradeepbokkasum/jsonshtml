import { renderTree } from "./tree-view.js";

document.addEventListener('DOMContentLoaded', () => {
  const jsonInput = document.getElementById('json-input');
  const validateButton = document.getElementById('validate-button');
  const treeContainer = document.getElementById('tree-container');

  validateButton.addEventListener('click', () => {
    const jsonText = jsonInput.value;
    treeContainer.innerHTML = ''; // Clear previous tree view
    try {
      const jsonData = JSON.parse(jsonText);
      renderTree(jsonData, treeContainer);
    } catch (error) {
      alert('Invalid JSON');
    }
  });
});

