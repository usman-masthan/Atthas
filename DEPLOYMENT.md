# Deployment Guide for Attha's Restaurant Website

## Quick Start

This website is production-ready and can be deployed immediately to various platforms.

## Recommended Deployment: Vercel

### Option 1: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub (already done)
2. Visit [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Import the `usman-masthan/Atthas` repository
5. Vercel will automatically detect Next.js and deploy

## Alternative Platforms

### Netlify

1. Connect your GitHub repository on [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### Custom VPS/Server

```bash
# On your server
git clone https://github.com/usman-masthan/Atthas.git
cd Atthas
npm install
npm run build
npm start
```

The application will run on port 3000 by default.

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t atthas-restaurant .
docker run -p 3000:3000 atthas-restaurant
```

## Environment Variables

Currently, no environment variables are required. If you add backend services, create a `.env.local` file:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your-key-here
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify responsive design on mobile
- [ ] Check form submissions work
- [ ] Test navigation and links
- [ ] Verify SEO metadata
- [ ] Test performance (Lighthouse score)
- [ ] Enable HTTPS/SSL
- [ ] Set up custom domain
- [ ] Configure CDN if needed
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Test accessibility

## Performance Optimization

The website is already optimized with:
- Static page generation
- Optimized fonts
- Minimal JavaScript
- Responsive images

For additional optimization:
- Enable compression on your server
- Use a CDN for static assets
- Enable caching headers
- Monitor with tools like Google PageSpeed Insights

## Monitoring

After deployment, monitor:
- Uptime (UptimeRobot, Pingdom)
- Performance (Google Analytics, Vercel Analytics)
- Errors (Sentry, LogRocket)
- User behavior (Hotjar, Google Analytics)

## Support

For deployment issues:
- Check Next.js deployment docs: https://nextjs.org/docs/deployment
- Vercel support: https://vercel.com/support
- GitHub Issues: Report bugs in the repository

## Custom Domain

After deployment, add your custom domain:

### Vercel
1. Go to Project Settings > Domains
2. Add `www.atthas.com` and `atthas.com`
3. Configure DNS records as instructed

### DNS Records Example
```
Type  Name   Value
A     @      76.76.21.21
CNAME www    cname.vercel-dns.com
```

## SSL/HTTPS

Most platforms (Vercel, Netlify) provide automatic SSL certificates. For custom servers:

```bash
# Using Let's Encrypt
sudo certbot --nginx -d atthas.com -d www.atthas.com
```

## Scaling

The website uses static generation, so it scales well automatically. For high traffic:
- Use a CDN (Cloudflare, AWS CloudFront)
- Enable edge caching
- Monitor performance metrics
- Consider serverless functions for forms

---

**Note**: This website is ready for production deployment with no additional configuration required!
