var database = firebase.database();

$("button").on("click", function (event) {
    event.preventDefault();
    // collect all the data from the form
    var name = $("#nameInput").val();
    var role = $("#roleInput").val();
    var date = $("#dateInput").val();
    var rate = $("#rateInput").val();

    // clear these fields
    $("#nameInput").val("");
    $("#roleInput").val("");
    $("#dateInput").val("");
    $("#rateInput").val("");

    console.log(name, role, date, rate);

    // var now = moment(new Date()); //todays date
    // var end = moment("2015-12-1"); // another date
    // var duration = moment.duration(now.diff(end));
    // var months = duration.asMonths();
    // console.log(months);

    // push to the database
    database.ref().push({
        name, role, date, rate
    });

    database.ref().on("child_added", function (snapshot) {
        var data = snapshot.val();
        var monthsDiff = moment().diff(moment(data.date), "months");
        $("tbody").append(
            `<tr>
                <td>${data.name}</td>
                <td>${data.role}</td>
                <td>${data.date}</td>
                <td>${monthsDiff}</td>
                <td>${data.rate}</td>
                <td>${monthsDiff * data.rate}</td>
            </tr>`
        );
    })
})