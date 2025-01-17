// Resume Web Application with Modern Template Design and ATS Optimization

const createResumeApp = () => {
    const app = document.createElement('main');
    app.id = 'resume-app';

    // Add modern template styles
    const styles = document.createElement('style');
    styles.innerHTML = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background: linear-gradient(to bottom, #f0f4f8, #d9e2ec);
            color: #333;
            padding: 20px;
        }

        #resume-app {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        header {
            text-align: center;
            background: linear-gradient(to right, #007BFF, #00C6FF);
            color: white;
            padding: 20px 15px;
        }

        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }

        header p {
            font-size: 16px;
        }

        header a {
            color: #f4f4f4;
            text-decoration: underline;
        }

        section {
            padding: 20px;
            margin: 10px;
            border-radius: 8px;
            background: #f9f9f9;
            border: 1px solid #ddd;
            position: relative;
        }

        section h2 {
            font-size: 20px;
            color: #444;
            margin-bottom: 10px;
        }

        section ul {
            list-style-type: disc;
            margin-left: 20px;
        }

        section ul li {
            margin-bottom: 8px;
        }

        section img {
            position: absolute;
            top: 15px;
            right: 15px;
            width: 60px;
            height: 60px;
            opacity: 0.8;
        }

        footer {
            text-align: center;
            padding: 10px;
            font-size: 14px;
            color: #666;
            background: #eaeaea;
            border-top: 1px solid #ccc;
        }

        @media (max-width: 600px) {
            body {
                padding: 10px;
            }

            header h1 {
                font-size: 24px;
            }

            header p {
                font-size: 14px;
            }
        }
    `;
    document.head.appendChild(styles);

    // Add header
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>RAJAT SHARAN</h1>
        <p>Email: <a href="mailto:errajatsharan@gmail.com">errajatsharan@gmail.com</a> | Phone: +91-8692985111</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/rajat-sharan-15a19244" target="_blank">linkedin.com/in/rajat-sharan-15a19244</a> | Portfolio: <a href="https://rajatsharan.github.io/Profile" target="_blank">rajatsharan.github.io/Profile</a></p>
    `;
    app.appendChild(header);

    // Add sections with modern design
    const sections = [
        {
            title: 'Professional Summary',
            content: `Accomplished Automation Tester with over 10 years of experience in driving API and UI automation testing. Expertise in designing and implementing test automation frameworks, optimizing CI/CD pipelines, and delivering scalable, high-performance software solutions.`,
            img: 'https://via.placeholder.com/60?text=PS'
        },
        {
            title: 'Key Skills',
            content: `
                <ul>
                    <li>Automation Testing Tools: Playwright, Cypress, WebdriverIO, Selenium, Postman, RestAssured, SoapUI, APIdog</li>
                    <li>Performance Testing Tools: JMeter, K6</li>
                    <li>Languages & Frameworks: JavaScript, TypeScript, Cucumber, Mocha</li>
                    <li>CI/CD Tools: Jenkins, CircleCI</li>
                    <li>Databases: MySQL</li>
                    <li>CRM Platforms: MS Dynamics CRM, Salesforce</li>
                    <li>Methodologies: Agile, Scrum, TDD, BDD</li>
                    <li>Additional Skills: XPath, CSS Selectors, Channel Integration Testing, API Automation</li>
                </ul>
            `,
            img: 'https://via.placeholder.com/60?text=KS'
        },
        {
            title: 'Professional Experience',
            content: `
                <ul>
                    <li><strong>Test Analyst</strong>, Coforge – Noida (Oct 2022 – Present): Engineered robust UI and API automation frameworks, increasing test coverage by 40%.</li>
                    <li><strong>Senior QA Engineer</strong>, Dotsquares – Jaipur (Nov 2016 – Oct 2022): Automated API workflows ensuring flawless backend functionality.</li>
                    <li><strong>Test Engineer</strong>, Datamatics Global Services – Mumbai (Nov 2014 – Oct 2016): Conducted comprehensive functional and regression testing.</li>
                </ul>
            `,
            img: 'https://via.placeholder.com/60?text=PE'
        },
        {
            title: 'Education',
            content: `B.Tech in Information Technology, Arya Institute of Engineering & Technology, Rajasthan Technical University (2013)`,
            img: 'https://via.placeholder.com/60?text=ED'
        },
        {
            title: 'Certifications',
            content: `
                <ul>
                    <li>Certified Scrum Master (CSM): Scrum Alliance (August 2020)</li>
                    <li>Certified Scrum Product Owner (CSPO): Scrum Alliance (June 2022)</li>
                    <li>ISTQB Foundation Level: ITB India (August 2014)</li>
                </ul>
            `,
            img: 'https://via.placeholder.com/60?text=CT'
        },
        {
            title: 'Achievements',
            content: `
                <ul>
                    <li>Automated 85% of regression tests, reducing test cycle time by 50%.</li>
                    <li>Led the migration to Playwright, resulting in a 30% increase in test execution speed.</li>
                    <li>Recognized with [Employer Award/Recognition] for exceptional contributions to software quality and process optimization.</li>
                </ul>
            `,
            img: 'https://via.placeholder.com/60?text=AC'
        }
    ];

    sections.forEach(section => {
        const sectionEl = document.createElement('section');
        const title = document.createElement('h2');
        title.textContent = section.title;
        const content = document.createElement('div');
        content.innerHTML = section.content;
        const img = document.createElement('img');
        img.src = section.img;
        img.alt = `${section.title} icon`;

        sectionEl.appendChild(img);
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
};

window.onload = createResumeApp;