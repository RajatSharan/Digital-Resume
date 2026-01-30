/**
 * RAJAT SHARAN - RESUME APPLICATION
 * This file implements a professional, printable resume using vanilla JS and CSS.
 * It contains the detailed professional history and technical expertise of Rajat Sharan.
 */

const createResumeApp = () => {
    // Prevent double execution
    if (document.getElementById('resume-app')) return;

    const app = document.createElement('main');
    app.id = 'resume-app';
    app.className = 'resume-page';

    // Add professional styles
    const styles = document.createElement('style');
    styles.innerHTML = `
        :root {
            --text-color: #000;
            --line-color: #000;
            --font-main: 'Libre Baskerville', serif;
            --bg-color: #f0f0f0;
        }

        * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact;
        }

        body {
            background-color: var(--bg-color);
            font-family: 'Times New Roman', Times, serif; /* Fallback for Libre Baskerville */
            color: var(--text-color);
            line-height: 1.5;
            margin: 0;
            padding: 20px 0;
        }

        .resume-page {
            width: 210mm;
            min-height: 297mm;
            padding: 15mm 20mm;
            margin: 0 auto;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        header {
            text-align: center;
            margin-bottom: 25px;
        }

        h1 {
            font-size: 24pt;
            letter-spacing: 2px;
            margin: 0 0 8px 0;
            text-transform: uppercase;
            font-weight: 400;
        }

        .contact-info {
            font-size: 10pt;
            display: flex;
            justify-content: center;
            gap: 15px;
            align-items: center;
            flex-wrap: wrap;
        }

        .contact-info a {
            text-decoration: none;
            color: inherit;
        }

        section {
            margin-bottom: 18px;
        }

        h2 {
            font-size: 13pt;
            margin: 0;
            font-weight: 700;
            text-transform: uppercase;
        }

        .divider {
            height: 1px;
            background-color: var(--line-color);
            margin: 2px 0 10px 0;
        }

        .entry {
            margin-bottom: 12px;
        }

        .row-between {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
        }

        .institution, .job-title, .project-title { 
            font-weight: bold; 
            font-size: 10.5pt; 
        }

        .location, .date { 
            font-size: 9.5pt; 
        }

        .degree, .company { 
            font-style: italic; 
            font-size: 10pt; 
        }

        .summary-text {
            font-size: 10pt;
            text-align: justify;
            margin: 0;
        }

        ul {
            margin: 4px 0 0 18px;
            padding: 0;
            list-style-type: disc;
        }

        li {
            font-size: 9.5pt;
            margin-bottom: 3px;
            text-align: justify;
        }

        .skills-container p {
            font-size: 10pt;
            margin: 4px 0;
        }

        .skills-container b {
            font-weight: 700;
        }

        @media print {
            body { background: none; padding: 0; }
            .resume-page { 
                margin: 0; 
                box-shadow: none;
                width: 100%;
                padding: 10mm 15mm;
            }
        }
    `;
    document.head.appendChild(styles);

    // Link for Font
    const fontLink = document.createElement('link');
    fontLink.href = "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // Header Content
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>RAJAT SHARAN</h1>
        <div class="contact-info">
            <span>+91-8692985111</span>
            <span>errajatsharan@gmail.com</span>
            <span><a href="https://linkedin.com/in/rajat-sharan-15a19244" target="_blank">LinkedIn</a></span>
            <span><a href="https://github.com/RajatSharan" target="_blank">Github</a></span>
        </div>
    `;
    app.appendChild(header);

    // Sections Definition
    const sections = [
        {
            id: 'summary',
            title: 'Summary',
            content: `
                <p class="summary-text">
                    Senior Test Specialist with 11+ years of hands-on experience in QA automation,
                    test strategy, and quality engineering for enterprise-scale applications.
                    Expertise in building scalable automation frameworks using Playwright,
                    Cypress, and WebdriverIO with TypeScript, integrating CI/CD pipelines,
                    and driving measurable improvements in release quality, defect reduction,
                    and delivery speed. Strong collaborator with proven experience working
                    closely with engineering, product, and DevOps teams.
                </p>`
        },
        {
            id: 'skills',
            title: 'Technical Skills',
            content: `
                <div class="skills-container">
                    <p><b>Programming Language :</b> JavaScript, TypeScript</p>
                    <p><b>Automation :</b> Playwright, Cypress, WebdriverIO, Protractor, REST Assured</p>
                    <p><b>Frameworks :</b> BDD, Cucumber, Page Object Model (POM), JUnit, Mocha, Chai</p>
                    <p><b>Quality Engineering :</b> Automation Testing, API Testing, Functional Testing, UI Testing, Regression, Smoke, and Sanity Testing</p>
                    <p><b>CI/CD & Tooling :</b> Jenkins, GitHub Actions, Sauce Labs, BrowserStack, Jira, Automated Test Execution, Defect Tracking</p>
                    <p><b>Methodologies :</b> Agile, Scrum, Kanban, Feature-Driven Development (FDD)</p>
                </div>`
        },
        {
            id: 'experience',
            title: 'Work Experience',
            content: `
                <div class="entry">
                    <div class="row-between">
                        <span class="job-title">Test Lead</span>
                        <span class="date"><b>Nov, 2022 - Present</b></span>
                    </div>
                    <div class="row-between">
                        <span class="company">Coforge Pvt. Ltd</span>
                        <span class="location">Noida, India</span>
                    </div>
                    <ul>
                        <li>Designed and developed a scalable Playwright automation framework using TypeScript for enterprise web applications</li>
                        <li>Integrated automation suites with Jenkins and GitHub Actions to enable continuous testing in CI/CD pipelines</li>
                        <li>Automated E2E and API test scenarios, increasing regression coverage by 35% and reducing execution time by 55%</li>
                        <li>Implemented robust selectors, fixtures, retries, and reporting to significantly reduce flaky tests</li>
                        <li>Collaborated closely with developers to enable shift-left testing and early defect detection</li>
                        <li>Migrated legacy Cypress-based framework to Playwright, improving stability and execution speed</li>
                        <li>Mentored junior engineers on automation best practices and framework usage</li>
                    </ul>
                </div>

                <div class="entry">
                    <div class="row-between">
                        <span class="job-title">Senior QA Automation Engineer</span>
                        <span class="date"><b>Oct 2016 – Oct 2022</b></span>
                    </div>
                    <div class="row-between">
                        <span class="company">Dotsquares</span>
                        <span class="location">Jaipur, Rajasthan</span>
                    </div>
                    <ul>
                        <li>Built and enhanced automation frameworks using Cypress and WebdriverIO</li>
                        <li>Improved execution speed by 30% through framework optimization and parallel runs.</li>
                        <li>Automated API validations using Postman and SoapUI to ensure backend reliability.</li>
                        <li>Executed cross-browser, regression, and smoke test suites across multiple environments.</li>
                        <li>Integrated automated tests with CI pipelines and maintained test stability.</li>
                        <li>Guided junior QA engineers in automation scripting and debugging.</li>
                    </ul>
                </div>

                <div class="entry">
                    <div class="row-between">
                        <span class="job-title">QA Engineer</span>
                        <span class="date"><b>July 2014 – Oct 2016</b></span>
                    </div>
                    <div class="row-between">
                        <span class="company">Datamatics Global Services</span>
                        <span class="location">Mumbai</span>
                    </div>
                    <ul>
                        <li>Performed functional and regression testing for MS Dynamics CRM, ensured robust validation of core business workflows.</li>
                        <li>Automated UI test scenarios using Selenium, boosted testing efficiency and significantly reduced manual effort.</li>
                        <li>Improved defect lifecycle management by streamlining resolution processes and strengthening collaboration between QA and Development Teams.</li>
                        <li>Created and executed test scripts in alignment with Agile delivery practices to support rapid, iterative releases.</li>
                    </ul>
                </div>`
        },
        {
            id: 'achievements',
            title: 'Key Achievements',
            content: `
                <ul>
                    <li>Achieved automation coverage for 85% of regression cases, shrinking the test cycle duration from 10 days to 5 days.</li>
                    <li>Led migration to Playwright, resulted in 30% uplift in execution speed and a more stable, scalable automation framework.</li>
                    <li>Managed optimization of CI/CD pipelines deployment quality, reduced release-related issues by 40%.</li>
                </ul>`
        },
        {
            id: 'certifications',
            title: 'Certifications',
            content: `
                <ul>
                    <li>Certified Scrum Product Owner (CSPO)</li>
                    <li>Certified Scrum Master(CSM)</li>
                    <li>ISTQB Certified Tester – Foundation Level</li>
                </ul>`
        },
        {
            id: 'education',
            title: 'Education',
            content: `
                <div class="entry">
                    <div class="row-between">
                        <span class="institution">Rajasthan Technical University</span>
                        <span class="location">Jaipur</span>
                    </div>
                    <div class="row-between">
                        <span class="degree">Bachelor of Technology in Computer Science & Engineering</span>
                        <span class="date">July 2010 - June 2013</span>
                    </div>
                </div>`
        }
    ];

    // Build sections
    sections.forEach(sec => {
        const sectionWrapper = document.createElement('section');
        sectionWrapper.id = sec.id;
        
        const h2 = document.createElement('h2');
        h2.textContent = sec.title;
        
        const divider = document.createElement('div');
        divider.className = 'divider';
        
        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = sec.content;

        sectionWrapper.appendChild(h2);
        sectionWrapper.appendChild(divider);
        sectionWrapper.appendChild(contentDiv);
        app.appendChild(sectionWrapper);
    });

    document.body.appendChild(app);
};

// Application Mounting Logic
const init = () => {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createResumeApp);
    } else {
        createResumeApp();
    }
};

init();