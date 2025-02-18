function mincost(arr)
{ 
	if(arr.length<=1)
		return 0;
	arr.sort((a,b) => a-b);

	let total=0;
	while(arr.length>1)
		{
			const first = arr.shift();
			const second = arr.shift();
			const cost = first+second;
				total = total+cost;
			arr.push(cost);
			arr.sort((a,b)=>a-b);
		}
//write your code here
// return the min cost
	return total;
  
}

module.exports=mincost;
