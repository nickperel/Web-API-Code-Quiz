function getAllSavedData() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( {
            initials: keys[i],
            score: localStorage.getItem(keys[i]) 
        });
    }

    return values;
}

var myData = getAllSavedData();
console.log(myData);

function showHighscore() {

    var list = document.getElementById("highscore-list");
    for (let index = 0; index < myData.length; index++) {
    
        var highscore = document.createElement("p");
        highscore.textContent = myData[index].initials + ": " + myData[index].score;
        list.appendChild(highscore);

        console.log(myData[index].initials)

        console.log(myData[index].score);

        console.log('=========')
    
    }

    var backBtn = document.createElement("button");
    backBtn.textContent = "Go Back";
    backBtn.addEventListener("click", function() {
        location.href="index.html"

    })
    list.appendChild(backBtn);

    var resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset Highscores";
    resetBtn.addEventListener("click", function() {
        window.localStorage.clear()
        location.href="highscore.html"

    })
    list.appendChild(resetBtn);

    
}

showHighscore();