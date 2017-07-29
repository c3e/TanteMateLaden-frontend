const app = {
    module: (a, b) => {
        app.config.debug ? console.log("Running module: " + a) : undefined;
        b(app.config);
    }
};
const modulize = app.module;
$.getJSON("/manifest.json", data => {
    app.config = data;
    modulize("sideNav", () => $(".button-collapse").sideNav());
});