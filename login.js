var DB = [
    {
        username : 'admin',
        password : '2546'
    }
];

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (i = 0; i < DB.length;i++){
        if (username == DB[i].username && password == DB[i].password) {
            window.location.href = '01.html';
        }else {
            window.location.href = 'login copy.html';
        }  
    }
    return false;
}