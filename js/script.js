///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
	var flex = document.createElement('div');
	flex.style.display = 'flex';
	flex.style.flexDirection = 'column';
	flex.style.rowGap = '1px';

	flex.appendChild(document.createElement('div'));
	flex.appendChild(document.createElement('div'));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

// Adding dynamic year generation to footer
const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();

// Getting the navbar on mobile to work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
	headerEl.classList.toggle('nav-open');
});

// Smooth scrolling using event delegation
document.querySelector('body').addEventListener('click', function (e) {
	e.preventDefault();
	// Matching strategy
	// For logos
	if (
		e.target.classList.contains('ss-link') &&
		e.target.classList.contains('logo')
	) {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	// For every other link
	else if (e.target.classList.contains('ss-link')) {
		const id = e.target.getAttribute('href');
		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
	}

	// Close mobile navigation
	if (e.target.classList.contains('main-nav-link')) {
		headerEl.classList.remove('nav-open');
	}
});

// Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero');
const body = document.querySelector('body');

const stickyNav = function (entries) {
	const entry = entries[0];
	if (!entry.isIntersecting) body.classList.add('sticky');
	else body.classList.remove('sticky');
};

const navObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-80px`,
});
navObserver.observe(sectionHeroEl);

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
