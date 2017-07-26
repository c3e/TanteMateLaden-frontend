(() => {
    $.getJSON("/app.json", settings => {
        console.log(settings);
    });
})();