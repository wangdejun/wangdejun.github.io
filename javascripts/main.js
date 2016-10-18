// nums = [-1,-2,-3,-4,-5], target = -8;

var twoSum = function(nums, target){
	let arr = [];
    for(let i=0;i<nums.length-1;i++){
    	console.log("======")
    	console.log(i);
    	console.log("======")
    	console.log('\n')
    	for(let k=i+1;k<nums.length;k++){
    		console.log('i----->')
    		console.log(i)
    		console.log('k----->')
    		console.log(k)
    		if(nums[i]+nums[k]==target){
    			arr = [i,k];
    			return arr;
    		}
    	}
    }
};

// console.log(twoSum(nums,target))



nums = [-1,-2,-3,-4,-5], target = -8;

var twoSum = function(nums, target){
	let arr = [];
    for(let i=0;i<nums.length-1;i++){
    	let num = target-nums[i];
    	for(let k=i+1;k<nums.length;k++){
    		if(nums[k]==num){
    			arr = [i,k];
    			return arr;
    		}
    	}
    }
};

// console.log(twoSum(nums,target))


// var twoSum = function(nums, target){
// 	nums.map((num)=>{
// 		return num;
// 	})
// };




var twoSum = function(nums, target) {
    const map = {}

    for (var i=0; i<nums.length; i++){
        var diff = target - nums[i]
        var diff_i = map[diff]
        if (diff_i !== undefined && diff_i !== i) {
            return [diff_i, i]
        }
        map[nums[i]] = i
    }
    return []
};


console.log(twoSum(nums,target))






