// Data
const skillsData = [
  {
    category: "XR Development",
    icon: "🥽",
    items: ["Unity3D (C#)", "Linear algebra (vectors, matrices, transformations)", "WebXR API", "Three.js", "A-Frame"]
  },
  {
    category: "AR Technologies",
    icon: "📱",
    items: ["Google ARCore (Android)", "ARKit (iOS)", "Vuforia", "Niantic Lightship"]
  },
  {
    category: "VR Platforms",
    icon: "🎮",
    items: ["Meta Quest SDK", "OpenXR", "SteamVR", "HTC Vive"]
  },
  {
    category: "3D Skills",
    icon: "🎨",
    items: ["Blender 3D", "Texturing", "Animation", "Shader Programming"]
  },
  {
    category: "Programming",
    icon: "💻",
    items: ["C#", "Java", "JavaScript", "Python"]
  },
  {
    category: "Tools & More",
    icon: "🛠️",
    items: ["Git & GitHub", "Unity (XR Toolkit)", "VS Cod & VS Community", "Version Control"]
  }
];

const projectsData = [
  {
    id: 1,
    title: "Augmented Human",
    category: "AR Application",
    description: "Augmented Human is an Augmented Reality (AR) based interactive virtual assistant built using a 3D avatar. The system integrates Speech-to-Text (STT) for voice input, Text-to-Speech (TTS) for voice output, and real-time lip-sync technology to create natural human-like interaction. The avatar responds with contextual animations and facial expressions, making communication more realistic and immersive in AR environments.",
    technologies: ["AR Foundation / ARCore Integration","AI Voice Technologies"],
    features: [
      "Real-Time Voice Interaction",
      "Human-Like Response",
      "Emotion-Based Animations",
      "AR Environment Integration"],
    image:"asset/Augmented Human.jpg",
    youtubeId: "BDxEfJgBiVE",
  },
  {
    id: 2,
    title: "AR Showroom",
    category: "AR Application",
    description: "AR Furniture Placement is an augmented reality application built using Unity and AR Foundation that allows users to place and interact with 3D furniture models in a real-world environment. The app supports real-time scaling, rotation, and color customization of the furniture. It demonstrates AR plane detection, object manipulation, and interactive UI controls, making it a practical visualization tool for interior design and immersive product demonstrations.",
    technologies: ["Unity", "ARCore", "ARKit", "C#"],
    features: [
      "Real-time plane detection",
      "Interactive Object Controls",
      "Color Customization Panel",
      "User-Friendly Interface"],
    image:"asset/AR Showroom.jpg",
    youtubeId: "LFVRky56bTg",
  },
  {
    id: 3,
    title: "Virtual Campus Tour",
    category: "Web XR,VR Application",
    description: "Virtual Campus Tour is a virtual reality application developed using Unity and XR Interaction Toolkit that enables users to explore a 3D campus environment immersively. The project allows natural movement, interactive navigation, and environment-based exploration within a simulated campus space. It demonstrates VR locomotion systems, scene optimization, and interactive design, providing a realistic digital campus experience for virtual visits and institutional showcasing.",
    technologies: ["Three.js", "WebXR API", "JavaScript", "HTML5"],
    features: [
      "Immersive VR Navigation",
      "Interactive Hotspots",
      "Educational information",
      "Optimized VR Performance"
    ],
    youtubeId: "",
    image:"asset/VR game.jpg"
  },
  {
    id: 4,
    title: "Unity Racer",
    category: "GAME",
    description: "Car Racing Game is a Unity-based 3D racing simulation that allows players to control a vehicle on a closed racing track with real-time speed tracking and responsive steering mechanics. The game includes acceleration, braking, and directional controls with physics-based movement. It demonstrates core gameplay systems, UI integration, and camera management, making it a foundational project for understanding vehicle mechanics and game development workflows",
    technologies: ["Unity", "OpenXR", "C#", "Mobile devices"],
    features: [
      "Physics-Based Car Controller",
      "Speed Display System",
      "Track Environment Setup",
      "Third-Person Follow Camera"],
    youtubeId: "X3KLwBxMc14",
    image:"asset/Unity Racer.jpg"
  },
  {
    id: 5,
    title: "Bouncing Orb",
    category: "Web Game",
    description: "2D Ball Bounce Game is a Unity-based 2D platformer where a player-controlled ball moves across automatically generated platforms while avoiding randomly spawned obstacles. The game uses physics-based movement and collision detection to create a responsive gameplay experience. It demonstrates procedural ground generation, randomized obstacle placement, and real-time score tracking, making it a solid foundation project for understanding 2D mechanics and dynamic level systems.",
    technologies:  ["Three.js", "WebGL", "JavaScript", "HTML5"],
    features: [
      "Automatic Ground Generation",
      "Random Obstacle Spawning",
      "Physics-Based Ball Movement",
      "Real-Time Score System"],
    youtubeId: "dXfnyjIYJbs",
    image:"asset/Bouncing Orb.png"
  },
  {
    id: 6,
    title: "Sandwich Hunter",
    category: "WEB GAME 3D",
    description: "Animal Catch Game is a Unity-based 3D top-down arcade game where the player throws sandwiches using the spacebar to hit moving animals and score points. Animals spawn dynamically across the terrain, creating continuous gameplay. The project demonstrates object spawning, projectile mechanics, collision detection, and score management. It highlights core gameplay loop implementation and interactive input handling within a simple yet engaging 3D environment.",
    technologies: ["Unity", "ARCore", "Maps API", "C#"],
    features: [
      "Projectile Throw Mechanic",
      "Dynamic Animal Spawning",
      "Collision-Based Scoring System",
      "Top-Down 3D Gameplay Design"],
      youtubeId: "f9jEjqTRfzs",
      image:"asset/Sandwich Hunter.png"
  },
  {
    id: 7,
    title: "Puppy Catch",
    category: "GAME",
    description: "Dog Ball Game is a Unity-based 3D arcade game where dogs spawn at random positions when the player presses the Space key. Balls fall from the top, and the objective is for the spawned dog to catch the ball within a limited time. If the ball is not caught correctly, the game ends. The project demonstrates timed gameplay mechanics, object spawning systems, collision detection, and basic game state management.",
    technologies: ["Unity", "ARCore", "Maps API", "C#"],
    features: [
      "Random Dog Spawning",
      "Falling Ball Mechanic",
      "Time-Based Catch System",
      "Game Over Logic"],
     youtubeId: "",
    image:"asset/Puppy Catch.png"
  }
];

