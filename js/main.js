const choices = document.querySelectorAll('.project-choice');
const features = document.querySelectorAll('.featured-project');

function show(id) {
    choices.forEach(c => {
        const on = c.dataset.project === id;
        c.classList.toggle('selected', on);
        c.setAttribute('aria-selected', on);
    });
    features.forEach(f => f.classList.toggle('active', f.id === id));
}

choices.forEach(c => c.addEventListener('click', e => {
    e.preventDefault();
    show(c.dataset.project);
}));

const initial = [...features].find(f => '#' + f.id === location.hash);
show(initial ? initial.id : features[0].id);

document.getElementById('year').textContent = new Date().getFullYear();
