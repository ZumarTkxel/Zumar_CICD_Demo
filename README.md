# Zumar_CICD_Demo
# 🚀 CI/CD Pipeline with GitHub Actions (Intern Assignment)

This repository contains a simple **Node.js application** deployed with a **CI/CD pipeline using GitHub Actions**.  
The goal of this assignment is to set up **Continuous Integration (CI)** and **Continuous Deployment (CD)** on a self-hosted runner.

---
## ⚙️ CI/CD Workflow

### ✅ Continuous Integration (CI)
Triggered on every **push to main** branch.  
Steps included:
1. Checkout repo
2. Setup Node.js (v18)
3. Install dependencies (`npm install`)
4. Run lint (`npm run lint`)
5. Run tests (`npm test`)
6. Build project (`npm run build`)
7. Package artifact (`dist/` folder zipped)
8. Upload artifact to GitHub

### ✅ Continuous Deployment (CD)
Runs on a **self-hosted runner** after CI completes.  
Steps included:
1. Checkout repo
2. Download build artifact
3. Extract into `dist/`
4. Setup Node.js (v18)
5. Install **PM2** (process manager)
6. Set environment variables:
   - `NODE_ENV=production`
   - `PORT=3000`
7. Start/Restart app using PM2:
   ```bash
   pm2 start dist/index.js --name my-app
   pm2 save
   pm2 status

🖥️ Running the App Locally
1. Install dependencies
npm install

2. Run locally (dev)
npm start

App will be available at 👉 http://localhost:3000
3. Run with PM2 (prod)

npm run build
pm2 start dist/index.js --name my-app
pm2 save
Now the app will keep running in the background, even after you close the terminal.

📦 Deployment Notes
  CI/CD workflow is defined in .github/workflows/cicd.yml
  Uses GitHub-hosted runner for CI and self-hosted runner for CD
  PM2 ensures the Node.js app runs continuously
  Application auto-starts on each new deployment
