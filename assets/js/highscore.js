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

for (let index = 0; index < myData.length; index++) {
    
  
    console.log(myData[index].initials)

    console.log(myData[index].score);

    console.log('=========')
    
}