# GitHub Pages Deployment Guide

## Prerequisites
1. Create a GitHub repository for your project
2. Push your code to GitHub

## Setup Steps

### 1. Connect to GitHub Repository
```bash
# If you haven't created a GitHub repo yet:
# 1. Go to https://github.com/new
# 2. Create a new repository named "daycare"
# 3. Run these commands:

git remote add origin https://github.com/YOUR-USERNAME/daycare.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll to "Pages" section in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Click "Save"

### 3. Deploy Your Site

The deployment happens **automatically** when you push to the main branch:

```bash
git add .
git commit -m "Update site"
git push
```

The GitHub Actions workflow will:
- Build your Angular app in production mode
- Deploy to GitHub Pages
- Make your site available at: https://YOUR-USERNAME.github.io/daycare/

You can monitor the deployment progress in the "Actions" tab of your repository.

## Available Scripts

- `npm run build:prod` - Build for production with GitHub Pages base href
- `npm start` - Run development server locally

## How It Works

The deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`):
- Triggers on every push to the main branch
- Can also be manually triggered from the Actions tab
- Builds the Angular app with production configuration
- Deploys the built files to GitHub Pages

## Important Notes

- **Base Href**: The scripts are configured with `/daycare/` as the base href. If your repository name is different, update the `--base-href` parameter in package.json
- **Custom Domain**: If using a custom domain, create a CNAME file in the src folder with your domain
- **.nojekyll**: This file prevents GitHub Pages from ignoring files starting with underscore
- **Main Branch Only**: No gh-pages branch needed - everything deploys from main

## Troubleshooting

### If the repository name is different:
Edit `build:prod` script in package.json and replace `/daycare/` with `/YOUR-REPO-NAME/`

### If deploying to user/organization page:
- Repository should be named: `YOUR-USERNAME.github.io`
- Change base href to `/` in the build:prod script
- Site will be at: `https://YOUR-USERNAME.github.io/`

### If the deployment fails:
- Check the "Actions" tab in your GitHub repository for error logs
- Ensure GitHub Pages is set to use "GitHub Actions" as the source
- Verify that the workflow has the necessary permissions

### If assets are not loading:
- Check that the base href matches your repository name
- Verify all asset paths are relative
- Clear browser cache and try again

