/* toggle icon */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* Active navlink styled */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  /* Make header sticky */
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /* Remove toggle */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

ScrollReveal({
  //   reset: true,
  distance: '80px',
  duration: '2000',
  delay: '200',
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img, .services-container, .portfolio-box, .contact form',
  { origin: 'bottom' },
);

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: [
    'Full-Stack Software Developer',
    'Tech Enthusiast',
    'Health and Fitness Savvy',
  ],
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 1000,
  loop: true,
});

/* The pop up menu */
const popUpMenu = (project) => {
  console.log(project);

  const popUpContainer = document.createElement('div');
  popUpContainer.classList.add('popup-container');

  const popUpImage = document.createElement('img');
  popUpImage.src = project.image;

  const popUpDetailsContainer = document.createElement('div');
  popUpDetailsContainer.classList.add('popup-details-container');

  const popUpTitle = document.createElement('h2');
  popUpTitle.classList.add('popup-title-container');
  popUpTitle.textContent = project.title;

  const popUpDetails = document.createElement('p');
  popUpDetails.classList.add('popup-details-container');
  popUpDetails.textContent = project.details;

  const popUpBtnsContainer = document.createElement('p');
  popUpBtnsContainer.classList.add('popup-btns-container');

  const popGithubBtn = document.createElement('i');
  popGithubBtn.classList.add('bx', 'bxl-github');

  const closeBtn = document.createElement('i');
  closeBtn.classList.add('bx', 'bx-x', 'close-btn');

  const githubBtn = document.createElement('a');
  githubBtn.appendChild(popGithubBtn);
  githubBtn.classList.add('btn', 'github-btn');

  const seeLiveBtn = document.createElement('a');
  seeLiveBtn.textContent = 'See Live';
  seeLiveBtn.classList.add('btn', 'see-live-btn');

  popUpBtnsContainer.appendChild(githubBtn);
  popUpBtnsContainer.appendChild(seeLiveBtn);

  popUpDetailsContainer.appendChild(closeBtn);
  popUpDetailsContainer.appendChild(popUpTitle);
  popUpDetailsContainer.appendChild(popUpDetails);
  popUpDetailsContainer.appendChild(popUpBtnsContainer);

  popUpContainer.appendChild(popUpImage);
  popUpContainer.appendChild(popUpDetailsContainer);
  document.body.appendChild(popUpContainer);

  closeBtn.addEventListener('click', () => {
    document.body.removeChild(popUpContainer);
  });
};

/* Render projects dynamically */
const projectsArr = [
  {
    image: 'https://picsum.photos/300/200',
    title: 'Web Design',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut , voluptas?',
  },
  {
    image: 'https://picsum.photos/300/200',
    title: 'Web Design',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut , voluptas?',
  },
  {
    image: 'https://picsum.photos/300/200',
    title: 'Web Design',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut , voluptas?',
  },
  {
    image: 'https://picsum.photos/300/200',
    title: 'Web Design',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut , voluptas?',
  },
  {
    image: 'https://picsum.photos/300/200',
    title: 'Web Design',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut , voluptas?',
  },
  {
    image: 'https://picsum.photos/300/200',
    title: 'Web Design',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut , voluptas?',
  },
];

const projectsContainer = document.querySelector('.portfolio-container');

projectsArr.forEach((proj) => {
  const project = document.createElement('div');
  project.classList.add('portfolio-box');

  const projectImg = document.createElement('img');
  projectImg.src = proj.image;
  projectImg.alt = proj.title;

  const layer = document.createElement('div');
  layer.classList.add('portfolio-layer');

  const title = document.createElement('h4');
  title.textContent = proj.title;

  const details = document.createElement('p');
  details.textContent = proj.details;

  const popLink = document.createElement('a');

  const popBtn = document.createElement('i');
  popBtn.classList.add('bx', 'bx-link-external');

  popLink.appendChild(popBtn);

  layer.appendChild(title);
  layer.appendChild(details);
  layer.appendChild(popLink);

  project.appendChild(projectImg);
  project.appendChild(layer);

  projectsContainer.appendChild(project);

  popLink.addEventListener('click', () => {
    popUpMenu(proj);
  });
});
