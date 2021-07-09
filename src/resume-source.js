const developerInfo = {
  name: "Ali Taee",
  title: "Front-end Developer",
  about:
    "I am a Front-end Developer with 5 years of experience. I enjoy every aspect of the job from the implement user interface to advanced JavaScript topics. I have a passion to work on side projects to learn more and create new things. My interests are reading novels, music, and photography.",
}

const skill = [
  {
    label: "Non-technical Skills",
    skills: [
      { id: 4, title: "Time Management" },
      { id: 0, title: "Jira" },
      { id: 1, title: "Scrum" },
      { id: 5, title: "Agile Development" },
      { id: 2, title: "Trello" },
      { id: 3, title: "Team Work" },
      { id: 6, title: "Communication" },
    ],
  },
  {
    label: "Technical",
    skills: [
      { id: 0, title: "HTML" },
      { id: 1, title: "CSS" },
      { id: 2, title: "CSS Processors" },
      { id: 15, title: "Responsive Design" },
      { id: 3, title: "jQuery" },
      { id: 4, title: "JavaScript" },
      { id: 14, title: "TypeScript" },
      { id: 6, title: "React" },
      { id: 5, title: "SPA" },
      { id: 7, title: "Redux" },
      { id: 8, title: "Socket.IO" },
      { id: 9, title: "REST API" },
      { id: 10, title: "E2E Testing" },
      { id: 11, title: "Gulp" },
      { id: 12, title: "Parcel.js" },
      { id: 13, title: "Webpack" },
    ],
  },
  {
    label: "WordPress",
    skills: [
      { id: 0, title: "WordPress Development" },
      { id: 1, title: "WP Theme Development" },
      { id: 2, title: "WP Plugin Development" },
    ],
  },
]

const workExperience = [
  {
    id: 4,
    title: "Front-end Developer",
    companyName: "Snappfood",
    companyDescription:
      "Snappfood is largest online food ordering and grocery shopping platforms in Iran",
    link: "https://snappfood.ir/",
    city: "Tehran, Iran",
    time: "Feb 2021 – Present",
    work: [
      "Worked in Agile team mainly using Scrum within the Spotify model.",
      "Worked in team closely with designers, developers, QA engineers, scrum master, and product owners.",
      "Created a document for onboarding new developers.",
      "Developed new features for mobile and desktop application.",
    ],
    tech: [
      "HTML, CSS, SCSS, Styled components, BEM",
      "JavaScript, ES6+, TypeScript, React, React Router, Redux, Redux-Saga, Next.js, Storybook.",
      "Webpack, Babel, ESlint, Prettier",
      "Git and GitLab",
    ],
  },
  {
    id: 3,
    title: "Front-end Developer",
    companyName: "Rasa labs",
    companyDescription:
      "Rasa labs was CCTV systems and Parental control systems",
    city: "Tehran, Iran",
    time: "Dec 2019 – Jan 2021",
    work: [
      "Created dashboards for our internal projects using React.",
      "Maintained large legacy codes in old projects and refactor theme for better performance and fix bugs.",
    ],
    tech: [
      "HTML, CSS, SCSS, JSS, BEM",
      "JavaScript, ES6+, React, React Router, Redux, Material-UI, react-i18next, Socket.IO, Context API, React Hooks",
      "ESlint, Prettier",
      "Git and GitLab",
    ],
  },
  {
    id: 2,
    title: "WordPress Developer / Front-end Developer",
    companyName: "Nabzino",
    companyDescription: "Nabzino was a digital marketing agency",
    link: "https://www.nabzino.com/",
    city: "Tehran, Iran",
    time: "Feb 2019 – Aug 2019",
    work: [
      "Created dashboard for one of our internal projects using React.",
      "Converted UI landing design into WordPress page.",
      "Developed game campaign with team of developers and designers in tight deadline. Users enter their phone number and name then choose between their favorite game characters. At the end, base on user votes and their scores we lottery and gave Play station 4. This project created using Vue.js.",
      "Created a WordPress shortcut posts plugin and video gallery plugin for one of our customers daraje.com.",
    ],
    tech: [
      "HTML, CSS, SCSS, JSS, BEM",
      "JavaScript, ES6+, React, Vue, Redux, Material-UI, react-i18next",
      "WordPress, PHP, WordPress plugin Development",
      "Git and GitLab, Bitbucket",
    ],
  },
  {
    id: 1,
    title: "WordPress Developer / Front-end Developer",
    companyName: "Arta Seo",
    companyDescription:
      "Arta Seo was a website development company and digital marketing agency.",
    link: "https://artaseo.ir/",
    city: "Esfahan, Iran",
    time: "Mar 2018 – Feb 2019",
    work: [
      "Converted UI designs into WordPress website.",
      "Helped interns to learn HTML, CSS, and WordPress.",
      "Introduced WordPress plugin Development to the company.",
      "Created a WordPress plugin for Novinarta.com which is one of Arta Seo customers. This plugin to enter the buildings’ info such as floors, area, location, image gallery and etc, to show the buildings’ to the customers.",
    ],
    tech: [
      "HTML, CSS",
      "JavaScript, jQuery",
      "WordPress, WooCommerce, PHP, WordPress plugin Development, ACF, Custom Post Types",
    ],
  },
  {
    id: 0,
    title: "WordPress Developer / Website Manager",
    companyName: "Asr-e Digital",
    companyDescription: "Asr-e Digital was an online e-commerce.",
    link: "https://www.asrdigital.ir/",
    time: "2014 – 2017",
    city: "Esfahan, Iran",
    work: [
      "Website management.",
      "UI/UX design.",
      "Content editing.",
      "WordPress Development.",
    ],
    tech: ["HTML, CSS", "JavaScript, jQuery", "WordPress"],
  },
]

const contacts = [
  {
    id: 0,
    href: "mailto:ali.taee.72@gmail.com",
    icon: "icon-envelope",
    text: "ali.taee.72@gmail.com",
  },
  {
    id: 1,
    href: "https://www.linkedin.com/in/alitaee/",
    icon: "icon-linkedin",
    text: "Linkedin",
  },
  {
    id: 2,
    href: "https://stackoverflow.com/users/9218227/ali-taee",
    icon: "icon-stack-overflow",
    text: "Stack overflow",
  },
  {
    id: 3,
    href: "https://github.com/AliTaee",
    icon: "icon-github",
    text: "Github",
  },
]

export { skill, contacts, developerInfo, workExperience }