// Three.js Scene Setup
let scene, camera, renderer, particles, geometry, material;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function initThree() {
  const canvas = document.getElementById('three-canvas');
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;
  
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Create particle system
  const particleCount = 900;
  geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  const color1 = new THREE.Color(0x00d9ff);
  const color2 = new THREE.Color(0x9d00ff);
  const color3 = new THREE.Color(0x00ffcc);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 2000;
    positions[i + 1] = (Math.random() - 0.5) * 2000;
    positions[i + 2] = (Math.random() - 0.5) * 1000;
    
    const colorChoice = Math.floor(Math.random() * 3);
    const chosenColor = colorChoice === 0 ? color1 : colorChoice === 1 ? color2 : color3;
    colors[i] = chosenColor.r;
    colors[i + 1] = chosenColor.g;
    colors[i + 2] = chosenColor.b;
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  material = new THREE.PointsMaterial({
    size: 3,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });
  
  particles = new THREE.Points(geometry, material);
  scene.add(particles);
  
  // Add ambient geometric shapes
  addGeometricShapes();
  
  animate();
}

function addGeometricShapes() {
  const geometries = [
    new THREE.OctahedronGeometry(50, 0),
    new THREE.TetrahedronGeometry(40, 0),
    new THREE.IcosahedronGeometry(45, 0)
  ];
  
  for (let i = 0; i < 5; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    const material = new THREE.MeshBasicMaterial({
      color: Math.random() > 0.5 ? 0x00d9ff : 0x9d00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      (Math.random() - 0.5) * 1000,
      (Math.random() - 0.5) * 1000,
      (Math.random() - 0.5) * 500
    );
    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    mesh.userData.rotationSpeed = {
      x: (Math.random() - 0.5) * 0.01,
      y: (Math.random() - 0.5) * 0.01,
      z: (Math.random() - 0.5) * 0.01
    };
    scene.add(mesh);
  }
}

function animate() {
  requestAnimationFrame(animate);
  
  // Rotate particles
  particles.rotation.y += 0.0005;
  particles.rotation.x += 0.0002;
  
  // Rotate geometric shapes
  scene.children.forEach(child => {
    if (child.userData.rotationSpeed) {
      child.rotation.x += child.userData.rotationSpeed.x;
      child.rotation.y += child.userData.rotationSpeed.y;
      child.rotation.z += child.userData.rotationSpeed.z;
    }
  });
  
  // Camera follows mouse
  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);
  
  renderer.render(scene, camera);
}

