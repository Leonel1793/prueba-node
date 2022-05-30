function agregarHttp(url) {
     return 'http://' + url;

}

function procesar(array,callback){
    let finalArray=[];
    for (let i=0; i<array.length;i++){
        finalArray.push(callback(array[i]));
    }
    return finalArray;
}

console.log(procesar(["www.google.com", "www.yahoo.com"], agregarHttp));

