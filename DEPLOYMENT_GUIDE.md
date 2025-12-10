
# Deployment Guide: Connecting Supabase, GitHub, and Vercel

Since your accounts are separate, the best way to deploy is to use **GitHub** as the bridge.

## Step 1: Push Code to GitHub
1. Create a **New Repository** on your GitHub account (e.g., `hocx-website`).
2. Run these commands in your terminal to push your code:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/hocx-website.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Set Up Supabase Database
1. Log in to your **Supabase** account.
2. Go to the **SQL Editor** in your Supabase dashboard.
3. Open the `supabase_schema.sql` file from this project, copy the content, and run it in the SQL Editor. This creates the `contact_submissions` table.
4. Go to **Project Settings > API** and copy:
   - **Project URL**
   - **anon / public Key**

## Step 3: Deploy on Vercel
1. Log in to your **Vercel** account.
2. Click **"Add New..."** -> **"Project"**.
3. Select **"Import Git Repository"** and choose the `hocx-website` repo you just pushed.
4. **Important**: In the **Environment Variables** section of the deployment screen, add the following (using the values from Step 2):
   - `VITE_SUPABASE_URL`: (Paste your Project URL)
   - `VITE_SUPABASE_ANON_KEY`: (Paste your Anon Key)
5. Click **Deploy**.

## Step 4: Final Check
Once deployed, Vercel will give you a live URL.
1. Open the live site.
2. Go to the **Contact** section.
3. Submit the form.
4. Check your **Supabase Table Editor** (`contact_submissions` table) to see the data arrive!

---
**Note:** A `.env` file is included in your project for local testing. Open `.env` and paste your credentials there to test the contact form on your machine before deploying.
