if (document.title == "Emberwood Music - Google Docs" && window.location.hash != "") {

    console.log("Injected.");

    setTimeout(function(){

    var newAlbum = "Empty";
    newAlbum = document.getElementsByClassName("kix-lineview")[JSON.parse(window.location.hash.split("#")[1])[1]].innerText.slice(0, -1);

    if (newAlbum == "Empty") {
        window.location = "https://docs.google.com/document/d/1ALdpfTWjwJUy8UaaQ93DZKxU8067V9G6CwyR0Fw1d2Q/edit";
    }

    var check = function() {
        if (document.getElementsByClassName("docs-presence-plus-widget-collabs goog-inline-block")[0].children.length >= JSON.parse(window.location.hash.split("#")[1])[0]) {
            setTimeout(function() {
                window.location = newAlbum + window.location.hash;
            }, 15000);

        } else {
    console.log("again");
            setTimeout(check, 500);
        }
    }

    check();

    },5000);

}
