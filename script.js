document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function() {
        alert(`Anda mengklik: ${this.textContent}`);
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var error = '';

    if (name === '') {
        error += 'Nama harus diisi.\n';
    }
    if (email === '') {
        error += 'Email harus diisi.\n';
    } else if (!validateEmail(email)) {
        error += 'Email tidak valid.\n';
    }
    if (message === '') {
        error += 'Pesan harus diisi.\n';
    }
    if (error === '') {
        alert('Form berhasil dikirim!');
        this.submit();
    } else {
        alert(error);
    }
});

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.scroll-animation');
    window.addEventListener('scroll', checkElementsInView);

    function checkElementsInView() {
        const triggerBottom = window.innerHeight * 0.8;
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    }

    checkElementsInView();
});

var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

document.getElementById('searchBar').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        alert('Still Under Development');
    }
});
