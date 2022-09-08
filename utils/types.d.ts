export interface StoryblokPageProps {
	errorCode?: number;
	story?: any;
	market: {
		code: string;
		fallback: string | null;
		efcode: string;
		regionFallback: string | null;
	};
	host: string;
	region: string;
	labels: any[];
	header: any;
	footer: any;
	locales: string[]
}
