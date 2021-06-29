let counter = 0;
for(min=134564;min<=585159;min++){
 //var min =134567;
	var t = min.toString().split('');
  	var bner = t.map((element,index,array)=>{
    	return (element >= array[index == 0 ? 0 : index-1]) 
      			&& 
          	   (element <= array[index == array.length-1 ? array.length-1 : index+1]);
    });
      var op = t.some(function(v,i,a){
       return a.lastIndexOf(v)!=i;
     	});
    if(bner.indexOf(false) == -1 && op){counter++}
}
console.log(counter)



///par two

let counter = 0;
for(min=134564;min<=585159;min++){
 //var min =134567;
	var t = min.toString().split('');
  	var bner = t.map((element,index,array)=>{
    	return (element >= array[index == 0 ? 0 : index-1]) 
      			&& 
          	   (element <= array[index == array.length-1 ? array.length-1 : index+1]);
    });
    var op = t.some(function(v,i,a){
      return a.lastIndexOf(v)!=i;
    });
    const counts = {};
    t.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    var dataArray = [];
    for(var o in counts) {
        dataArray.push(counts[o]);
    }
    if(bner.indexOf(false) == -1 && op && dataArray.indexOf(2) != -1){counter++}
}
console.log(counter)