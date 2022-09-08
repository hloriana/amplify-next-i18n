/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable sort-imports-es6-autofix/sort-imports-es6 */
import { InlineWidget, PopupWidget, PopupModal } from "react-calendly";
import React from 'react';
import SbEditable from 'storyblok-react';
import ModuleWrap from '~/components/other/ModuleWrap';


const CalendlyForm: any = (props: any) => {
    return (
        <InlineWidget url={props?.type?.url  || "https://calendly.com/d/dqs-brp-gg6" } styles={{width: `100%`, height: props?.type?.height ? `${props?.type?.height}px` :  '630px'}}  />
    )
}

const StoryBlokCalendly: any = (props: any) => {
    const { content } = props;
    
    return (
		<SbEditable content={content}>
            {content?.module_settings ?
             <ModuleWrap settings={content.module_settings}><CalendlyForm type={content} /></ModuleWrap> 
             : <CalendlyForm type={content} />}
		</SbEditable>
	);

}

export default StoryBlokCalendly;