'use strict'
var _ = require('underscore')

var spin = ()=> {
        var drum = []
	for(var i = 1; i < 42; i++){
             drum.push(i)
	}

	var spin =  [];
	for(var i = 0; i < 6; i++){
	var index = Math.floor(Math.random() * (drum.length-1)+1)
		spin.push(drum[index])
		drum.splice(index,1)
	}
	return spin	
}


var lottery = ()=> {
	var ticket = spin().sort((a,b) => a -b)
        console.log(ticket)	
	for(var i = 0; i < 100000006; i++){
		var sp = spin().sort((a,b) => a -b)
		if(_.isEqual( ticket , sp)){
			console.log('spin ' + i + ' ' + sp)
			return true
		}
	}
}

console.log(lottery())





