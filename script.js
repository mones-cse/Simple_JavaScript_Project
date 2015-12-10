function submitAnswer(){
var arr =[];
var length =5;
//take input	
for(var i = 1;i<=length;i++){
	 arr[i]= document.forms["quizeForm"]['q'+i].value;
}
//validation 	
for(var i = 1;i<=length;i++){
	 if(arr[i]==null||arr[i]==''){
	 	alert('you miss question '+i);
		 return false;
	 }
}
//result
	var answer =['a','a','a','d','a'];
	var score =0;
	for(var i = 1;i<=length;i++){
		console.log("input is "+arr[i]+" answer is "+answer[i-1]);
		if(arr[i]==answer[i-1]){
			score=score+1;
		}
	}
	

	//display result 
	var result = document.getElementById('result');
	console.log(result);
	result.innerHTML='<h3>got <span>'+score+' out of <span>'+length+' <h3>';
	
//alert(arr[1]+' '+arr[2]+' '+arr[3]+' '+arr[4]+' '+arr[5]);	
alert("got "+score+" out of "+length);
return false;
}


