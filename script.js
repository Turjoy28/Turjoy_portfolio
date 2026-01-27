// Select only navigation links (not the header)
const navLinks = document.querySelectorAll('header nav ul li:not(.mobile-menu-header) a');
const logoLinks = document.querySelectorAll('.logo');
const sections = document.querySelectorAll('.section');
const baranimation = document.querySelector('.bar-animation');
const header = document.querySelector('header');

// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');
const menuOverlay = document.getElementById('menu-overlay');
const closeMenuBtn = document.getElementById('close-menu');

const openMobileMenu = () => {
  menuIcon.classList.add('active');
  navMenu.classList.add('active');
  menuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  menuIcon.classList.remove('fa-bars');
  menuIcon.classList.add('fa-times');
};

const closeMobileMenu = () => {
  menuIcon.classList.remove('active');
  navMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
  document.body.style.overflow = '';
  menuIcon.classList.remove('fa-times');
  menuIcon.classList.add('fa-bars');
};

// Event listeners for menu
menuIcon.addEventListener('click', () => {
  if (navMenu.classList.contains('active')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

menuOverlay.addEventListener('click', closeMobileMenu);

// Close button inside menu
if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', closeMobileMenu);
}

// Get all main sections for scroll detection
const allSections = [
  document.querySelector('.Home'),
  document.querySelector('.Services'),
  document.querySelector('.Resume'),
  document.querySelector('.Portfolio'),
  document.querySelector('.Contact')
];

// Set Home as active on page load
window.addEventListener('load', () => {
  navLinks.forEach(link => link.classList.remove('active'));
  if (navLinks[0]) {
    navLinks[0].classList.add('active');
  }
});

// Intersection Observer for Dynamic Navbar Detection
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -85% 0px',
  threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionIndex = allSections.indexOf(entry.target);
      if (sectionIndex !== -1) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLinks[sectionIndex]) {
          navLinks[sectionIndex].classList.add('active');
        }
      }
    }
  });
}, observerOptions);

// Observe all main sections
allSections.forEach(section => {
  if (section) {
    sectionObserver.observe(section);
  }
});

// Smooth scroll behavior for nav links
navLinks.forEach((link, idx) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    const targetSection = allSections[idx];

    if (targetSection) {
      // Close mobile menu first if open
      if (navMenu.classList.contains('active')) {
        closeMobileMenu();

        // Wait for menu to close, then scroll
        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          // Update active state
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }, 400);
      } else {
        // Desktop - scroll immediately
        targetSection.scrollIntoView({ behavior: 'smooth' });
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
});

// Handle logo click (redirect to Home)
logoLinks.forEach(logo => {
  logo.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    const homeSection = allSections[0];

    if (homeSection) {
      if (navMenu.classList.contains('active')) {
        closeMobileMenu();
        setTimeout(() => {
          homeSection.scrollIntoView({ behavior: 'smooth' });
          navLinks.forEach(l => l.classList.remove('active'));
          if (navLinks[0]) navLinks[0].classList.add('active');
        }, 400);
      } else {
        homeSection.scrollIntoView({ behavior: 'smooth' });
        navLinks.forEach(l => l.classList.remove('active'));
        if (navLinks[0]) navLinks[0].classList.add('active');
      }
    }
  });
});

// Close mobile menu on window resize (if open and resizing to desktop)
window.addEventListener('resize', () => {
  if (window.innerWidth > 992 && navMenu.classList.contains('active')) {
    closeMobileMenu();
  }
});





const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume_detail');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    // 1. Remove 'active' from all buttons
    resumeBtns.forEach(b => b.classList.remove('active'));

    // 2. Add 'active' to clicked button
    btn.classList.add('active');

    // 3. Hide all resume_detail sections
    resumeDetails.forEach(detail => detail.classList.remove('active'));

    // 4. Show the matched detail
    resumeDetails[idx].classList.add('active');
  });
});


// Portfolio Carousel - New Design
const arrowRight = document.querySelector('.portfolio-nav.arrow-right');
const arrowLeft = document.querySelector('.portfolio-nav.arrow-left');
const projectCards = document.querySelectorAll('.project-card');
const indicators = document.querySelectorAll('.indicator');

let currentProject = 0;
const totalProjects = projectCards.length;

const updatePortfolio = () => {
  // Update project cards
  projectCards.forEach((card, idx) => {
    card.classList.remove('active');
    if (idx === currentProject) {
      card.classList.add('active');
    }
  });

  // Update indicators
  indicators.forEach((indicator, idx) => {
    indicator.classList.remove('active');
    if (idx === currentProject) {
      indicator.classList.add('active');
    }
  });

  // Update arrow states
  arrowLeft.classList.toggle('disabled', currentProject === 0);
  arrowRight.classList.toggle('disabled', currentProject === totalProjects - 1);
};

arrowRight.addEventListener('click', () => {
  if (currentProject < totalProjects - 1) {
    currentProject++;
    updatePortfolio();
  }
});

arrowLeft.addEventListener('click', () => {
  if (currentProject > 0) {
    currentProject--;
    updatePortfolio();
  }
});

