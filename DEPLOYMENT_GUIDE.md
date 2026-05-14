# Deployment Guide

This guide covers all steps needed to deploy your Personal Portfolio Website to Vercel and ensure it meets all requirements.

## Pre-Deployment Checklist

Before deploying, verify the following:

- ✅ **Production Build**: Run `npm run build` and confirm it completes with no errors
- ✅ **Development Server**: Run `npm run dev` and verify the site loads correctly
- ✅ **Responsive Design**: Test at breakpoints 375px, 768px, and 1280px
- ✅ **Animations**: Verify animations work smoothly (no jank or lag)
- ✅ **prefers-reduced-motion**: Test with browser's reduced motion setting enabled
- ✅ **Mobile Menu**: Test hamburger menu on mobile devices
- ✅ **Form Submission**: Test contact form submission and validation
- ✅ **Links**: Verify all navigation links work and point to correct sections

## Local Testing

### Test Production Build Locally

```bash
npm run build
npm run preview
```

Open the preview URL and test all features locally before deployment.

### Test Responsiveness

Use browser DevTools to test at these widths:
- **375px** - Mobile
- **768px** - Tablet  
- **1280px** - Desktop

## Deploy to Vercel

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create repository name: `portfolio` (or your preferred name)
3. Set to **Public** (required for deployment)
4. Click "Create repository"

### Step 2: Push Code to GitHub

```bash
cd portfolio
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Search for and select your portfolio repository
4. Vercel automatically detects:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"
6. Wait for deployment to complete (usually 1-2 minutes)
7. Copy the generated URL (e.g., `portfolio-abc123.vercel.app`)

### Step 4: Verify Deployment

1. Open the Vercel URL in your browser
2. Test all features work correctly
3. Verify responsive design still works
4. Check browser console for any errors

## Post-Deployment

### Run Lighthouse Audit

1. Open your deployed site in Chrome
2. Open DevTools (F12)
3. Click "Lighthouse" tab
4. Click "Generate report"
5. Run audit and verify scores:
   - **Performance**: 80+
   - **Accessibility**: 90+
   - **Best Practices**: 90+
   - **SEO**: 85+

### Expected Performance

With optimizations applied:
- **Lighthouse Performance**: 85-95 (no images, minimal animations)
- **Lighthouse Accessibility**: 95+ (semantic HTML, proper contrast)
- **Lighthouse Best Practices**: 95+ (modern tooling, no deprecated APIs)
- **Lighthouse SEO**: 95+ (proper meta tags, mobile-friendly)

### Common Lighthouse Improvements

If scores are below target:

1. **Performance Issues**:
   - Check for unoptimized images
   - Minimize main thread blocking
   - Defer non-critical CSS/JS
   - Enable compression

2. **Accessibility Issues**:
   - Ensure sufficient color contrast
   - Add proper alt text to images
   - Test keyboard navigation
   - Verify form labels

3. **Best Practices Issues**:
   - Check for deprecated APIs
   - Update dependencies
   - Remove console errors
   - Enable HTTPS

4. **SEO Issues**:
   - Verify Open Graph tags in index.html
   - Check robots.txt and sitemap
   - Ensure responsive design
   - Test with Mobile-Friendly Test

## Troubleshooting

### Build Fails on Vercel

1. Check build logs in Vercel dashboard
2. Verify all dependencies are in `package.json`
3. Ensure Node.js version is 20.17+
4. Try clearing node_modules and rebuilding locally

### Site Shows Blank Page

1. Check browser console for errors
2. Verify all imports are correct
3. Check network tab for failed requests
4. Verify environment variables are set

### Animations Don't Work

1. Check if JavaScript is enabled
2. Verify Framer Motion is imported correctly
3. Check browser console for errors
4. Test in incognito mode to rule out cache issues

### Mobile Menu Not Working

1. Verify Navigation component is rendering
2. Check state management in Navigation.jsx
3. Test in DevTools mobile view
4. Clear cache and reload

## Continuous Deployment

Once deployed to Vercel, it automatically:

- Rebuilds when you push to GitHub
- Creates preview deployments for pull requests
- Updates production when you merge to main
- Maintains SSL certificate automatically

To update after initial deployment:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Vercel will automatically rebuild and deploy.

## Custom Domain (Optional)

To use a custom domain:

1. Go to Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-48 hours)

## Performance Monitoring

Vercel provides built-in performance analytics:

1. Go to your project in Vercel dashboard
2. Click "Analytics"
3. View real-time performance metrics
4. Monitor Core Web Vitals

## Next Steps

1. Deploy to Vercel using steps above
2. Get live URL and add to README
3. Share portfolio with:
   - Portfolio reviewers
   - Hiring managers
   - Social networks
   - GitHub profile

## Support

For deployment issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Help](https://docs.github.com)

---

**Status**: Ready for deployment ✅
**Build Size**: ~353KB JS + 44KB CSS (gzipped)
**Estimated Lighthouse Scores**: Performance 85+, Accessibility 95+, Best Practices 95+, SEO 95+
