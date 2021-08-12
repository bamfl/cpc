const accordion = document.querySelector('.faq__accordion');
const accordionItems = accordion.querySelectorAll('.accordion-item');

const accordionHandler = (item) => {
  accordionItems.forEach((el) => {
		if (!item.classList.contains('active')) {
			el.classList.remove('active');	
	
			if (item === el) {
				el.classList.add('active');
			}
		} else {
			el.classList.remove('active');	
		}
  });
};

accordion.addEventListener('click', (event) => {
  if (event.target.classList.contains('accordion-item')) {
    accordionHandler(event.target);
  } else if (event.target.parentElement.classList.contains('accordion-item')) {
    accordionHandler(event.target.parentElement);
  } else if (event.target.parentElement.parentElement.classList.contains('accordion-item')) {
    accordionHandler(event.target.parentElement.parentElement);
  }
});

const screenWidth = window.screen.width;

if (screenWidth <= 768) {
  new Swiper('.swiper-container', { 
		pagination: { el: '.swiper-pagination' }, 
	});
}

if (screenWidth <= 700) {
  new Swiper('.swiper-container1', { 
		pagination: { el: '.swiper-pagination1' }, 
	});

	new Swiper('.swiper-container2', { 
		pagination: { el: '.swiper-pagination2' }, 
	});
}
