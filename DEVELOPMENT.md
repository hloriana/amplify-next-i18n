## Folder structure

- Pages (`/pages/`)
  - TODO
- Layouts (`@layouts`)
  - TODO
- Content types (`@components/content`)
  - They are the main entry component for a story in Storyblok
- Sections (`@components/sections`)
  - They are used to create page sections within pages
- Common (`@components/common`)
  - Components used to compose section directly within their body (they are marked as `Nestable` in Storyblok definition)
- Base (`@components/base`)
  - All other components not used directly within sections or common (such as `Icon` that is used within a component but you cannot drag it into a `Section` or another component directly)

## Steps

- Create the definition in Storyblok web UI under `Components > New` - `snake-case`, `lowercase` technical name
- Add the necessary fields to it - Tips: images are called `Bloks` type of `graphic`
- Synchronize your `space.d.ts` definition for intellisense with  
  `$> node ./storyblok.js`
- Create folder into the appropriate `base / common / content / sections` folder
- Create the `index.tsx` and copy base content

```typescriptreact
import React, { FunctionComponent } from 'react';
import SbEditable from 'storyblok-react';

import { NAMEComponent } from '@components/space';

const NAME: FunctionComponent<{ content: NAMEComponent }> = ({ content }) => (
	<SbEditable content={content}>
		{/* components stuff */}
	</SbEditable>
);

export default NAME;
```

- Map your `NAMEComponent` in the `components/index.tsx` to link it back to Storyblok

- Look for components out of the box into [ant.design](https://ant.design) and for custom styling into [tailwindcss](https://tailwindcss.com)

