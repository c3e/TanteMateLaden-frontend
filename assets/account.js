app.ready(() => {
    $.ajax({
        url: app.config.api.host + "/user",
        beforeSend: xhr => xhr.setRequestHeader("Authorization", "Bearer " + Cookies.get("token")),
        success: user => {
            $("#user").append("<tr><td>Username</td><td>" + user.username + "</td></tr>");
            $("#user").append("<tr><td>Pin</td><td>" + user.pin + "</td></tr>")
            $("#user").append("<tr><td>Balance</td><td>" + user.balance + "</td></tr>");
        }
    });
    $("#del").click(() => {
        if (confirm("Are you sure?")) {
            $.ajax({
                url: app.config.api.host + "/user/delete",
                beforeSend: xhr => {
                    xhr.setRequestHeader("Authorization", "Bearer " + Cookies.get("token"))
                },
                success: () => {
                    Cookies.set("token", "");
                    Cookies.set("expire", "");
                    window.location = "/login.html";
                }
            });
        }
    })
});