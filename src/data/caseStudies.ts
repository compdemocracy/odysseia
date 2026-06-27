// Case study content for the /case-studies collection and detail pages.
// Narratives are adapted (not copied verbatim) from the deployments documented
// at https://compdemocracy.org/Case-studies/, rewritten in a warmer, briefer
// tone. Stats are drawn from those public writeups; verify before launch.

export interface CaseStudyStat {
	value: string;
	label: string;
}

export interface CaseStudy {
	slug: string;
	title: string;
	country: string;
	region: 'Asia' | 'Europe' | 'North America' | 'South America' | 'Oceania';
	sector: 'Government' | 'Civil society' | 'Political movement' | 'Education';
	year: string;
	summary: string;
	participants: string;
	featured?: boolean;
	stats: CaseStudyStat[];
	context: string;
	process: string;
	results: string;
	quote?: {
		text: string;
		attribution: string;
	};
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'vtaiwan',
		title: 'vTaiwan: from protest to policy',
		country: 'Taiwan',
		region: 'Asia',
		sector: 'Government',
		year: '2014–ongoing',
		summary:
			'Born from the 2014 Sunflower Movement, vTaiwan became Polis\u2019 first national-scale deployment — and the longest-running one anywhere.',
		participants: '200K+',
		featured: true,
		stats: [
			{ value: '200K+', label: 'participants' },
			{ value: '2014', label: 'first deployed' },
			{ value: 'National', label: 'scale' },
		],
		context:
			'After the Sunflower Movement, people in Taiwan made a simple demand: better ways to make decisions together. The government agreed, and asked the g0v ("gov zero") civic-tech community to build a listening process that could work at national scale.',
		process:
			'The result was vTaiwan — a multi-stage process that pairs open Polis conversations with in-person stakeholder meetings. Citizens surface and vote on ideas online, and the points of consensus become the starting point for real legislation.',
		results:
			'More than a decade on, vTaiwan is still going. Taiwan has now produced more case studies on using Polis in lawmaking than any other country — shaping rules on everything from ride-sharing to telemedicine.',
	},
	{
		slug: 'aufstehen',
		title: 'Aufstehen: the largest Polis conversation ever',
		country: 'Germany',
		region: 'Europe',
		sector: 'Political movement',
		year: '2018',
		summary:
			'Germany\u2019s Aufstehen movement ran the largest single Polis conversation in the world — to build its platform from members up.',
		participants: '33,547',
		stats: [
			{ value: '33,547', label: 'participants' },
			{ value: '#1', label: 'largest ever' },
			{ value: '2018', label: 'year' },
		],
		context:
			'Aufstehen ("stand up") emerged in the summer of 2018 as a response to the rise of right-wing parties in Germany.',
		process:
			'That autumn, the movement opened a Polis conversation to its members to understand where broad consensus could be built — and to shape its platform around what people actually agreed on.',
		results:
			'With 33,547 participants, it still holds the record for the most people ever in a single Polis conversation — a vivid demonstration of how technology can bring fresh ideas into the democratic process.',
	},
	{
		slug: 'undp-youth',
		title: 'UNDP: the Global South\u2019s largest youth conversation',
		country: 'Bhutan, Pakistan & Timor-Leste',
		region: 'Asia',
		sector: 'Government',
		year: '2020–21',
		summary:
			'The UN Development Programme ran what it called the largest digital engagement in the Global South — with young people, about climate.',
		participants: '30K+',
		stats: [
			{ value: '30K+', label: 'young people' },
			{ value: '3', label: 'countries' },
			{ value: '10M+', label: 'SMS invitations' },
		],
		context:
			'Ahead of COP26, UNDP wanted to hear directly from youth across Bhutan, Pakistan, and Timor-Leste about their priorities for climate action.',
		process:
			'Country offices sent more than 10 million SMS invitations to 15\u201319-year-olds — "raise your voice and let us know your thoughts" — with a link to a Polis conversation.',
		results:
			'Over 30,000 young people took part, offering a working model for how governments and legislatures might consult their citizens on policy at scale.',
	},
	{
		slug: 'uruguay-referendum',
		title: 'Uruguay: consensus beneath a yes/no vote',
		country: 'Uruguay',
		region: 'South America',
		sector: 'Education',
		year: '2020–21',
		summary:
			'Alongside a sprawling national referendum, Uruguay used Polis to find the common ground hiding underneath a yes-or-no question.',
		participants: '16,499',
		stats: [
			{ value: '16,499', label: 'participants' },
			{ value: '295K+', label: 'votes cast' },
			{ value: '<1%', label: 'referendum margin' },
		],
		context:
			'In 2020, Uruguay\u2019s new government packed its entire platform into a single "urgent" bill — over 500 articles, from education to public safety. A quarter of the country signed a petition to send it to a national referendum.',
		process:
			'A 13-person team from Uruguay\u2019s National University — engineers, communicators, and data scientists — ran Polis alongside the referendum to look for something deeper than "yes or no." 16,499 people cast more than 295,000 votes.',
		results:
			'The referendum was lost by less than 1%. But Polis revealed that even where public safety divided people, surprising points of consensus broke through on other issues — bridges between groups who had felt worlds apart.',
	},
	{
		slug: 'klimarat-austria',
		title: 'Klimarat: a climate assembly opens its doors',
		country: 'Austria',
		region: 'Europe',
		sector: 'Government',
		year: '2022',
		summary:
			'Austria\u2019s national climate assembly used Polis to bring thousands more people into the room.',
		participants: '5,000+',
		stats: [
			{ value: '5,000+', label: 'Austrians reached' },
			{ value: '84', label: 'council members' },
			{ value: '2022', label: 'to Parliament' },
		],
		context:
			'Klimarat — Austria\u2019s 84-member National Climate Council — set out to answer one big question: what do we need to do today to live in a climate-friendly tomorrow?',
		process:
			'To hear from far beyond its 84 members, the council ran an open engagement called "The Climate Council asks Austria," reaching over 5,000 people on Polis.',
		results:
			'The resulting crowd-tested recommendations were submitted to the Austrian Parliament in July 2022.',
	},
	{
		slug: 'philippines',
		title: 'The Philippines builds on the Taiwan model',
		country: 'Philippines',
		region: 'Asia',
		sector: 'Civil society',
		year: '2020–ongoing',
		summary:
			'Inspired by Taiwan, the Makati Business Club brought Polis to mayors across the Philippines — and trained staff to run it themselves.',
		participants: '3,000+',
		stats: [
			{ value: '3,000+', label: 'participants' },
			{ value: '6', label: 'cities' },
			{ value: '5', label: 'consultations' },
		],
		context:
			'In 2020, impressed by Taiwan\u2019s pandemic response, the Makati Business Club interviewed Audrey Tang for a "Freedom and Democracy" zine — and started piloting Polis with local governments.',
		process:
			'With trust from mayors thanks to the club\u2019s standing among business leaders, the team led consultations across several cities, and taught government staff to run Polis on their own.',
		results:
			'Five consultations across six cities have reached more than 3,000 people — and the model keeps growing.',
	},
	{
		slug: 'bowling-green',
		title: 'Bowling Green: a city turns the tables on polarization',
		country: 'United States',
		region: 'North America',
		sector: 'Civil society',
		year: '2018',
		summary:
			'When national politics divided a Kentucky city, residents used Polis to find the local common ground that was there all along.',
		participants: '~2,000',
		stats: [
			{ value: '~2,000', label: 'participants' },
			{ value: '3%', label: 'of residents' },
			{ value: '65K', label: 'population' },
		],
		context:
			'A medium-sized city in Kentucky found itself split by national hot-button issues — even on questions that were really about local life.',
		process:
			'Residents turned to Polis to identify the local issues they actually agreed on, then used the resulting map of their collective will to hold officials accountable for acting on it.',
		results:
			'Around 2,000 of the city\u2019s 65,000 residents took part — a 3% participation rate that\u2019s remarkably high for a city, and proof that polarization isn\u2019t the whole story.',
	},
	{
		slug: 'nz-hivemind',
		title: 'New Zealand\u2019s HiveMind shapes real policy',
		country: 'New Zealand',
		region: 'Oceania',
		sector: 'Civil society',
		year: '2016–19',
		summary:
			'A national newspaper\u2019s "HiveMind" ran six Polis conversations — and ended up helping shape government policy.',
		participants: '1,700+',
		stats: [
			{ value: '1,700+', label: 'participants' },
			{ value: '6', label: 'conversations' },
			{ value: '2016–19', label: 'span' },
		],
		context:
			'New Zealand\u2019s Public Engagement Projects teamed up with a feisty national newspaper to tackle thorny topics, from taxation to sugar policy to universal basic income.',
		process:
			'Over six years, the partnership ran six Polis conversations under the HiveMind banner, drawing more than 1,700 participants.',
		results:
			'The approach eventually caught the attention of a national government agency, which used it to help develop real policy.',
	},
	{
		slug: 'demos-uk',
		title: 'Demos: the first nationally representative Polis',
		country: 'United Kingdom',
		region: 'Europe',
		sector: 'Civil society',
		year: '2020',
		summary:
			'The UK think tank Demos ran the first-ever Polis conversation with a nationally representative sample.',
		participants: '997',
		stats: [
			{ value: '997', label: 'participants' },
			{ value: '1st', label: 'representative sample' },
			{ value: '2020', label: 'year' },
		],
		context:
			'Post-Brexit, Demos set out to understand how the UK public felt about data-driven political campaigning.',
		process:
			'Pairing Polis with nationally representative sampling, Demos ran the conversation with 997 participants — and wrote a thorough review of the political theory behind deliberation at scale.',
		results:
			'It was the first time Polis had been combined with a representative sample, opening the door to statistically grounded findings.',
	},
	{
		slug: 'greece-airbnb',
		title: 'Greek cities tackle the Airbnb question',
		country: 'Greece',
		region: 'Europe',
		sector: 'Civil society',
		year: '2023',
		summary:
			'Residents of Athens and Thessaloniki used Polis to find common ground on one of Europe\u2019s thorniest issues: short-term rentals.',
		participants: '944',
		stats: [
			{ value: '944', label: 'residents' },
			{ value: '2', label: 'cities' },
			{ value: '2023', label: 'year' },
		],
		context:
			'Like many European cities, Athens and Thessaloniki have felt the strain of short-term rentals — rising rents, housing shortages, neighborhoods turned tourist-first. But tourism is also about a third of Greece\u2019s economy, which makes the issue genuinely hard.',
		process:
			'A nonprofit called AstyLab (City Lab) used Polis to bring a diverse group of residents together to brainstorm practical fixes and look for convergence on how to regulate Airbnb.',
		results:
			'944 residents took part, surfacing the shared ground that could anchor sensible short-term-rental rules.',
	},
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
	return caseStudies.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(slug: string, count = 3): CaseStudy[] {
	return caseStudies.filter((study) => study.slug !== slug).slice(0, count);
}
