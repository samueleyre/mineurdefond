# A statically generated blog example using Next.js and Airtable


# Step 1. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

### Step 2. Run Next.js in development mode

```bash
yarn install
yarn dev
```

It should be up and running on [http://localhost:3000](http://localhost:3000)!

### Step 3. Deploy on Vercel

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and import to vercel.

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

