window.onscroll = function() {
	myFunction();
};

var navbar = document.getElementById("navbar");
var logo = document.getElementsByClassName("logo")[0];
var title = document.getElementsByClassName("title")[0];
var titlepos = title.getBoundingClientRect();


function myFunction() {
	if (window.scrollY < titlepos.bottom){
		navbar.classList.remove("sticky");
		logo.style.visibility = 'hidden';
	} else{
		navbar.classList.add("sticky");
		logo.style.visibility = 'visible';
	} 
}

const navLinks = document.querySelectorAll('nav .navContainer ul li');

window.addEventListener('scroll', ()=> {
	const botNavPos = navbar.getBoundingClientRect().bottom;
	const sections = document.querySelectorAll('section');
	let curr = '';

	sections.forEach( section => {
		const sectionTop = section.getBoundingClientRect().top;
		const sectionHeight = section.clientHeight;
		if (botNavPos >= (sectionTop - sectionHeight/4)) {
			curr = section.getAttribute('id');
		} 
		if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
			curr = "contact_page";
		}
	});
	navLinks.forEach(li => {
		li.classList.remove('active');
		if(li.classList.contains(curr)) {
			li.classList.add('active');
		}
	});
});


// Modal creation
const open_experience = document.getElementById("open_experience");
const open_education = document.getElementById("open_education");
const open_projects = document.getElementById("open_projects");
const modal_experience = document.getElementById("modal_experience");
const modal_education = document.getElementById("modal_education");
const modal_projects = document.getElementById("modal_projects");
const close_experience = document.getElementById("close_experience");
const close_education = document.getElementById("close_education");
const close_projects = document.getElementById("close_projects");

open_experience.addEventListener('click', () => {
    modal_experience.classList.add('show');
});
open_education.addEventListener('click', () => {
    modal_education.classList.add('show');
});
open_projects.addEventListener('click', () => {
    modal_projects.classList.add('show');
});

close_experience.addEventListener('click', () => {
    modal_experience.classList.remove('show');
});
close_education.addEventListener('click', () => {
    modal_education.classList.remove('show');
});
close_projects.addEventListener('click', () => {
    modal_projects.classList.remove('show');
});

var slideIndex = 1;
showSlides(slideIndex);

const prev = document.getElementById("prev");
const next = document.getElementById("next");
prev.onclick = function(){updateImages(-1);};
next.onclick = function(){updateImages(1);};

function showSlides(index) {
	var i;
	var Images = document.getElementsByClassName("Images");

	if (index > Images.length) {
		slideIndex = 1;
	}
	if (index < 1) {
		slideIndex = Images.length;
	}
	for (i = 0; i < Images.length; i++) {
		Images[i].style.display = "none";
	}
	Images[slideIndex - 1].style.display = "flex";
}

function updateImages(index) {
	showSlides(slideIndex += index);
}
function currSlide(index) {
	showSlides(slideIndex = index);
}

// https://blog.hubspot.com/website/css-fade-in#image-transition
// https://stackoverflow.com/questions/12066870/how-to-check-if-an-element-is-overlapping-other-elements
// https://www.youtube.com/watch?v=UYvwb6pBvg8
// https://stackoverflow.com/questions/15782078/bring-element-to-front-using-css
// https://www.youtube.com/watch?v=s0QzZcH_Kqs