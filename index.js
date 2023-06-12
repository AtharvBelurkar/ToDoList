const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const container = document.getElementById("C");


function charLimiterrMsg(){
	if(container.innerHTML === "Task can't be Empty"){
		container.innerHTML = '';
		let h3 = document.createElement("h3");
		h3.innerHTML = "Max Limit 15 char";
		container.appendChild(h3);
	}
	else{
		container.innerHTML = "Max Limit 15 char"  ;
	}
}

function checkInput() {
	let a = inputBox.value;
	var ans = true;
	for(var i = 0; i<a.length; i++){
		if(a.charAt(i) === ' '){
			ans = true;
		}
		else{
			ans = false;
			break;
		}
	}
	return ans;
}
function addTask(){
	const charLen = inputBox.value.length;
	if(inputBox.value === '' || inputBox.value === ' '){
		if(container.innerHTML === ''){
			let h3 = document.createElement("h3");
			h3.innerHTML = "Task can't be Empty";
			container.appendChild(h3);
		}
	}
	
	else{
		container.innerHTML = '';
		let tr = document.createElement("tr");
		let th = document.createElement("th");
		th.setAttribute("id", "th");
		tr.appendChild(th);
		th.innerHTML = inputBox.value;
		listContainer.appendChild(tr);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		tr.appendChild(span);
	}
	inputBox.value = "";
}

listContainer.addEventListener('click',function (e) {
	if(e.target.tagName === 'SPAN'){
		container.innerHTML = '';
		e.target.parentElement.remove();
	}
	else if(e.target.tagName === 'TH'){
		let th = document.getElementById("th");
		if(e.target.style.textDecoration === "line-through"){
			e.target.style.textDecoration = "none";
		}
		else{
			e.target.style.textDecoration = "line-through";
		}
	}
}, false);
