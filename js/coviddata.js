function loadCovidData() {
    getCSV(function(contents) {
        console.log(contents)
    })
}

function getCSV(func) {
    var file = 'https://covid19.who.int/who-data/vaccination-data.csv';
    var rawFile = new XMLHttpRequest();
    var allText;

    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4)
            if(rawFile.status === 200 || rawFile.status == 0)
                allText = rawFile.responseText;
                if(func!=undefined && typeof(func) == "function"){
                    func(allText);
                 }
    };

    rawFile.send();


}