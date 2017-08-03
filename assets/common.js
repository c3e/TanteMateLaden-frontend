const app = {
    module: (a, b) => {
        app.config.debug ? console.log("Running module: " + a) : undefined;
        b(app.config);
    },
    ready: a => $(document).ready(a)
};
const modulize = app.module;
$.getJSON("/app.json", data => {
    app.config = data;
    modulize("sideNav", () => $(".button-collapse").sideNav());
})
if (!Cookies.get("token") && window.location.pathname != "/login.html") {
    window.location = "/login.html";
}
$("#logout").click(() => {
    Cookies.set("token", "");
    Cookies.set("expire", "");
    window.location = "/login.html";
});