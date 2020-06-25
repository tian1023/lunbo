function rotation(selector, imgList) {
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

	var preBtn = document.querySelector(selector+" .pre");
	var nextBtn = document.querySelector(selector+" .next");
	var imgLists = document.querySelectorAll(selector+" .imgItem");
	var circleLists = document.querySelectorAll(selector+" .circle");
	var imgIndex = 0;
	
	preBtn.onclick = function() {
		imgIndex = imgIndex - 1;
		if(imgIndex < 0) {
			imgIndex = imgLists.length - 1;
		}
		render();
	}
	nextBtn.onclick = function() {
		imgIndex = imgIndex + 1;
		if(imgIndex >= imgLists.length) {
			imgIndex = 0;
		}
		render();
	}

	function render() {
		imgLists.forEach(function(item, i) {
			item.classList.remove("active")
		})
		circleLists.forEach(function(item, i) {
			item.classList.remove("active")
		})
		imgLists[imgIndex].classList.add("active");
		circleLists[imgIndex].classList.add("active");
	}
	//forEach 循环方法
	circleLists.forEach(function(item, i) {
		item.onclick = function() {
			imgIndex = i; //当使用for循环时不能用i当索引值
			render();
		}
	})
}