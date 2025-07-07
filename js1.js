const button = document.querySelectorAll('.power_ranger')
const body = document.querySelector('body')
button.forEach(function (item) {
    item.addEventListener('click', function (e) {
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    });
});

button.forEach(function (item2) {
    item2.addEventListener('click', function (e) {
        if (e.target.id === 'red') {
           item2.innerHTML = 'clicked'
        }
        if (e.target.id === 'blue') {
           item2.innerHTML = 'clicked'
        }
        if (e.target.id === 'orange') {
        item2.innerHTML = 'clicked'
        }
        if (e.target.id === 'purple') {
          item2.innerHTML = 'clicked'
        }
    });
});