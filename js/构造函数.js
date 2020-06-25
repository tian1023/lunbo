function lcSwiper(selector, imgList) {
	var rotationDiv = document.querySelector(selector);

	function creatImg(imgList) {
		var imgListDiv = document.createElement("div");
		var circleListDiv = document.createElement("div");
		imgListDiv.className = "imgList";
		circleListDiv.className = "circleList";
		imgList.forEach(function(item, i) {
			if(i == 0) {
				imgListDiv.innerHTML += '<img src=' + item + ' class="imgItem active" />'
				circleListDiv.innerHTML += '<div id="c' + i + '" class="circle active"></div>'
			} else {
				imgListDiv.innerHTML += '<img src=' + item + ' class="imgItem" />'
				circleListDiv.innerHTML += '<div id="c' + i + '" class="circle"></div>'
			}

		})
		rotationDiv.appendChild(imgListDiv);
		rotationDiv.appendChild(circleListDiv);
		rotationDiv.innerHTML += `
		<button class="pre"><</button>
		<button class="next">></button>
		`
	}
	creatImg(imgList);

	this.preBtn = document.querySelector(selector+" .pre");
	this.nextBtn = document.querySelector(selector+" .next");
	this.imgLists = document.querySelectorAll(selector+" .imgItem");
	this.circleLists = document.querySelectorAll(selector+" .circle");
	this.imgIndex = 0;
	var that = this;
	
	this.preBtn.onclick = function() {
		that.back();
	}
	this.nextBtn.onclick = function() {
		that.forword();
	}
	this.circleLists.forEach(function(item, i) {
		item.onclick = function() {
			that.go(i);
		}
	})
}

lcSwiper.prototype.render = function(){
		this.imgLists.forEach(function(item, i) {
			item.classList.remove("active")
		})
		this.circleLists.forEach(function(item, i) {
			item.classList.remove("active")
		})
		
		this.imgLists[this.imgIndex].classList.add("active")
		this.circleLists[this.imgIndex].classList.add("active")
}
lcSwiper.prototype.go = function(i){
	this.imgIndex = i; 
	this.render();
}
lcSwiper.prototype.forword = function(){
		this.imgIndex = this.imgIndex + 1;
		if(this.imgIndex >= this.imgLists.length) {
			this.imgIndex = 0;
		}
		this.render();	
}
lcSwiper.prototype.back = function(){
		this.imgIndex = this.imgIndex - 1;
		if(this.imgIndex < 0) {
			this.imgIndex = this.imgLists.length - 1;
		}
		this.render();	
}
