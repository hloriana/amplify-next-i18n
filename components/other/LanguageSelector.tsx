import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState
} from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import MarketContext from '~/contexts/EnvContext';
import ModalContext from '~/contexts/ModalContext';
import TranslationContext from '~/contexts/TranslationContext';

import { Icon } from '~/components/kit';
import useRouterEvent from '~/hooks/useRouterEvent';

import Modal from '~/components/kit/Modal';

const DEFAULT_LANGUAGE = 'default';

const LanguageSelector: FunctionComponent<{ title: string; labels: any[] }> = (
	props
) => {
	const { title, labels: languageLabels } = props;

	const router = useRouter();

	const translationContext = useContext(TranslationContext);
	const marketContext = useContext(MarketContext);
	const modalContext = useContext(ModalContext);

	const [label, setLabel] = useState('English');

	const getLanguageLabel = (marketCode: string) =>
		languageLabels.filter((langLabel) => langLabel.name === marketCode).pop();

	useEffect(() => {
		let newLabel = getLanguageLabel(marketContext.marketCode);

		if (!newLabel) {
			const fallback = marketContext.fallback || DEFAULT_LANGUAGE;

			newLabel = getLanguageLabel(fallback);
		}

		if (newLabel) setLabel(newLabel.value);
	}, [marketContext.marketCode, languageLabels]);

	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);

	const handleModalClose = () => {
		setModal(false);
	};

	useEffect(() => {
		modalContext.eventEmitter.on('modal', handleModalClose);

		return () => {
			modalContext.eventEmitter.off('modal', handleModalClose);
		};
	}, []);

	useRouterEvent('routeChangeStart', () => {
		setModal(false);
	});

	// useRouterEvent('routeChangeComplete', () => {
	// 	const currentLocale = window.location.pathname.split('/')[1];
	// 	if (
	// 		(currentLocale === 'zh-cn' &&
	// 			window.location.hostname !== 'www.efacademy.cn') ||
	// 		(currentLocale !== 'zh-cn' &&
	// 			window.location.hostname === 'www.efacademy.cn')
	// 	) {
	// 		router.reload();
	// 	}
	// });

	const getHost = () => {
		let prefix = '';
		switch (process.env.ENVIRONMENT) {
			case 'development':
				prefix = 'dev';
				break;
			case 'staging':
				prefix = 'staging';
				break;
			case 'editor':
				prefix = 'editor';
				break;
			case 'production':
				prefix = 'www';
				break;
			default:
				break;
		}

		return `https://${prefix}.${
			process.env.SHARED_LPS ? 'efhighschools.com' : 'efacademy.org'
		}`;
	};

	const getPath = (path: string, locale: string) => {
		const host = locale === 'zh-cn' ?  'https://www.efacademy.cn' : getHost()

		// eslint-disable-next-line no-nested-ternary
		return `${host}/${locale}/${path === 'home' ? '' : path?.substring(path?.length - 1) === '/' ? path : `${path}/`}`
	};

	return (
		<>
			<button
				type="button"
				className="flex align-items-center"
				onClick={toggleModal}
			>
				<Icon type="icons" icon="globe" className="fill-current w-4" />
				<div className="mx-2 text-ui-label">{label}</div>
				<Icon type="icons" icon="chevron-down" className="fill-current w-3" />
			</button>
			<Modal
				modal={modal}
				toggleModal={toggleModal}
				borderRadiusClasses="rounded"
			>
				<div className="gud-content-grid">
					<div className="col-start-1 col-end--1 py-6 md:p-16">
						<div className="typo-h3 mb-6">{title}:</div>
						<div className="grid md:grid-cols-3">
							{translationContext.locales.map((locale: any) => {
								const linkLabel = getLanguageLabel(locale);

								if (linkLabel && locale) {
									return (
										<a
											key={`translationLink:${locale}`}
											href={`${getPath(translationContext.path, locale)}`}
											// locale={locale}
										>
										{linkLabel.value}
										</a>
									);
								}

								return false;
							})}
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default LanguageSelector;