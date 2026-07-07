// Site-wide constants — sourced from resume & LinkedIn (May 2026).

// Update `site` in astro.config.mjs to your production URL before deploying.
export const SITE_URL = 'https://johnpranoy7.dev';
export const SITE_TITLE = 'John Pranoy Yalla';
export const SITE_DESCRIPTION =
	'Full Stack Software Engineer with 7+ years building enterprise applications on AWS and OpenShift. Expertise in Spring Boot microservices, event-driven Kafka systems, and applied AI with Spring AI. MS Software Engineering, Kennesaw State University.';

export const PERSON = {
	name: 'John Pranoy Yalla',
	title: 'Full Stack Software Engineer',
	experience: '7+ years',
	location: 'Atlanta, GA',
	email: 'johnpranoy7@gmail.com',
	phone: '+1 678-249-9518',
	availability: 'Open to full-time Software Engineer / Full Stack roles',
	education: 'M.S. Software Engineering, Kennesaw State University (May 2026)',
};

export const SOCIAL = {
	github: 'https://github.com/johnpranoy7',
	linkedin: 'https://linkedin.com/in/johnpranoy7',
	email: `mailto:${PERSON.email}`,
};

export const RESUME = {
	url: '/resume.pdf',
	label: 'View Resume',
};

export const PROJECT_CATEGORIES = {
	ai: 'AI & LLM',
	microservices: 'Microservices & Backend',
	games: 'Games & Interactive',
	research: 'Research & Tools',
} as const;

export type ProjectCategory = keyof typeof PROJECT_CATEGORIES;

export const PROJECT_CATEGORY_ORDER: ProjectCategory[] = [
	'ai',
	'microservices',
	'games',
	'research',
];

export const SKILLS: { category: string; items: string[] }[] = [
	{
		category: 'Languages',
		items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
	},
	{
		category: 'Backend',
		items: ['Spring Boot', 'Spring AI', 'GraphQL', 'Microservices', 'Hibernate / JPA'],
	},
	{
		category: 'Frontend',
		items: ['React', 'Angular', 'HTML5 / CSS3', 'Bootstrap'],
	},
	{
		category: 'AI & LLM',
		items: ['RAG Pipelines', 'Tool Calling', 'Pinecone / pgvector', 'Prompt Engineering'],
	},
	{
		category: 'Cloud & DevOps',
		items: ['AWS', 'Docker', 'Kubernetes / OpenShift', 'Jenkins / GitHub Actions', 'CI/CD'],
	},
	{
		category: 'Messaging & Data',
		items: ['Apache Kafka', 'Redis', 'PostgreSQL', 'Elasticsearch', 'MongoDB'],
	},
];

export type ExperienceType = 'work' | 'education';

export interface ExperienceEntry {
	title: string;
	organization: string;
	startDate: string;
	endDate: string;
	description: string;
	type: ExperienceType;
	tags?: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
	{
		title: 'M.S. Software Engineering',
		organization: 'Kennesaw State University',
		startDate: 'Aug 2024',
		endDate: 'May 2026',
		type: 'education',
		description:
			'Graduate Teaching Assistant for undergraduate Python — led lab sessions and code reviews. Graduate Research Assistant on SBFL fault localization (Maven plugin with PITest) and Unity VR consumer behavior research. Capstone: production-grade conversational AI with Spring AI, RAG, and an LLM-as-Judge layer. Co-authored papers at ACM VRST \'25 and IEEE INFOCOM 2025.',
		tags: ['Python', 'Spring AI', 'Java', 'Unity', 'Research'],
	},
	{
		title: 'Senior Full Stack Software Engineer',
		organization: 'Evoke Technologies (Client: CSC, USA)',
		startDate: 'Apr 2021',
		endDate: 'Jul 2024',
		type: 'work',
		description:
			'Owned end-to-end development across the full SDLC. Built RESTful APIs and GraphQL endpoints with Spring Boot microservices (~30% faster response times). Implemented Kafka event-driven workflows and Redis caching (~40% latency reduction). Refactored a legacy monolith into Docker/OpenShift microservices with zero-downtime Jenkins CI/CD. Delivered an Angular 14 SPA with Elasticsearch search, OAuth 2.0/JWT auth, and 80%+ test coverage.',
		tags: ['Java', 'Spring Boot', 'Angular', 'Kafka', 'OpenShift'],
	},
	{
		title: 'Java Software Engineer',
		organization: 'Capgemini (Client: MUFG Union Bank, USA)',
		startDate: 'Dec 2018',
		endDate: 'Apr 2021',
		type: 'work',
		description:
			'Progressed from Intern, to Software Engineer and finally to Senior Software Engineer. Modernized legacy banking applications into event-driven microservices with Java, Spring Boot, and Kafka. Deployed to AWS (EC2, S3, RDS). Optimized SQL and stored procedures (~35% batch runtime reduction). Built Splunk dashboards that cut MTTR by ~50% and Selenium automation in Jenkins that shrank QA cycles from days to under a day.',
		tags: ['Java', 'Spring Boot', 'Kafka', 'AWS', 'Splunk'],
	},
];

export const CERTIFICATIONS = [
	{
		name: 'AWS Cloud Practitioner',
		issuer: 'Amazon Web Services',
		status: 'In progress',
	},
	{
		name: 'Certified Junior Angular Developer',
		issuer: 'Angular Training',
		certificateUrl:
			'https://certificates.dev/angular/certificates/ba2572b7-fed4-4ce1-b878-6d5ff0d7c0bf',
	},
	{
		name: 'Oracle Certified Java SE Developer (OCJP)',
		issuer: 'Oracle',
	},
];
