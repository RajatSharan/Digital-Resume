const createResumeApp = () => {
    const app = document.createElement('main');
    app.id = 'resume-app';

    // Add modern template styles
    const styles = document.createElement('style');
    styles.innerHTML = `
        /* General Styles & Animations */
        :root {
            --primary-color: #00b09b;
            --secondary-color: #96c93d;
            --text-color: #333;
            --bg-light: #e6e9f0;
            --bg-dark: #c0c6d9;
            --card-bg: white;
            --shadow-light: rgba(0, 0, 0, 0.1);
            --shadow-hover: rgba(0, 0, 0, 0.2);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: var(--text-color);
            padding: 20px;
            transition: background-color 0.5s ease;
        }

        #resume-app {
            max-width: 1000px;
            margin: 0 auto;
            background: var(--card-bg);
            border-radius: 12px;
            box-shadow: 0 8px 16px var(--shadow-light);
            overflow: hidden;
            transition: box-shadow 0.3s ease;
        }

        header {
            text-align: center;
            background: linear-gradient(to right, #00b09b, #96c93d);
            color: white;
            padding: 30px 15px;
            border-radius: 12px 12px 0 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
        }

        header h1 {
            font-size: 2.5em;
            font-weight: 600;
            letter-spacing: 1px;
        }

        header p {
            font-size: 1.1em;
            opacity: 0.9;
            margin-top: 5px;
        }

        header a {
            color: #f4f4f4;
            text-decoration: underline;
        }
        
        .contact-info a {
            transition: color 0.3s ease;
        }
        
        .contact-info a:hover {
            color: #f0f0f0;
        }

        /* Card-based layout for sections */
        section {
            background: var(--card-bg);
            border-radius: 10px;
            margin: 20px;
            padding: 30px;
            box-shadow: 0 4px 8px var(--shadow-light);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        section:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px var(--shadow-hover);
        }

        section h2 {
            font-size: 1.8em;
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 10px;
            margin-bottom: 20px;
            color: var(--primary-color);
            transition: color 0.3s ease;
        }
        
        section h2:hover {
            color: var(--secondary-color);
        }

        ul {
            list-style-type: none;
        }

        li {
            margin-bottom: 10px;
            position: relative;
        }

        /* Skill Bar Enhancements */
        .skill-bar-container {
            background-color: #e0e0e0;
            border-radius: 15px;
            height: 15px;
            overflow: hidden;
        }
        
        .skill-bar {
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
            height: 100%;
            width: 0;
            transition: width 1.5s ease-in-out;
        }
        
        /* Animated icons for skills */
        .skill-icon {
            font-size: 1.2em;
            margin-right: 10px;
            color: var(--primary-color);
            transition: transform 0.3s ease;
        }

        li:hover .skill-icon {
            transform: rotate(5deg) scale(1.1);
        }

        /* Micro-interactions & Transitions */
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        footer {
            text-align: center;
            padding: 20px;
            color: #777;
            font-size: 0.9em;
            margin-top: 20px;
        }

        /* Scroll-to-Top button */
        #scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.5em;
            cursor: pointer;
            box-shadow: 0 4px 8px var(--shadow-hover);
            opacity: 0;
            transition: opacity 0.4s ease, transform 0.3s ease;
            z-index: 1000;
        }

        #scroll-to-top.show {
            opacity: 1;
        }

        #scroll-to-top:hover {
            transform: scale(1.1);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            body {
                padding: 10px;
            }

            #resume-app {
                box-shadow: none;
                border-radius: 0;
            }

            header {
                border-radius: 0;
            }

            section {
                margin: 10px 0;
                padding: 20px;
            }
        }
    `;
    document.head.appendChild(styles);

    // Add title to the resume
    const title = document.createElement('title');
    title.innerText = 'Resume - RAJAT SHARAN';
    document.head.appendChild(title);

    // Add header with profile image
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>RAJAT SHARAN</h1>
        <p class="contact-info">Email: <a href="mailto:errajatsharan@gmail.com">errajatsharan@gmail.com</a> | Phone: +91-8692985111</p>
        <p class="contact-info">LinkedIn: <a href="https://linkedin.com/in/rajat-sharan-15a19244" target="_blank">linkedin.com/in/rajat-sharan-15a19244</a> | Portfolio: <a href="https://rajatsharan.github.io/Profile" target="_blank">rajatsharan.github.io/Profile</a></p>
    `;
    app.appendChild(header);

    // Add sections with modern design
    const sections = [
        {
            title: 'Professional Summary',
            content: `Accomplished Automation Tester with over 11+ years of experience in driving API and UI automation testing. Expertise in designing and implementing test automation frameworks, optimizing CI/CD pipelines, and delivering scalable, high-performance software solutions.`
        },
        {
            title: 'Key Skills',
            content: `
                <ul>
                    <li data-skill-level="95"><span class="skill-icon fas fa-code"></span>Automation Testing Tools: Playwright, Cypress, WebdriverIO, Selenium, Postman, RestAssured, SoapUI, APIdog</li>
                    <li data-skill-level="90"><span class="skill-icon fas fa-chart-line"></span>Performance Testing Tools: JMeter, K6</li>
                    <li data-skill-level="85"><span class="skill-icon fas fa-terminal"></span>Languages & Frameworks: JavaScript, TypeScript, Cucumber, Mocha</li>
                    <li data-skill-level="80"><span class="skill-icon fas fa-cogs"></span>CI/CD Tools: Jenkins, CircleCI</li>
                    <li data-skill-level="75"><span class="skill-icon fas fa-database"></span>Databases: MySQL</li>
                    <li data-skill-level="70"><span class="skill-icon fas fa-users"></span>CRM Platforms: MS Dynamics CRM, Salesforce</li>
                    <li data-skill-level="90"><span class="skill-icon fas fa-handshake"></span>Methodologies: Agile, Scrum, TDD, BDD</li>
                    <li data-skill-level="85"><span class="skill-icon fas fa-network-wired"></span>Additional Skills: XPath, CSS Selectors, Channel Integration Testing, API Automation</li>
                </ul>
            `
        },
        {
            title: 'Professional Experience',
            content: `
                <ul>
                    <li><strong>Test Specialist</strong>, Coforge – Noida (Oct 2022 – Present): Led the development of scalable UI and API automation frameworks, successfully increasing test coverage by 40% and improving testing efficiency.</li>
                    <li><strong>Senior QA Engineer</strong>, Dotsquares – Jaipur (Nov 2016 – Oct 2022): Streamlined backend processes by automating API workflows, which resulted in flawless and efficient functionality.</li>
                    <li><strong>Test Engineer</strong>, Datamatics Global Services – Mumbai (Nov 2014 – Oct 2016): Conducted comprehensive functional and regression testing.</li>
                </ul>
            `
        },
        {
            title: 'Education',
            content: `B.Tech in Information Technology, Arya Institute of Engineering & Technology, Rajasthan Technical University (2013)`
        },
        {
            title: 'Certifications',
            content: `
                <ul>
                    <li>Certified Scrum Master (CSM): Scrum Alliance (August 2020)</li>
                    <li>Certified Scrum Product Owner (CSPO): Scrum Alliance (June 2022)</li>
                    <li>ISTQB Foundation Level: ITB India (August 2014)</li>
                </ul>
            `
        },
        {
            title: 'Achievements',
            content: `
                <ul>
                    <li>Automated 85% of regression tests, reducing test cycle time by 50%.</li>
                    <li>Led the migration to Playwright, resulting in a 30% increase in test execution speed.</li>
                    <li>Recognized with Outstanding Performance Award for exceptional contributions to test automation.</li>
                </ul>
            `
        }
    ];

    sections.forEach(section => {
        const sectionEl = document.createElement('section');
        sectionEl.classList.add('fade-in'); // Add fade-in class
        const title = document.createElement('h2');
        title.textContent = section.title;
        const content = document.createElement('div');
        content.innerHTML = section.content;

        sectionEl.appendChild(title);
        sectionEl.appendChild(content);
        app.appendChild(sectionEl);
    });

    // Add footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        © 2025 RAJAT SHARAN. All Rights Reserved.
    `;
    app.appendChild(footer);

    document.body.appendChild(app);

    // Add scroll-based animations and skill bar fills
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the section to fade in
                entry.target.classList.add('visible');

                // If the section is 'Key Skills', animate the skill bars
                if (entry.target.querySelector('h2').textContent === 'Key Skills') {
                    const skillItems = entry.target.querySelectorAll('[data-skill-level]');
                    skillItems.forEach(item => {
                        const level = item.dataset.skillLevel;
                        const skillBarContainer = document.createElement('div');
                        skillBarContainer.classList.add('skill-bar-container');

                        const skillBar = document.createElement('div');
                        skillBar.classList.add('skill-bar');
                        skillBar.style.width = `${level}%`;

                        skillBarContainer.appendChild(skillBar);
                        item.appendChild(skillBarContainer);
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe all sections for animation
    document.querySelectorAll('section.fade-in').forEach(section => {
        observer.observe(section);
    });

    // Initial check for elements already in view on page load
    document.querySelectorAll('section.fade-in').forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add('visible');
        }
    });

    // Add Scroll-to-Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scroll-to-top';
    scrollToTopBtn.innerHTML = `&uarr;`; // Up arrow character
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

window.onload = createResumeApp;
