app.ready(() => {
    $("#btn").click(() => {
        const data = {
            username: $("#username").val(),
            password: $("#password").val()
        };
        $.post(app.config.api.host + "/login", JSON.stringify(data), token => {
            Cookies.set("token", token.token);
            Cookies.set("expire", token.expire);
            window.location = "/account.html";
        }, "json").fail(() => Materialize.toast("An error occoured while issuing the request!"));
    });
    $("#reg").click(() => {
        const data = {
            username: $("#username").val(),
            pin: $("#password").val()
        };
        $.post(app.config.api.host + "/users", data, message => {
            Materialize.toast(message.message);
        });
    });
});