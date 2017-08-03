app.ready(() => {
    console.log("Fetching drinks from API");
    $.getJSON(app.config.api.host + "/drinks", data => {
        $.each(data, (i, drink) => {
            $("#drinks").append('<div class="col s12 m6"><div style="cursor: pointer;" id="' + drink.slug + '" class="drink card-panel red lighten-2 hoverable white-text flow-text">' + drink.name + ' - ' + drink.price + '€</div></div>')
        });
        $(".drink").click(function () {
            if (confirm("Are you sure you want to buy this drink?")) {
                $.ajax({
                    url: app.config.api.host + "/drinks/buy/" + $(this).prop("id"),
                    beforeSend: xhr => xhr.setRequestHeader("Authorization", "Bearer " + Cookies.get("token")),
                    success: user => {
                        Materialize.toast("Your new balance: " + user.balance + "€")
                    }
                });
            }
        });
        $(".balance").click(function() {
            const val = {
                "amount": $(this).text().slice(0, -1)
            };
            
        });
    });
});