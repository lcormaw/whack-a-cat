var clickedTime; var createdTime; var reactionTime; var bestTime=1000000;

function makeBox() {

	var time=Math.random()*5000;

	setTimeout(function() {

		var top=Math.random()*600; var left=Math.random()*900
		
		document.getElementById("box").style.top=top+"px";
		
		document.getElementById("box").style.left=left+"px";
		
		document.getElementById("box").style.display="block";
		
		createdTime=Date.now();

	}, time); // time is in milliseconds

}

document.getElementById("box").onclick=function() {

	clickedTime=Date.now();
	
	reactionTime=(clickedTime-createdTime)/1000; // time in seconds
	
	document.getElementById("time").innerHTML=reactionTime+" seconds";
	
	if (reactionTime<bestTime) {
		bestTime=reactionTime;
		document.getElementById("best-time").innerHTML=bestTime+" seconds";
	}
	
	this.style.display="none";
	
	makeBox();

}

makeBox();