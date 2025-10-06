const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    // {
    //     name: "Testimonials",
    //     link: "#testimonials",
    // },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    // {
    //     imgPath: "/images/logos/company-logo-6.png",
    // },
    // {
    //     imgPath: "/images/logos/company-logo-7.png",
    // },
    // {
    //     imgPath: "/images/logos/company-logo-8.png",
    // },
    // {
    //     imgPath: "/images/logos/company-logo-9.png",
    // },
    // {
    //     imgPath: "/images/logos/company-logo-10.png",
    // },
    // {
    //     imgPath: "/images/logos/company-logo-11.png",
    // },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [

    {
        review:
            "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Coding & Robotics Coach",
        date: "September 2025 - Present",
        responsibilities: [
            "Tested and reviewed 50+ beta-stage games across PC, console, and mobile for Testify, identifying 100+ critical bugs, including memory spikes, partial rendering UI/UX breaks, using structured test plans and real-time feedback tools.",
            "Earned a 63% increase in quarterly game assignments over 4 years due to consistent, detailed, and high-quality reporting, including real-time issue tracking, post-session forms, and developer debriefs, positioning myself as a top-tier contributor.",
        ],
    },
    {
        review:
            "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo1.png",
        title: "Game Tester",
        date: "June 2021 - Present",
        responsibilities: [
            "Tested and reviewed 50+ beta-stage games across PC, console, and mobile for Testify, identifying 100+ critical bugs, including memory spikes, partial rendering UI/UX breaks, using structured test plans and real-time feedback tools.",
            "Earned a 63% increase in quarterly game assignments over 4 years due to consistent, detailed, and high-quality reporting, including real-time issue tracking, post-session forms, and developer debriefs, positioning myself as a top-tier contributor.",
        ],
    },

    {
        review:
            "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Data Analyst",
        date: "March 2022 - December 2024",
        responsibilities: [
            "Improved the quality of geographic machine learning models by analyzing and scoring digital content (maps, audio, news, relevance signals), directly contributing to training data pipelines and enhancing model precision and data integrity.",
            "Verified and validated location-based data through systematic testing, comparison, and content tagging, boosting the usability and accuracy of digital maps used by millions of global users.",
        ],
    },
    {
        review:
            "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "Student Technical Assistant",
        date: "March 2019 - May 2020",
        responsibilities: [
            "Strengthened security and reliability for campus computer labs by introducing step-by-step security checklists and automated monitoring, cutting security incidents by 20% and reducing emergency support calls.",
            "Kept 1500+ student workstations running smoothly by rolling out timely software updates and patches, boosting overall system uptime by 15% and preventing classroom interruptions.",
            "Accelerated new-computer turnaround by partnering with IT and academic staff to simplify the imaging playbook; trimmed the setup time per PC by 40%, so labs were ready for students sooner.",
        ],
    },
    {
        review:
            "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo01.png",
        title: "Research Assistant",
        date: "January 2020 - June 2021",
        responsibilities: [
            "Guided students through coding challenges across eight STEM courses by debugging code, setting up tools (e.g., VS Code, Eclipse, GitHub, BlueJ), and simplifying core concepts in Python, Java, C++, and SQL, boosting lab grades by 150%.",
            "Created pre-lab tutorial videos with faculty to address common setup roadblocks, helping 300+ students install development tools before class, reducing lab downtime, and increasing early assignment completion rates."
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    // {
    //     name: "insta",
    //     url: "https://www.instagram.com/",
    //     imgPath: "/images/insta.png",
    // },
    // {
    //     name: "fb",
    //     url: "https://www.facebook.com/",
    //     imgPath: "/images/fb.png",
    // },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/sahillalani070/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};