// Click on indicators to navigate
indicators.forEach((indicator, idx) => {
  indicator.addEventListener('click', () => {
    currentProject = idx;
    updatePortfolio();
  });
});


// Image Gallery Navigation within each project
const initImageGalleries = () => {
  projectCards.forEach((card) => {
    const imgGallery = card.querySelector('.img-gallery');
    const images = imgGallery.querySelectorAll('img');
    const prevBtn = card.querySelector('.img-prev');
    const nextBtn = card.querySelector('.img-next');
    const currentImgSpan = card.querySelector('.current-img');
    const totalImgSpan = card.querySelector('.total-img');

    let currentImgIndex = 0;
    const totalImages = images.length;

    // Update total images count
    if (totalImgSpan) {
      totalImgSpan.textContent = totalImages;
    }

    const updateGallery = () => {
      images.forEach((img, idx) => {
        img.classList.remove('active');
        if (idx === currentImgIndex) {
          img.classList.add('active');
        }
      });

      // Update counter
      if (currentImgSpan) {
        currentImgSpan.textContent = currentImgIndex + 1;
      }
    };

    // Previous button click
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentImgIndex > 0) {
          currentImgIndex--;
        } else {
          currentImgIndex = totalImages - 1; // Loop to last
        }
        updateGallery();
      });
    }

    // Next button click
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentImgIndex < totalImages - 1) {
          currentImgIndex++;
        } else {
          currentImgIndex = 0; // Loop to first
        }
        updateGallery();
      });
    }
  });
};

// Initialize image galleries
initImageGalleries();


// Make sure you included EmailJS SDK in your HTML:
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>

emailjs.init("GvSwLTdaQpXqPGEPr"); // Your public key

const contactForm = document.getElementById("contactForm");
const statusDiv = document.getElementById("status");

// Form Validation - Step by Step
const formValidation = {
  name: {
    element: document.getElementById("name"),
    error: document.getElementById("nameError"),
    validate: (value) => value.trim().length >= 3,
    message: "Name must be at least 3 characters long"
  },
  email: {
    element: document.getElementById("email"),
    error: document.getElementById("emailError"),
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: "Please enter a valid email address"
  },
  phone: {
    element: document.getElementById("phone"),
    error: document.getElementById("phoneError"),
    validate: (value) => /^[\d\s\-\+\(\)]+$/.test(value) && value.replace(/\D/g, '').length >= 10,
    message: "Please enter a valid phone number (at least 10 digits)"
  },
  subject: {
    element: document.getElementById("subject"),
    error: document.getElementById("subjectError"),
    validate: (value) => value.trim().length >= 3,
    message: "Subject must be at least 3 characters long"
  },
  message: {
    element: document.getElementById("message"),
    error: document.getElementById("messageError"),
    validate: (value) => value.trim().length >= 10,
    message: "Message must be at least 10 characters long"
  }
};

// Real-time validation on input
Object.keys(formValidation).forEach(fieldName => {
  const field = formValidation[fieldName];
  field.element.addEventListener('blur', () => {
    validateField(fieldName);
  });
  
  field.element.addEventListener('input', () => {
    if (field.error.textContent) {
      validateField(fieldName);
    }
  });
});

const validateField = (fieldName) => {
  const field = formValidation[fieldName];
  const value = field.element.value;
  const isValid = field.validate(value);
  
  const formGroup = field.element.closest('.form-group');
  
  if (!isValid) {
    field.error.textContent = field.message;
    formGroup.classList.add('error');
    return false;
  } else {
    field.error.textContent = '';
    formGroup.classList.remove('error');
    return true;
  }
};

const validateAllFields = () => {
  let allValid = true;
  Object.keys(formValidation).forEach(fieldName => {
    if (!validateField(fieldName)) {
      allValid = false;
    }
  });
  return allValid;
};

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validate all fields before sending
  if (!validateAllFields()) {
    statusDiv.textContent = "Please fix the errors above before sending.";
    statusDiv.style.color = "#ff6b6b";
    return;
  }

  // Collect form data
  const formData = {
    title: contactForm.subject.value, // maps to template {{title}}
    name: contactForm.name.value,
    email: contactForm.email.value,
    phone: contactForm.phone.value,
    message: contactForm.message.value,
    time: new Date().toLocaleString()
  };

  console.log("Sending form data:", formData); // optional debug

  statusDiv.textContent = "Sending message...";
  statusDiv.style.color = "#9acd32";

  // Send email via EmailJS
  emailjs.send("service_j121q69", "template_k4sfxrt", formData)
    .then((response) => {
      console.log("Email sent successfully:", response);
      statusDiv.textContent = "✓ Message sent successfully! I'll get back to you soon.";
      statusDiv.style.color = "#4ade80";
      contactForm.reset();
      // Clear error classes
      document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
      });
      // Clear status message after 5 seconds
      setTimeout(() => {
        statusDiv.textContent = '';
      }, 5000);
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      statusDiv.textContent = "✗ Failed to send message. Please try again.";
      statusDiv.style.color = "#ff6b6b";
    });
});