var database = firebase.database();

console.log(database);

// database.ref().on("value", function (snapshot) {
//     console.log(snapshot.val())
// });

// database.ref().set({
//     "fast": "barely"
// })

// database.ref("bio/").set({
//     "name": "josh",
//     "age": 100
// });

$("#confirm").click(function () {
    var name = $("#name-input").val().trim();
    var age = $("#age-input").val().trim();
    database.ref("bio/").set({
        "name": name,
        "age": age
    });
});

database.ref().on("value", function (snapshot) {
    var name = snapshot.val().bio.name;
    var age = snapshot.val().bio.age;

    $("#name").text("Name: " + name);
    $("#age").text("Age: " + age);
});