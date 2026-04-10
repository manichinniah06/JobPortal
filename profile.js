// Freelancer profiles data
const freelancerProfiles = [
    {
        id: 1,
        name: "Mani Chinniah",
        image: "images/fl-3.png",
        role: "Frontend Developer",
        rating: 4.9,
        hourlyRate: "₹900/hr",
        completedProjects: 124,
        skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
        about: "Passionate frontend developer with 5+ years of experience creating responsive and user-friendly web applications. Specialized in modern JavaScript frameworks and performance optimization.",
        experience: [
            {
                company: "TechSolutions Inc.",
                position: "Senior Frontend Developer",
                duration: "2022 - Present"
            },
            {
                company: "WebCraft Studios",
                position: "Frontend Developer",
                duration: "2019 - 2022"
            }
        ],
        education: "B.Tech in Computer Science, Indian Institute of Technology",
        contact: {
            email: "mani.chinniah@example.com",
            phone: "+91 98765 43210"
        }
    },
    {
        id: 2,
        name: "N Tarun",
        image: "images/fl-2.png",
        role: "UI/UX Designer",
        rating: 4.8,
        hourlyRate: "₹850/hr",
        completedProjects: 87,
        skills: ["Figma", "Adobe XD", "UI Design", "Wireframing", "Prototyping"],
        about: "Creative UI/UX designer with a keen eye for aesthetics and user experience. Specialized in creating intuitive interfaces that balance visual appeal with functional design.",
        experience: [
            {
                company: "DesignHub",
                position: "Senior UI/UX Designer",
                duration: "2021 - Present"
            },
            {
                company: "CreativeMinds",
                position: "UI Designer",
                duration: "2018 - 2021"
            }
        ],
        education: "Bachelor of Design, National Institute of Design",
        contact: {
            email: "n.tarun@example.com",
            phone: "+91 87654 32109"
        }
    },
    {
        id: 3,
        name: "Orvile Steve",
        image: "images/fl-1.png",
        role: "Full Stack Developer",
        rating: 4.7,
        hourlyRate: "₹950/hr",
        completedProjects: 156,
        skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
        about: "Versatile full stack developer proficient in both frontend and backend technologies. Experienced in building scalable web applications and RESTful APIs.",
        experience: [
            {
                company: "GlobalTech",
                position: "Full Stack Developer",
                duration: "2020 - Present"
            },
            {
                company: "InnovateX",
                position: "Backend Developer",
                duration: "2017 - 2020"
            }
        ],
        education: "M.S. in Computer Applications, University of Technology",
        contact: {
            email: "orvile.steve@example.com",
            phone: "+91 76543 21098"
        }
    },
    {
        id: 4,
        name: "Tharun Kumar",
        image: "images/fl-4.png",
        role: "WordPress Developer",
        rating: 4.6,
        hourlyRate: "₹800/hr",
        completedProjects: 92,
        skills: ["WordPress", "PHP", "HTML", "CSS", "jQuery"],
        about: "WordPress expert with extensive experience in theme customization, plugin development, and performance optimization. Focused on delivering custom WordPress solutions for businesses.",
        experience: [
            {
                company: "WebSolutions",
                position: "WordPress Developer",
                duration: "2021 - Present"
            },
            {
                company: "DigitalCraft",
                position: "Web Developer",
                duration: "2018 - 2021"
            }
        ],
        education: "Bachelor in Computer Applications, Delhi University",
        contact: {
            email: "tharun.kumar@example.com",
            phone: "+91 65432 10987"
        }
    }
];

// Store profile data in localStorage to access from profile page
document.addEventListener('DOMContentLoaded', function() {
    // Save profile data to localStorage
    localStorage.setItem('freelancerProfiles', JSON.stringify(freelancerProfiles));
    
    // Add event listeners to all "View Profile" buttons
    const profileButtons = document.querySelectorAll('.fl-box a#g-btn');
    if (profileButtons) {
        profileButtons.forEach((button, index) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the freelancer ID
                const freelancerId = index + 1;
                
                // Store selected freelancer ID in localStorage
                localStorage.setItem('selectedFreelancerId', freelancerId);
                
                // Navigate to profile page
                window.location.href = 'profile.html';
            });
        });
    }
    
    // Check if we're on the profile page
    const profileContainer = document.getElementById('profile-container');
    if (profileContainer) {
        // Get selected freelancer ID from localStorage
        const selectedId = localStorage.getItem('selectedFreelancerId');
        
        if (selectedId) {
            // Get all freelancer profiles from localStorage
            const profiles = JSON.parse(localStorage.getItem('freelancerProfiles'));
            
            // Find the selected freelancer's profile
            const selectedProfile = profiles.find(profile => profile.id == selectedId);
            
            if (selectedProfile) {
                displayProfile(selectedProfile);
            }
        }
    }
});

// Function to display profile information
function displayProfile(profile) {
    const profileContainer = document.getElementById('profile-container');
    
    // Create skills HTML
    let skillsHTML = '';
    profile.skills.forEach(skill => {
        skillsHTML += `<span id="key">${skill}</span>`;
    });
    
    // Create experience HTML
    let experienceHTML = '';
    profile.experience.forEach(exp => {
        experienceHTML += `
            <div class="experience-item">
                <h4>${exp.position}</h4>
                <p>${exp.company} | ${exp.duration}</p>
            </div>
        `;
    });
    
    // Build profile HTML
    profileContainer.innerHTML = `
        <div class="profile-header">
            <div class="profile-image">
                <img src="${profile.image}" alt="${profile.name}">
            </div>
            <div class="profile-info">
                <h2>${profile.name}</h2>
                <p class="role">${profile.role}</p>
                <div class="profile-stats">
                    <div class="stat">
                        <span class="stat-value">${profile.rating}</span>
                        <span class="stat-label">Rating</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${profile.completedProjects}</span>
                        <span class="stat-label">Projects</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${profile.hourlyRate}</span>
                        <span class="stat-label">Rate</span>
                    </div>
                </div>
            </div>
            <br><br>
            <a href="#contact" id="g-btn" class="hire-btn">Hire Me</a>
        </div>
        
        <div class="profile-body">
            <div class="profile-section">
                <br><br>
                <h3>About Me</h3>
                <p>${profile.about}</p>
            </div>
            
            <div class="profile-section">
            <br><br>
                <h3>Skills</h3>
                <div class="skills-container">
                    ${skillsHTML}
                </div>
            </div>
            <br><br>
            
            <div class="profile-section">
                <h3>Experience</h3>
                <div class="experience-container">
                    ${experienceHTML}
                </div>
            </div>
            
            <div class="profile-section">
                <h3>Education</h3>
                <p>${profile.education}</p>
            </div>
            
            <div class="profile-section" id="contact">
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> ${profile.contact.email}</p>
                <p><strong>Phone:</strong> ${profile.contact.phone}</p>
            </div>
        </div>
    `;
}