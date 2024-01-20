const URL = "http://localhost:9000/users";

axios.get(URL)
    .then((res) => console.log(res.data));

function myFunction() {
    let x = document.getElementById("loginPassword");
    let show_and_hide = document.querySelector('.show_and_hide')

    if (x.type === "password") {
        x.type = "text";
        show_and_hide.innerHTML = 'Hide Password'
    } else {
        x.type = "password";
        show_and_hide.innerHTML = 'Show Password'
    }
}

function checkLogin() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    const enteredUsername = document.getElementById('loginUsername').value;
    const enteredPassword = document.getElementById('loginPassword').value;

    if (savedUsername === enteredUsername && savedPassword === enteredPassword) {
        alert('Success');
    } else {
        alert('Not success');
    }
}

// regex

let form = document.forms.login
let inps = document.querySelectorAll('input')

let patterns = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
}

inps.forEach(inp => {
    let parent = inp.parentElement

    inp.onkeyup = () => {
        if (patterns[inp.name].test(inp.value)) {
            parent.classList.remove('error-field')
        } else {
            parent.classList.add('error-field')
        }
    }
})

form.onsubmit = (e) => {
    e.preventDefault();
    let isError = false

    inps.forEach(inp => {
        let parent = inp.parentElement

        if (inp.value.length === 0 && parent.classList.contains('required') || parent.classList.contains('error-field')) {
            parent.classList.add('error-field')
            isError = true
        } else {
            parent.classList.remove('error-field')
        }
    })

    if (isError) {
        alert('Error')
    } else {
        submit()
    }
}

function submit() {
    let fm = new FormData(form)

    let user = {
        email: fm.get('email'),
        password: fm.get('password'),
    }

    console.log(user);
}
