function taskw() {
  event.preventDefault();
  const task = document.getElementsByClassName("task")[0];
  const mai = task.value.trim();

  if (mai == "") {
    alert("enter something");
    return;
  }
  let t = document.createElement("li");
  t.textContent = mai;

  const enter = document.getElementsByClassName("List")[0];
  enter.append(t);

  const d = document.createElement("button");
  d.textContent = "delete";
  t.append(d);

  
  d.onclick = () => t.remove();

  task.value = "";
}
