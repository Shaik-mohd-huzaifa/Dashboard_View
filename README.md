# OpenInApp Frontend Developer Intern Assignment

This project is a React application built using Next.js, Sass, Tailwind CSS, Context API for state management, Supabase for storing and fetching analytical data, and NextAuth.js for authentication (Google provider only).

## Installation and Setup

To run this project on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git https://github.com/Shaik-mohd-huzaifa/React_Intern_Assignment.git 
   cd React_Intern_Assignment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Supabase:**

   - Create a Supabase account and set up a new project.
   - Configure your Supabase instance and obtain the necessary credentials (URL, API Key).

4. **Configure environment variables:**

   Create a `.env.local` file in the project root and add the following environment variables with your Supabase credentials:

   ```plaintext
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_api_key
   ```

5. **Run the application:**

   ```bash
   npm run dev
   ```

   The application will be running at [http://localhost:3000](http://localhost:3000).

## Authentication

Authentication in this project is handled using NextAuth.js with Google provider. To set up authentication with other providers, refer to the NextAuth.js documentation.

## Access the Application

The application is hosted and can be accessed [here](<app_url>).

Feel free to explore and interact with the app!
