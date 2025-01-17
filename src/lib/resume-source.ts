import profileImage from '$lib/assets/images/profile-image.jpg'

const domain = 'https://www.alitaee.dev'

const me = {
	name: 'Ali Taee',
	title: 'Senior Front-end Engineer',
	profileImage,
	about:
		"<span class='text-6xl float-left pr-4'>:}</span> it's my symbol. The bracket } represents code, and combined with colon : it shows happy smiling face of simple developer with 9 years of experience, who admire simple, clean and well-tested code in Front-end development, which I see as a perfect blend of art and technology. While I've primarily worked with React throughout my career, I’m not married to it. In fact HTML, CSS and JavaScript are my main sides of a prism in front-end development, and I'm always open and eager to learn new technologies such as Svelte. I have a keen eye for detail, passion for knowledge sharing, entrepreneur spirit for innovation. I love creating meaningful, interactive user experiences. I enjoy Music, Books, Photography, Board games, Running, and Travel.",
	shortAbout: "I'm a Senior Front-end Engineer with more than 9 years of experience. who admire simple, clean and well-tested code in Front-end development, which I see as a perfect blend of art and technology."
}

const seoTags = {
	home: {
		pageTitle: `${me.name} | Portfolio`,
		pageDescription: me.shortAbout

	},
	resume: {
		pageTitle: `${me.name} | Resume`,
		pageDescription: `${me.name} resume, including experience, educations, and skills`
	},
	blog: {
		pageTitle: `${me.name} | Blog`,
		pageDescription: `Latest blog posts by ${me.name}`
	},
	now: {
		pageTitle: `${me.name} | Now`,
		pageDescription: `What's happening now in ${me.name} life`
	}
}

const skills = [
	'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Svelte', 'Three.js', 'Next.Js', 'NodeJs', 'Code review', 'Team work', 'Critical thinking', 'SOLID', 'Redux',
	'Redux-Toolkit', 'React-Query', 'Git', 'E2E Testing', 'Unit Testing', 'Jest', 'Testing Library', 'Cypress', 'Playwright', 'Storybook', 'Responsive Design',
	'Jira', 'Scrum', 'Agile Development', 'Socket.IO', 'REST API', 'Parcel.Js', 'Webpack', 'Rollup', 'Vite', 'Yarn', 'NPM'
]

