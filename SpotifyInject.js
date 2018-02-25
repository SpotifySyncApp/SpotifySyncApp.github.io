if (window.location.hash != "") {
    
console.log("Injected.");    

    setTimeout(function(){


var hashList = JSON.parse(window.location.hash.split("#")[1]);

var lengthdisplay = document.getElementsByClassName("tracklist")[0].children[hashList[2] - 1].children[0].children[3].children[0].children[0].firstChild.data.split(":");

    document.getElementsByClassName("tracklist")[0].children[hashList[2] - 1].children[0].children[0].children[0].click();

    setTimeout(function() {

        hashList.splice(2, 1);
        hashList[1] = hashList[1] + 1;
        var googleDoc = "https://docs.google.com/document/d/1ALdpfTWjwJUy8UaaQ93DZKxU8067V9G6CwyR0Fw1d2Q/edit#" + JSON.stringify(hashList);

        window.location = googleDoc;
    }, (JSON.parse(lengthdisplay[0]) * 60000 + JSON.parse(lengthdisplay[1]) * 1000 + 1500));

    }, 5000);
}
