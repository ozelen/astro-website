import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  
  // Check if the request is coming from zelenyuk.com
  if (url.hostname === 'zelenyuk.com') {
    // Create new URL with blog.zelen.uk
    const newUrl = new URL(url.pathname + url.search, 'https://blog.zelen.uk');
    return context.redirect(newUrl.toString(), 301); // 301 for permanent redirect
  }

  return next();
}); 
