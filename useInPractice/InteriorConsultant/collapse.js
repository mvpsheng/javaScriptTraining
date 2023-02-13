const toggle = document.querySelector('#toggle');

const ul = document.querySelector('#meli');

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    let computeStyle = getComputedStyle(ul);

    if (computeStyle.display != 'none') {
        ul.style.display = 'none';
        toggle.classList.remove('active');
    } else {
        ul.style.display = 'block';
        toggle.classList.add('active');
    }
})