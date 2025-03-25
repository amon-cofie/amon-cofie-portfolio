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
        document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
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
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
  origin: 'bottom',
});

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: ['Full-Stack Software Developer', 'Tech Enthusiast', 'Creative Thinker'],
  typeSpeed: 40,
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

  if (project.githubLink || project.githubLink != '') {
    popUpBtnsContainer.appendChild(repoBtn);
  }
  if (project.liveLink || project.liveLink != '') {
    popUpBtnsContainer.appendChild(seeLive);
  }

  popUpDetails.appendChild(popUpBtnsContainer);

  // popUpModal.appendChild(popUpImage);
  popUpModal.appendChild(popUpDetails);

  popUpModal.classList.add('active');
  popUpModalOverlay.classList.add('active');

  popUpModalCloseBtn.addEventListener('click', () => {
    popUpModal.classList.remove('active');
    popUpModalOverlay.classList.remove('active');
    // popUpModal.removeChild(popUpImage);
    popUpModal.removeChild(popUpDetails);
  });

  popUpModalOverlay.addEventListener('click', () => {
    popUpModal.classList.remove('active');
    popUpModalOverlay.classList.remove('active');
    // popUpModal.removeChild(popUpImage);
    popUpModal.removeChild(popUpDetails);
  });
};

/* Render projects dynamically */
const projectsArr = [
  {
    title: 'Surge Banking',
    details:
      'An android mobile app that gives Surge bank customers the ability to do various bank transactions from the comfort of their homes.',
    githubLink: '',
    liveLink: 'https://play.google.com/apps/testing/app.surge',
    image: 'images/project_screen_shots/awesome_books_2.png',
    fontend: ['Flutter'],
    backend: ['Firebase', 'GCP'],
  },
  {
    title: 'Super Reader',
    details:
      'A hub for readers, writers and book lovers. A social-media-ish platform to connect book authors to readers and fans where authors can preview,  advertise and sell their books, run campaigns, get feedback from and interact with readers through one-on-one and group style messaging.',
    githubLink: 'https://github.com/amon-cofie/super-reader',
    liveLink: '',
    image: 'images/project_screen_shots/awesome_books_2.png',
    fontend: ['React'],
    backend: ['Express', 'Postgres', 'Prisma', 'Redis'],
  },
  {
    title: 'GIS Donations Portal',
    details:
      "Ghana International School's Donations Portal built to streamline donation processes in the schools Power of & campaign and other campaigns in the future. Features a scoped AI chatbot integration that provides responses related to Ghana International School.",
    githubLink: '',
    liveLink: 'https://gis-project-435913.web.app/',
    image: 'images/project_screen_shots/awesome_books_2.png',
    fontend: ['Flutter'],
    backend: ['Firebase'],
  },
  {
    image: 'images/project_screen_shots/awesome_books_2.png',
    title: 'Yazi Career Pathways',
    githubLink: '',
    liveLink: 'https://careerpathways.yaziacademy.com/',
    details:
      'An education-oriented web application that helps students chart a professional career path by offering carefully curated courses, designed in such a way to ensure the users obtain traction in any career path of choice.',
    fontend: ['Flutter'],
    backend: ['Firebase', 'GCP'],
  },
  // {
  //   image: 'images/project_screen_shots/awesome_books_2.png',
  //   title: 'Awesome Books',
  //   githubLink: 'https://github.com/amon-cofie/Awesome-books-ES6',
  //   liveLink: 'https://amon-cofie.github.io/Awesome-books-ES6/',
  //   details:
  //     'This project showcases a Single Page Application featuring a medium-fidelity wireframe of a book management app that stores books that can be added and deleted. It was developed primarily using JavaScript and strict ES6 features.',
  // },
  // {
  //   image: 'images/project_screen_shots/spend_right_2.png',
  //   title: 'Spend Right',
  //   githubLink: 'https://github.com/amon-cofie/spend-right-budget-app',
  //   liveLink: 'https://spend-right.onrender.com/',
  //   details:
  //     'Spend Right is a full stack ruby on rails web application on a PostgreSQL database, built to manage your finances by grouping your expenses or transactions into categories and helping you visualize how much you are spending and where you are spending the most amount of money.',
  // },
  // {
  //   image: 'images/project_screen_shots/to_do_list_2.png',
  //   title: 'To-Do-List',
  //   githubLink: 'https://github.com/amon-cofie/To-Do-List',
  //   liveLink: 'https://amon-cofie.github.io/To-Do-List/',
  //   details:
  //     'This project features a Single Page Application featuring a medium fidelity wireframe of a to-do-list app that stores tasks that a user adds. These tasks can be marked as completed or incomplete. They can also be edited or deleted. This project is built mainly with JavaScript and strict ES6 features and bundled with Webpack.',
  // },
  // {
  //   image: 'images/project_screen_shots/bmen_conference_2.png',
  //   title: 'BMEN 2022',
  //   githubLink: 'https://github.com/amon-cofie/first-capstone-project',
  //   liveLink: 'https://amon-cofie.github.io/first-capstone-project/',
  //   details:
  //     "This project features a two-page website for a pretend biomedical engineering conference. Inspiration for this project was obtained from Cindy Shin's Behance design of a website for a Creative Commons Summit set to happen in October 2022. It is built with HTML, CSS, and JavaScript.",
  // },
  // {
  //   image: 'images/project_screen_shots/air_pollution_tracker_1.png',
  //   title: 'AQI Tracker',
  //   githubLink: 'https://github.com/amon-cofie/Air-Pollution-Tracking-App',
  //   liveLink: 'https://airpollutiontracker.netlify.app/',
  //   details:
  //     'This project showcases a simple Single Page Application that tracks current air pollution data in any city in the world. It gives hourly-average data on levels of concentration of various pollutes including Carbon Mono-Oxide, Ozone, PM25, and PM10. It is useful for checking the air quality in your local city or a city you would like to visit.',
  // },
  // {
  //   image: 'images/project_screen_shots/leaderboard_2.png',
  //   title: 'Leaderboard',
  //   githubLink: 'https://github.com/amon-cofie/leaderboard-project',
  //   liveLink: 'https://amon-cofie.github.io/leaderboard-project/dist/',
  //   details:
  //     'This project showcases a JavaScript web app that stores the high scores for your games and the players that had those scores. It lists the scores in descending order, revealing the player with the highest score. It is bundled with Webpack.',
  // },
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

  // project.appendChild(projectImg);
  project.appendChild(layer);

  projectsContainer.appendChild(project);

  popLink.addEventListener('click', () => {
    popUpMenu(proj);
  });
});

// projectsArr.forEach((proj) => {
//   const project = document.createElement('div');
//   project.classList.add('portfolio-box');

//   const projectImg = document.createElement('img');
//   projectImg.src = proj.image;
//   projectImg.alt = proj.title;

//   const layer = document.createElement('div');
//   layer.classList.add('portfolio-layer');

//   const title = document.createElement('h4');
//   title.textContent = proj.title;

//   const details = document.createElement('p');
//   details.textContent = proj.details;

//   const popLink = document.createElement('a');

//   const popBtn = document.createElement('i');
//   popBtn.classList.add('bx', 'bx-link-external');

//   popLink.appendChild(popBtn);

//   layer.appendChild(title);
//   layer.appendChild(details);
//   layer.appendChild(popLink);

//   project.appendChild(projectImg);
//   project.appendChild(layer);

//   projectsContainer.appendChild(project);

//   popLink.addEventListener('click', () => {
//     popUpMenu(proj);
//   });
// });
