/* toggle icon */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* Active navlink styled */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add('active');
      });
    }
  });

  /* Make header sticky */
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /* Remove toggle */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

ScrollReveal({
  // reset: true,
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
  const popUpModal = document.querySelector('#modal');
  const popUpModalOverlay = document.querySelector('#overlay');
  const popUpModalCloseBtn = document.querySelector('[data-close-button]');

  const popUpImage = document.createElement('img');
  popUpImage.src = project.image;
  popUpImage.classList.add('modal-image');

  const popUpDetails = document.createElement('div');
  popUpDetails.classList.add('modal-details');
  popUpDetails.id = 'modal-details';

  const popUpTitle = document.createElement('h3');
  popUpTitle.classList.add('modal-header');
  popUpTitle.textContent = project.title;
  popUpDetails.appendChild(popUpTitle);

  const popUpText = document.createElement('p');
  popUpText.classList.add('project-details');
  popUpText.textContent = project.details;
  popUpDetails.appendChild(popUpText);

  const repoBtn = document.createElement('a');
  const seeLive = document.createElement('a');
  repoBtn.target = '_blank';
  seeLive.target = '_blank';
  repoBtn.classList.add('btn', 'project-btns');
  seeLive.classList.add('btn', 'project-btns');
  repoBtn.textContent = 'GitHub';
  repoBtn.href = project.githubLink;
  seeLive.textContent = 'Live';
  seeLive.href = project.liveLink;

  const popUpBtnsContainer = document.createElement('div');
  popUpBtnsContainer.classList.add('popup-btns-container');

  popUpBtnsContainer.appendChild(repoBtn);
  popUpBtnsContainer.appendChild(seeLive);

  popUpDetails.appendChild(popUpBtnsContainer);

  popUpModal.appendChild(popUpImage);
  popUpModal.appendChild(popUpDetails);

  popUpModal.classList.add('active');
  popUpModalOverlay.classList.add('active');

  popUpModalCloseBtn.addEventListener('click', () => {
    popUpModal.classList.remove('active');
    popUpModalOverlay.classList.remove('active');
    popUpModal.removeChild(popUpImage);
    popUpModal.removeChild(popUpDetails);
  });

  popUpModalOverlay.addEventListener('click', () => {
    popUpModal.classList.remove('active');
    popUpModalOverlay.classList.remove('active');
    popUpModal.removeChild(popUpImage);
    popUpModal.removeChild(popUpDetails);
  });
};

/* Render projects dynamically */
const projectsArr = [
  {
    image: 'images/project_screen_shots/awesome_books_2.png',
    title: 'Awesome Books',
    githubLink: 'https://github.com/amon-cofie/Awesome-books-ES6',
    liveLink: 'https://amon-cofie.github.io/Awesome-books-ES6/',
    details:
      'A Single Page Application featuring a medium fidelity wireframe of a book management app that stores books that are added and which can be deleted. Built mainly with JavaScript and strict ES6 features.',
  },
  {
    image: 'images/project_screen_shots/spend_right_2.png',
    title: 'Spend Right',
    githubLink: 'https://github.com/amon-cofie/spend-right-budget-app',
    liveLink: 'https://spend-right.onrender.com/',
    details:
      'Spend Right is a full stack ruby on rails web application on a PostgreSQL database that is built to manage your finances by grouping your expenses or transactions into categories and helping you visualize how much you are spending and where you are spending the most amount of money.',
  },
  {
    image: 'images/project_screen_shots/to_do_list_2.png',
    title: 'To-Do-List',
    githubLink: 'https://github.com/amon-cofie/To-Do-List',
    liveLink: 'https://amon-cofie.github.io/To-Do-List/',
    details:
      'A Single Page Application featuring a medium fidelity wireframe of a to-do-list app that stores tasks that are added and which can be deleted. The tasks can be checked, unchecked or edited. Built mainly with JavaScript and strict ES6 features. Bundled with webpack.',
  },
  {
    image: 'images/project_screen_shots/bmen_conference_2.png',
    title: 'BMEN 2022',
    githubLink: 'https://github.com/amon-cofie/first-capstone-project',
    liveLink: 'https://amon-cofie.github.io/first-capstone-project/',
    details:
      'My first capstone project in microverse, a two webpage site for a pretend biomedical engineering conference. Inspiration for this project was obtained from Cindy Shin\'s behance design of a website for a Creative Commons Summit set to happen in October 2022. Built with HTML, CSS and JavaScript.',
  },
  {
    image: 'images/project_screen_shots/air_pollution_tracker_1.png',
    title: 'AQI Tracker',
    githubLink: 'https://github.com/amon-cofie/Air-Pollution-Tracking-App',
    liveLink: 'https://airpollutiontracker.netlify.app/',
    details:
      'This is a simple single page application that tracks current air pollution data in any city in the world. It gives hourly average data on levels of concentration of various pollutes including Carbon Mono-Oxide, Ozone, PM25, PM10 among others. It is a good place to check the quality of the air in your local city or any city you would like to visit.',
  },
  {
    image: 'images/project_screen_shots/leaderboard_2.png',
    title: 'Leaderboard',
    githubLink: 'https://github.com/amon-cofie/leaderboard-project',
    liveLink: 'https://amon-cofie.github.io/leaderboard-project/dist/',
    details:
      'A JavaScript web app that contains the high scores of your games and the players that had those scores. It lists the scores from the highest to the lowest, showing the player with the highest scores. Bundled with webpack.',
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
