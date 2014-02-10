var globalAvatarImage = new Image();
var globalEnemyImage = new Image();
globalAvatarImage.src = "img/avatar.png";
globalEnemyImage.src = "img/enemy.png";

function drawAvatar() {
	var gameCanvas = document.getElementById("gameCanvas");
	var avatarImage = globalAvatarImage;
	var enemyImage = globalEnemyImage;
	

	gameCanvas.getContext("2d").drawImage(avatarImage, Math.random() * 100, Math.random() * 100);
	
	
	gameCanvas.addEventListener("mousemove", redrawAvatar);
}
	
	function redrawAvatar(mouseEvent)
	{
		var avatarImage = globalAvatarImage;
		var enemyImage = globalEnemyImage;
		var gameCanvas = document.getElementById("gameCanvas");
		
		
		gameCanvas.width = 600; // This erases the contents of the canvas 
		
		gameCanvas.getContext("2d").drawImage(avatarImage, mouseEvent.offsetX, mouseEvent.offsetY);
		gameCanvas.getContext("2d").drawImage(enemyImage, 200, 200);
		
		if(mouseEvent.offsetX <215 && mouseEvent.offsetX > 185 && mouseEvent.offsetY <215 && mouseEvent.offsetY > 185 ) alert("Too far left");
		
		}
