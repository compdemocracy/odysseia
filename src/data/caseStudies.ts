// Case study content for the /case-studies collection and detail pages.
// Placeholder copy where real content is still being sourced from the
// CompDemocracy team. Facts marked TODO should be verified before launch.

export interface CaseStudyStat {
	value: string;
	label: string;
}

export interface CaseStudy {
	slug: string;
	title: string;
	country: string;
	region: 'Asia' | 'Europe' | 'North America' | 'Global';
	sector: 'Government' | 'Civil society' | 'Political movement' | 'Education';
	year: string;
	summary: string;
	participants: string;
	featured?: boolean;
	stats: CaseStudyStat[];
	context: string;
	process: string;
	results: string;
	quote: {
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
			'Born from the Sunflower Movement, vTaiwan used Polis to give hundreds of thousands of citizens a direct voice in national policy.',
		participants: '200K+',
		featured: true,
		stats: [
			{ value: '200K+', label: 'participants' },
			{ value: '26', label: 'issues debated' },
			{ value: '80%', label: 'consensus rate' },
		],
		context:
			'Placeholder. Following the 2014 Sunflower Movement, Taiwan faced a crisis of trust between citizens and government. Contentious issues — from ride-sharing to telemedicine — needed a way to surface broad agreement without devolving into the polarization that dominated traditional channels. (Replace with sourced narrative.)',
		process:
			'Placeholder. The vTaiwan process combined Polis conversations with in-person stakeholder meetings. Citizens contributed and voted on statements; Polis surfaced the opinion landscape; facilitators used the consensus statements as the basis for drafting legislation. (Replace with sourced narrative.)',
		results:
			'Placeholder. The process informed national legislation on ride-sharing, telemedicine, and online alcohol sales, and has been cited internationally as a model for digital democracy. (Replace with sourced outcomes and statistics.)',
		quote: {
			text: 'Polis allowed us to move beyond the loudest voices in the room.',
			attribution: 'Audrey Tang, Former Digital Minister, Taiwan',
		},
	},
	{
		slug: 'bowling-green',
		title: 'Bowling Green: a city finds common ground',
		country: 'United States',
		region: 'North America',
		sector: 'Government',
		year: '2018',
		summary:
			'A mid-sized Kentucky city used Polis for local consensus-building, reaching roughly 3% of residents.',
		participants: '~2,000',
		stats: [
			{ value: '~2,000', label: 'participants' },
			{ value: '3%', label: 'of residents' },
			{ value: '65K', label: 'population' },
		],
		context:
			'Placeholder. Bowling Green, Kentucky wanted to understand residents\u2019 priorities for the city\u2019s future across a diverse and growing population. (Replace with sourced narrative.)',
		process:
			'Placeholder. The city ran a Polis conversation open to all residents, gathering and clustering opinions on local issues over a defined engagement window. (Replace with sourced narrative.)',
		results:
			'Placeholder. Roughly 2,000 of the city\u2019s 65,000 residents participated \u2014 a notably high engagement rate for a municipal consultation. (Replace with sourced outcomes.)',
		quote: {
			text: 'Placeholder pull quote from a Bowling Green organizer or participant.',
			attribution: 'TODO \u2014 source attribution',
		},
	},
	{
		slug: 'demos-uk',
		title: 'Demos: the first nationally representative Polis',
		country: 'United Kingdom',
		region: 'Europe',
		sector: 'Civil society',
		year: '2020',
		summary:
			'The UK think tank Demos ran the first nationally representative Polis sample, exploring attitudes toward data-driven political campaigning.',
		participants: 'Nationally representative',
		stats: [
			{ value: 'UK-wide', label: 'representative sample' },
			{ value: '2020', label: 'year' },
			{ value: '1st', label: 'of its kind' },
		],
		context:
			'Placeholder. Demos set out to understand public attitudes toward data-driven political campaigning using a methodology that could claim national representativeness. (Replace with sourced narrative.)',
		process:
			'Placeholder. Demos paired Polis with a recruited, weighted sample to produce results that could be generalized to the UK population. (Replace with sourced narrative.)',
		results:
			'Placeholder. The project demonstrated that Polis could be combined with representative sampling to produce statistically meaningful findings. (Replace with sourced outcomes.)',
		quote: {
			text: 'Placeholder pull quote from the Demos research team.',
			attribution: 'TODO \u2014 source attribution',
		},
	},
	{
		slug: 'aufstehen',
		title: 'Aufstehen: the largest single Polis conversation',
		country: 'Germany',
		region: 'Europe',
		sector: 'Political movement',
		year: '2018',
		summary:
			'The German political movement Aufstehen hosted what became the most-participated single Polis conversation, shaping its platform.',
		participants: 'Largest ever',
		stats: [
			{ value: 'Largest', label: 'single conversation' },
			{ value: '2018', label: 'year' },
			{ value: 'Platform', label: 'formation' },
		],
		context:
			'Placeholder. The Aufstehen movement wanted to build its political platform directly from the views of its supporters at scale. (Replace with sourced narrative.)',
		process:
			'Placeholder. Aufstehen opened a Polis conversation to its membership, gathering an unprecedented volume of statements and votes. (Replace with sourced narrative.)',
		results:
			'Placeholder. The conversation became the most-participated single Polis conversation on record and fed directly into platform formation. (Replace with sourced outcomes and exact participant counts.)',
		quote: {
			text: 'Placeholder pull quote from an Aufstehen organizer.',
			attribution: 'TODO \u2014 source attribution',
		},
	},
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
	return caseStudies.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(slug: string, count = 3): CaseStudy[] {
	return caseStudies.filter((study) => study.slug !== slug).slice(0, count);
}
