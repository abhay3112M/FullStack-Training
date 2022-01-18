var allLocalBook = [];
var keys = Object.keys(localStorage);
var i = keys.length;
while ( i-- ) {
    allLocalBook.push(JSON.parse(localStorage.getItem(keys[i])));
}
    //console.log(allBookAndLocal);
export default allLocalBook;