
const filterButton = document.querySelector("#filter-btn").children;
const items = document.querySelector(".portfolio-gallery").children;


for (let i = 0; i < filterButton.length; i++) {	
filterButton[i].addEventListener("click",function(){
	for (let j = 0; j < filterButton.length; j++) {
		filterButton[j].classList.remove("active") //remove active class from all buttons
	}
	this.classList.add("active") //add active class by clicked
	const target = this.getAttribute("data-target")

	for (let k = 0; k < items.length; k++) {
		items[k].style.display = "none";

		if (target==items[k].getAttribute("data-id")){
		items[k].style.display = "block";
		}
		if (target=="all"){
		items[k].style.display = "block";
		}
	}
})
}