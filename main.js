
  const toggler = document.querySelector('.mobile-navigation-toggler');
  const links = document.querySelectorAll('.mobile-navigation-link');
  const burgerLabel = document.querySelector('.mobile-navigation label');
  
 links.forEach(link => {
	 link.addEventListener('click', () => {
		toggler.checked = false; 
	 });
  });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
	 toggler.checked = false;
  }
});
