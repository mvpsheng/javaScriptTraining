for (let node of document.body.children) {
    alert(node); // shows all nodes from the collection
  }
document.body.children[0].textContent = "username:"
document.body.children[1].firstElementChild.textContent = "username:"
document.body.children[1].lastElementChild.textContent = "username:"

document.body.children[1].previousElementSibling.textContent = "username1:"
document.body.children[1].nextElementSibling.textContent = "username2:"