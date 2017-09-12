function clone(obj1,obj2) {
    var obj = {};
    for (var key1 in obj1) {
        obj[key1] = obj1[key1];
    }
    for(var key2 in obj2) {
        if(obj2[key2] instanceof Object && obj[key2] instanceof  Object) {
            for(var key3 in obj2[key2]) {
                obj[key2][key3] = obj2[key2][key3]
            }
        } else {
            obj[key2] = obj2[key2];
        }
    }
    return obj;
}
console.log(clone(
    { name: "John", location:{city: "Boston",county:"USA"} },
    { last: "Resig", location: {state: "MA",county:"China"} }
))