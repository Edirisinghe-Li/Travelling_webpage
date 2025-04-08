// JavaScript Document

const navbar = document.querySelector('.navbar');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

navbar.addEventListener('click',()=>
{
	navlinks.classList.toggle("open");
});


window.addEventListener("scroll", function(){
	var header=document.querySelector("nav");
	header.classList.toggle("sticky",window.scrollY>0);
});