const experiences = [
	{
		title: 'Senior Front-end Engineer',
		companyName: 'CLIQ Digital',
		companyDescription: 'CLIQ Digital is a leading digital entertainment company.',
		link: 'https://cliqdigital.com/',
		city: 'Amsterdam, Netherlands',
		time: 'March 2023 – Present',
		achievements: [
			'Lead the front-end team, onboard new developers, conduct code reviews, and engage in pair programming sessions.',
			'Successfully launched CMS and licence management tool for the company, which is responsible for managing 500,000 items. Architecture design of Content Management System using Domain-driven design (DDD), Next.js, React-Query, MUI, TypeScript, and Storybook, following clean code principles, best practices, unit testing, and documentation.',
			'Introducing a component library to the company and developing common components as packages to enhance reusability across projects.',
			'Mentor and coach junior developers to learn fundamentals and best practices in front-end development.'
		]
	},
	{
		title: 'Senior Front-end Engineer',
		companyName: 'Passionate People',
		companyDescription: 'Passionate People is a JavaScript consultancy in the Netherlands.',
		link: 'https://passionatepeople.io/',
		city: 'Amsterdam, Netherlands',
		time: 'Sep 2022 – Mar 2023',
		achievements: [
			'Assisted backstage at the VueJs and JsWorld conference in 2023.',
			'Maintained the primary website and introduced new features.',
			'Developed internal dashboards using technologies such as React, Next.js, TypeScript, and Storybook.'
		]
	},
	{
		title: 'Senior Front-end Developer',
		companyName: 'Snappfood',
		companyDescription:
			'Snappfood with 2.5 million users per day is the largest online food ordering and grocery shopping platform in Iran.',
		link: 'https://snappfood.ir/',
		city: 'Tehran, Iran',
		time: 'Jul 2021 – Aug 2022',
		achievements: [
			"Working with 30 front-end engineers at Iran's largest online food ordering and grocery platform provided invaluable learning opportunities from colleagues with diverse experiences. Through frequent pair programming sessions, cross-team feature deliveries, and weekly knowledge-sharing meetings, I significantly enhanced my skills and broadened my expertise.",
			'Worked in a team of 10 people closely with designers, developers, QA engineers, scrum masters, and product managers using Scrum.',
			'Developed features and maintained mobile and desktop applications using React, TypeScript, Next.js, SCSS, Redux, Storybook, Jest, Testing Library.',
			'Onboarded new developers and create a document for onboarding.',
			'Introduced unit and end-to-end (E2E) testing through five technical presentations, leading to fewer bugs and improved quality in the application.'
		]
	},
	{
		title: 'Front-end Developer',
		companyName: 'Pishgam Vista',
		companyDescription: 'Pishgam Vista provide CCTV systems and Parental control systems.',
		city: 'Tehran, Iran',
		time: 'Dec 2019 – Jan 2021',
		achievements: [
			'Created front-end projects using JavaScript, React, Material-UI, Redux-thunk, Socket.IO, REST API.',
			'Reduced development time by creating common components.',
			'Interacted with 8 other group members of designers, developers, product owners',
			'Debugged 3 large legacy codes and refactored them for better performance and clean code.'
		]
	},
	{
		title: 'Front-end Developer',
		companyName: 'Nabzino',
		companyDescription: 'Nabzino is a digital marketing agency.',
		link: 'https://www.nabzino.com/',
		city: 'Tehran, Iran',
		time: 'Mar 2019 – Sep 2019',
		achievements: [
			'Created dashboards for our internal projects using React.',
			'Converted UI landing design into responsive web page.',
			'Launched a game campaign with a team of developers and designers within a tight deadline, using Vue.js.',
			'Developed video gallery using HTML, CSS, Flexbox, and JavaScript.'
		]
	},
	{
		title: 'Front-end Developer / WordPress Developer',
		companyName: 'Arta Seo',
		companyDescription: 'Arta Seo is a website development company.',
		link: 'https://artaseo.ir/',
		city: 'Esfahan, Iran',
		time: 'Mar 2018 – Feb 2019',
		achievements: [
			'Communicated with customers to create their websites based on their needs.',
			'Converted UI designs into WordPress responsive website.',
			'Introduced WordPress plugin development to the company.',
			'Managed and trained a team of 10 interns to learn HTML, CSS, and WordPress.',
			'Reduced data entry time by half by optimizing the website panel.'
		]
	},
	{
		title: 'WordPress Developer / Website Manager',
		companyName: 'Asr-e Digital',
		companyDescription: 'Asr-e Digital is an online e-commerce company.',
		link: 'https://www.asrdigital.ir/',
		time: '2014 – 2017',
		city: 'Esfahan, Iran',
		achievements: [
			'Improved Alexa rank 2 times by creating a blog.',
			'Managed 3 translators and content editing for SEO.',
			'Managed and developed a blog using WordPress.'
		]
	}
]

const socials = [
	{
		href: 'mailto:ali.taei.semiromi@gmail.com',
		icon: 'icon-envelope',
		label: 'Ali.taei.semiromi@gmail.com'
	},
	{
		href: 'https://www.linkedin.com/in/alitaee/',
		icon: 'icon-linkedin',
		label: 'Linkedin'
	},
	{
		href: 'https://github.com/AliTaee',
		icon: 'icon-github',
		label: 'Github'
	}
]

const languages = ['Persian (native)', 'English']

const educations = [
	{
		time: '2014 – 2017',
		fieldOfStudy: 'Computer Software Engineering',
		school: 'Safahan',
		degree: "Associate's degree"
	}
]

export { me, seoTags, skills, experiences, socials, languages, educations, domain }
