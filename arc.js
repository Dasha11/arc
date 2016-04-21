document.addEventListener("DOMContentLoaded",
function(){
new Vue({
	el:"#game",
	data:function(){
		return{ballx:0,
		bally:0,
		boardPosition:200,
		boardWidth:100,
		fieldWidth:600,
		fieldHeigth:400,
		step:25,
		interval:10,
		dirx:1,
		diry:1,
		intervalId:null,
		ballWigth:50,
		ballHeigth:50,
		boardHeigth:20
		}
		
	},
	methods: {
		onMouse: function(e){
			this.boardPosition=e.clientX-(this.boardWidth/2);
			if(this.boardPosition<0){
				this.boardPosition=0;
			}
			if(this.boardWidth+this.boardPosition>this.fieldWidth)
				this.boardPosition=this.fieldWidth-this.boardWidth;
	
	},	
	onClick: function(){
		var self=this;
		if(this.intervalId==null){
			this.intervalId=setInterval(function(){
				self.ballx+=self.step*self.dirx;
				self.bally+=self.step*self.diry;
				if(self.ballx>=self.fieldWidth-self.ballWigth||self.ballx<=0){
					self.dirx=self.dirx*(-1);
				}if(self.bally<=0){
					self.diry=self.diry*(-1);
				}if(self.bally>=self.fieldHeigth-self.ballHeigth){
					var ballPosition=self.ballx+self.ballWigth/2;
					if(ballPosition>=self.boardPosition && ballPosition<=self.boardWidth+self.boardPosition){
						self.diry=self.diry*(-1);
					}else{
						clearInterval(self.intervalId);
					}
				}
			},200)
		}
	}
		}
	});
	
});
