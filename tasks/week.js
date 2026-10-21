var movies = [];

function add() {
    var nameVal = document.getElementById("name").value;
    var rateVal = document.getElementById("rating").value;
    if (nameVal && rateVal) {
        movies.push({ name: nameVal, rating: rateVal });
        document.getElementById("name").value = "";
        document.getElementById("rating").value = "";
        
        show();
    }
}

function show() {
    var list = document.getElementById("list");
    list.innerHTML = "";

    for (var i = 0; i < movies.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = movies[i].name + " [" + movies[i].rating + "] " +
            "<button onclick='edit(" + i + ")'>Edit</button> " +
            "<button onclick='del(" + i + ")'>Delete</button>";
        list.appendChild(li);
    }
}

function edit(i) {
    movies[i].name = prompt("New Name:", movies[i].name);
    movies[i].rating = prompt("New Rating:", movies[i].rating);
    show();
}

function del(i) {
    movies.splice(i, 1);
    show();
}
