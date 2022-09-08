import React, { FunctionComponent, useState, useEffect } from 'react';

import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

import CampusContext from '~/contexts/CampusContext';

import markets from '~/utils/markets.json';

const CAMPUS_COOKIE_NAME = 'ef-campus';
const CAMPUS_COOKIE_AGE = 86400;

const CampusHOC: FunctionComponent<{ parentCampus: string }> = (props) => {
	const { children, parentCampus } = props;

	const [campus, setCampus] = useState('');

	const [cookies, setCookie] = useCookies([CAMPUS_COOKIE_NAME]);

	const formatCampus = (string: string) =>
		string?.toLowerCase()?.replace(/\s/g, '-');

	const getCurrentCampus = (): string => {
		const currentCampus = formatCampus(
			(campus === 'all' ? cookies[CAMPUS_COOKIE_NAME] : campus) as string
		);

		return currentCampus;
	};

	const router = useRouter();

	const handleRouteChange = (url: string) => {
		const searchParams = new URLSearchParams(url.split('?')?.[1]);

		const campusParam = searchParams.get('campus');

		const path = url.replace(/^\/|\/$/g, '').split('/');

		const isHome =
			path.length === 1 && ['', ...Object.keys(markets)].includes(path[0]);

		if (campusParam) {
			setCampus(campusParam);
		} else if (isHome) {
			setCookie(CAMPUS_COOKIE_NAME, '', {
				path: '/',
				maxAge: CAMPUS_COOKIE_AGE
			});
		}
	};

	useEffect(() => {
		setCampus(parentCampus);
	}, [parentCampus]);

	useEffect(() => {
		if (!['all', ''].includes(campus)) {
			setCookie(CAMPUS_COOKIE_NAME, formatCampus(campus), {
				path: '/',
				maxAge: CAMPUS_COOKIE_AGE
			});
		}
	}, [campus]);

	useEffect(() => {
		router.events.on('routeChangeComplete', handleRouteChange);

		handleRouteChange(router.asPath);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, []);

	return (
		<CampusContext.Provider value={{ campus, getCurrentCampus, formatCampus }}>
			{children}
		</CampusContext.Provider>
	);
};

export default CampusHOC;
