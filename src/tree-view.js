export function renderTree(json, container) {
  // Clear the container only on the first render
  if (!container.querySelector("ul")) {
    container.innerHTML = ""; // Clear the container
    const ul = createTree(json);
    container.appendChild(ul);
  }
}

function createTree(obj) {
  const ul = document.createElement("ul");

  for (const key in obj) {
    const li = document.createElement("li");
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      const span = document.createElement("span");
      span.textContent = `▶ ${key}`; // Default arrow for collapsed state
      span.style.cursor = "pointer";
      span.style.color = "#007BFF";

      const childrenUl = createTree(value);
      childrenUl.style.display = "none"; // Initially hide child nodes

      // Toggle functionality
      span.addEventListener("click", () => {
        const isCollapsed = childrenUl.style.display === "none";
        childrenUl.style.display = isCollapsed ? "block" : "none";
        span.textContent = `${isCollapsed ? "▼" : "▶"} ${key}`; // Update arrow
      });

      li.appendChild(span);
      li.appendChild(childrenUl);
    } else {
      li.textContent = `${key}: ${value}`;
    }

    ul.appendChild(li);
  }

  return ul;
}

