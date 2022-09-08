import React, { FunctionComponent, useEffect, useState } from 'react';

// FIXME this could be rerendered as it is a component that depends upon a context, so need to be moved to a non-rerender component

const Analytics: FunctionComponent = () => {
	
	const [scriptContent, setScriptContent] = useState('')

	useEffect(() => {
		setTimeout(() => {
			setScriptContent(`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','${process.env.GTM_ID_360}');`)
		}, 5000)
	},[])

return (
		<>
			{/* GA 360 container */}
			<script
				type="text/javascript"
				src="https://www.ef.com/scripts/analytics/efanalyticstk.min.js"
				async
			/>
			<script
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{
				__html: `${scriptContent}`
			}}
		/>
			
		</>
	);
};

export default Analytics;