// Mouse parallax effect
document.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX - windowHalfX) * 0.1;
  mouseY = (event.clientY - windowHalfY) * 0.1;
});

// Window resize
window.addEventListener('resize', () => {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Hero typing effect
function typeWriter(text, element, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Navigation
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

// Generate Skills Cards
function generateSkillsCards() {
  const skillsGrid = document.getElementById('skills-grid');
  
  skillsData.forEach((skill, index) => {
    const card = document.createElement('div');
    card.className = 'skill-card fade-in';
    card.style.transitionDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <span class="skill-icon">${skill.icon}</span>
      <h3>${skill.category}</h3>
      <ul class="skill-items">
        ${skill.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
    
    skillsGrid.appendChild(card);
    observer.observe(card);
  });
}

// Generate Project Cards
// Generate Project Cards
function generateProjectCards() {
  const projectsGrid = document.getElementById('projects-grid');
  projectsGrid.innerHTML = ""; // Clear previous content (optional but good practice)

  projectsData.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.style.transitionDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-overlay" onclick="openProjectModal(${project.id})">
          <span class="project-overlay-text">View Details</span>
        </div>
      </div>

      <div class="project-content">
        <div class="project-header">
          <h3>${project.title}</h3>
        </div>

        <span class="project-category">${project.category || ""}</span>

        <p class="project-description">
          ${project.description || ""}
        </p>

        <div class="project-buttons">
          <button class="btn btn-primary" onclick="openProjectModal(${project.id})">
            View Details
          </button>
          <a href="https://github.com/MAHESH21723/THINK_SMART" target="_blank" class="btn btn-secondary">
            GitHub
          </a>
        </div>
      </div>
    `;

    projectsGrid.appendChild(card);
    observer.observe(card);
  });
}

// Project Modal
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;
  
  modalBody.innerHTML = `
    <div class="modal-header">
      <h2>${project.title}</h2>
    </div>
    <div class="modal-image">
  ${
    project.youtubeId
      ? `
        <iframe
          src="https://www.youtube.com/embed/${project.youtubeId}"
          title="${project.title}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
      : `<p>Video Coming Soon</p>`
  }
</div>

    <p class="modal-description">${project.description}</p>
    <div class="modal-features">
      <h3>Key Features</h3>
      <ul>
        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    </div>
    <div class="modal-tech">
    
    </div>
    <div class="modal-links">
      <a href="https://github.com/MAHESH21723/THINK_SMART" target="_blank" class="btn btn-primary">View on GitHub</a>
      <button class="btn btn-secondary" onclick="closeProjectModal()">Close</button>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeProjectModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeProjectModal();
  }
});

// Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Simulate form submission
  alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
  contactForm.reset();
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize
window.addEventListener('load', () => {
  // Hide loading screen
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 1500);
  
  // Initialize Three.js
  initThree();
  
  // Type hero title
  const heroTitle = document.getElementById('hero-title');
  setTimeout(() => {
    typeWriter('MAHESHWARAN', heroTitle, 150);
  }, 2000);
  
  // Generate content
  generateSkillsCards();
  generateProjectCards();
});