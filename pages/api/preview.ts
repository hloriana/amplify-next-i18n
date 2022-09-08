import type { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line consistent-return
export default async function preview(req: NextApiRequest, res: NextApiResponse) {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (
      req.query.secret !== process.env.SB_PREVIEW_TOKEN ||
      !req.query.slug
    ) {
      return res.status(401).json({ message: 'Invalid token' })
    }
  
    // Enable Preview Mode by setting the cookies
    res.setPreviewData({})
 
    // Set cookie to None, so it can be read in the Storyblok iframe
    const cookies = res.getHeader('Set-Cookie') as string[];
    if (cookies) {
        res.setHeader('Set-Cookie', cookies.map((cookie: any) => cookie.replace('SameSite=Lax', 'SameSite=None')));
    } 
 
    // Redirect to the entry location
    let {slug} = req.query;
 
    // Handle home slug 
    if(slug === 'home') {
        slug = ''
    }
  
    // Redirect to the path from entry
    res.redirect(`/${slug}`)
  }