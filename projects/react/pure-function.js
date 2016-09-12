/**
 * Pure Function
 * /

function sqare(x){
	return x*x
}

function squareAll(items){
	return items.map(squares);
}

/**
 * Not a Pure Function
 * /
function square(x){
	updateXInDatabase(x);
	return x*x;
}

function squareAll(items){
	for(let i=0;i<items.length;i++){
		items[i]=square(items[i]);
	}
}
