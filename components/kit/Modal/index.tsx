import React, { FunctionComponent, useContext } from 'react';
import ReactDOM from 'react-dom';

import { cx, css } from 'linaria';

import ModalContext from '~/contexts/ModalContext';

import useScrollLock from '~/hooks/useScrollLock';

// SECTION Sub Module
const ModalWindowCss = css`
	min-height: 20%;
	min-width: 375px;
	max-height: 80%;
	max-width: 100%;
`;

const ModalPortalCss = css`
	transition: all 0.3s;
`;

const ModalScrollBar = css`
	-webkit-overflow-scrolling: auto;

	&::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 3px;
		height: 3px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background-color: rgba(0, 0, 0, 0.15);
		-webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
	}
`;

const Modal: FunctionComponent<{
	modal: boolean;
	toggleModal: () => void;
	colorsClasses?: string | null;
	paddingClasses?: string | false | null;
	borderRadiusClasses?: string;
	hideOverflow?: boolean;
	variant?: string;
}> = (props) => {
	const {
		modal,
		toggleModal,
		children,
		hideOverflow,
		paddingClasses,
		borderRadiusClasses,
		variant
	} = props;

	// get the colors or a default white background for the modal box
	const colorsClasses =
		props.colorsClasses && props.colorsClasses?.length !== 0
			? props.colorsClasses
			: 'bg-white text-ink-black';

	const modalContext = useContext(ModalContext);

	useScrollLock(modal);

	const modalElement = (
		<div
			className={cx(
				ModalPortalCss,
				'fixed top-0 left-0 z-50',
				modal ? 'opacity-100' : 'opacity-0'
			)}
		>
			<div
				className={cx(
					'fixed top-0 left-0 w-full overflow-hidden',
					modal ? 'h-full' : 'h-0',
					'gud-content-grid'
				)}
			>
				<div
					className="absolute top-0 left-0 w-full h-full bg-ink-black opacity-25"
					onClick={toggleModal}
					onKeyPress={toggleModal}
					tabIndex={0}
					role="button"
				/>
				<div className="col-start-1 col-end--1 relative h-screen flex flex-col justify-content-center align-items-center pointer-events-none">
					<div
						className={cx(
							ModalWindowCss,
							'relative pointer-events-auto w-full',
							'flex flex-col align-items-center justify-content-center'
						)}
					>
						<div
							className={cx(
								'w-full h-full overflow-hidden flex flex-column relative',
								colorsClasses,
								borderRadiusClasses
							)}
							role="dialog"
						>
							{/* Modal close button */}
							<div className="absolute top-0 w-full pointer-events-none flex justify-content-end">
								<button
									type="button"
									aria-label="dialog-close"
									className={cx(
										'pointer-events-auto close close-rounded m-6 md:m-8 w-6 h-6',
										variant === 'light' && 'close-white'
									)}
									onClick={toggleModal}
									onKeyPress={toggleModal}
								/>
							</div>
							{/* Modal body */}
							<div
								className={cx(
									'flex-grow flex-shrink flex flex-col',
									paddingClasses
								)}
							>
								<div
									className={cx(
										ModalScrollBar,
										hideOverflow ? 'overflow-y-hidden' : 'overflow-y-auto',
										'flex-grow flex-shrink',
										'px-2 mx--2'
									)}
								>
									{children}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	// render the modal in the portal if it exists (ie not ssr)
	if (modalContext.getModalContainerRef().current) {
		return ReactDOM.createPortal(
			modalElement,
			modalContext.getModalContainerRef().current as HTMLDivElement
		);
	}

	return <>{modalElement}</>;
};

export default Modal;

export { ModalScrollBar };
