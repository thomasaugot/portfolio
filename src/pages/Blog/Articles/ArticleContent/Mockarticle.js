// import "./ArticleContent.scss";
// import "../../Blog.scss";
// import HeaderBlogMain from "../../../../components/HeaderBlog/HeaderBlogMain";
// import FooterArticles from "../../../../components/Footer/FooterArticles";
// import NewsletterSubscription from "../../../../components/Newsletter/Newsletter";

// const Mockarticle = () => {
//   // this file is only to format my articles before importing them into my database as raw text
//   // if images don't load, add ?raw=true at the end of the url

//   // Template:
//   // <h1 class="gradient-text"></h1>
//   // <img src="https://example.com/?raw=true" class="intro-img" alt="illustration" />
//   // <h2 class="gradient-text"></h2>
//   // <p class="paragraph"></p>
//   // <p class="conclusion"></p>
//   // <h6>Last updated:  September 2023</h6>
//   // <pre class="bash"></pre> for bash snippets
//   // <pre class="code"></pre> for code snippets
//   return (
// <div className="Content">
// <h1 class="gradient-text">Supabase in React/React-Native for Beginners: The Basics</h1>
// <img src="https://raw.githubusercontent.com/thomasaugot/portfolio/b5f0beedf2e9c42091e8a38ebcecf6d3a7454fa4/src/pages/Blog/Articles/assets/supabase.png?raw=true" class="intro-img" alt="illustration" />
// <p class="intro">Supabase is an open-source platform that streamlines modern application development by providing a comprehensive development stack. It encompasses a powerful relational database, user authentication services, real-time capabilities, RESTful APIs, file storage, and fine-grained security control. As an open-source solution, it offers flexibility, scalability, and rapid development, making it a favored choice for developers. With real-time features and an active community, Supabase simplifies complex development tasks, allowing developers to focus on creating the core features of their applications.</p>
// <h2 class="gradient-text">Basic Setup</h2>
// <p class="paragraph">To integrate Supabase into our project, here are the steps to follow:</p>
// <p class="paragraph">1. Install the package:</p>
// <pre class="bash">npm install @supabase/supabase-js</pre>
// <p class="paragraph">2. Create the supabase.js file; include the following content:
// </p>
// <pre class="code">
// import 'react-native-url-polyfill/auto';
// import {createClient} from '@supabase/supabase-js';
// import Config from 'react-native-config'; // this line for the environment variables configuration

// const supabaseUrl = Config.SUPABASE_URL;
// const supabaseAnonKey = Config.SUPABASE_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   auth: {
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: false,
//   },
// });
// </pre>
// <p class="paragraph">3. Set the environment variables (preferably in the .env file to keep them secret). You can find them in the project dashboard on Supabase, under the "settings" and then "api" tab:
// </p>
// <img class="img-bigger" src="https://raw.githubusercontent.com/thomasaugot/portfolio/b5f0beedf2e9c42091e8a38ebcecf6d3a7454fa4/src/pages/Blog/Articles/assets/api-variables.png?raw=true" class="intro-img" alt="illustration" />
// <pre class="code">
// // .env

// SUPABASE_URL=********************************************
// SUPABASE_KEY=********************************************
// </pre>

// 4. Finally, I imported the client created in the file where I make my API calls:

// <pre class="code">
// import {supabase} from './supabase';
// </pre>

// <p class="paragraph">Configuration is complete; nothing more to do! :)</p>

// <h2 class="gradient-text">Databases with Supabase</h2>

// <p class="paragraph">Supabase is built on PostgreSQL, a powerful relational database. You can access your database through the "Database" tab in the dashboard.
// </p>

// <img class="img-bigger" src="https://raw.githubusercontent.com/thomasaugot/portfolio/b5f0beedf2e9c42091e8a38ebcecf6d3a7454fa4/src/pages/Blog/Articles/assets/supabase%20accueil.png?raw=true" class="intro-img" alt="illustration" />

// <h2 class="gradient-text">Creating Tables and Schemas</h2>
// <p class="paragraph">To create tables and schemas, click on the "SQL Editor" tab and use SQL queries to define your data structure (procedure described in the next section). You can also directly go to the 'Table Editor' tab and click 'New table' to add columns or rows to a table by clicking the green 'Insert' button.
// </p>

// <img class="img-bigger" src="https://raw.githubusercontent.com/thomasaugot/portfolio/b5f0beedf2e9c42091e8a38ebcecf6d3a7454fa4/src/pages/Blog/Articles/assets/tables.png?raw=true" class="intro-img" alt="illustration" />

// <h2 class="gradient-text">Writing SQL Queries</h2>
// <p class="paragraph">SQL queries allow you to send commands, e.g., to add a table or a column. At Supabase, the interface offers an AI tool for generating these queries. To use the AI integration in the Supabase SQL Editor, simply click the "AI" button in the toolbar. This will open the AI sidebar, where you can enter your description in natural language or your SQL query. The AI will then generate the corresponding SQL query or suggestions to improve your query.
// </p>
// <p class="paragraph">Here's an example of using the Supabase SQL Editor to generate an SQL query from natural language:
// </p>
// <p class="paragraph">Access the "databases" tab in the Supabase dashboard and click the "SQL Editor" tab.
// Click the "AI" button in the toolbar.
// In the AI sidebar, enter the following natural language description: <br>
// "Select all buildings created in the last 30 days." <br>
// Click the "Generate SQL" button.
// The AI will generate the following SQL query: <br>
// </p>

// <pre class="code">
// SELECT * FROM users
// WHERE created_at > NOW() - INTERVAL '30 days';
// </pre>

// <p class="paragraph">Click 'RUN SQL' to execute the query.</p>

// <p class="paragraph">Another example, to add a "role" column containing only possible fields 'admin', 'employé', 'propriétaire', 'locataire', 'visiteur', enter the following command:
// </p>

// <pre class="code">
// -- Add a new column called "role" to the "user" table with a text data type
// alter table "user"
// add column role text;

// -- Add a constraint to the "role" column to only allow the values 'Role 1', 'Role 2', 'Role 3', or 'Role 4'
// alter table "user"
// add constraint role_constraint check (role in ('admin', 'employé', 'propriétaire', 'locataire', 'visiteur'));
// </pre>

// <img class="img-bigger" src="https://raw.githubusercontent.com/thomasaugot/portfolio/b5f0beedf2e9c42091e8a38ebcecf6d3a7454fa4/src/pages/Blog/Articles/assets/tempsnip.png?raw=true" class="intro-img" alt="illustration" />

// <h2 class="gradient-text">User Authentication</h2>
// <p class="paragraph">The authentication system used here is the one integrated into Supabase. Although by default, there is a 'user' table to make the authentication feature work (under the "auth" schema) in Supabase, I usually create a second one under the "public" schema to customize the assigned fields. Thus, using an SQL query I launched from the "SQL Editor", I am able to send the basic information contained in the default 'user' table to my custom 'user' table, by which I manage to add certain information to each user in addition to what is collected by the default table. Here is the SQL query, including Row Level Security (RLS) explained below:
// </p>

// <pre class="code">
// -- Create a table for public profiles
// CREATE TABLE USERS (
//   id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
//   created_at TIMESTAMP WITH TIME ZONE,
//   full_name TEXT,
//   email TEXT,
//   phone TEXT,
//   role TEXT CHECK (role IN ('admin', 'employé', 'propriétaire', 'locataire', 'visiteur')),
// );

// ALTER TABLE USERS ENABLE ROW LEVEL SECURITY;

// CREATE POLICY "Public profiles are viewable by everyone." ON USERS
//   FOR SELECT USING (TRUE);

// CREATE POLICY "Users can insert their own profile." ON USERS
//   FOR INSERT WITH CHECK (auth.uid() = id);

// CREATE POLICY "Users can update own profile." ON USERS
//   FOR UPDATE USING (auth.uid() = id);

// DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

// CREATE OR REPLACE FUNCTION public.handle_new_user()
// RETURNS TRIGGER AS $$
// BEGIN
//   INSERT INTO public.USERS (id, full_name, email, phone)
//   VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'email', NEW.raw_user_meta_data->>'phone');
//   RETURN NEW;
// END;
// $$ LANGUAGE plpgsql SECURITY DEFINER;

// CREATE TRIGGER on_auth_user_created
//   AFTER INSERT ON auth.users
//   FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
// </pre>
// <p class="paragraph">Thanks to this, I can store a lot of data in addition to the default ones, such as the user's "role," phone, etc.
// </p>
// <p class="paragraph">The "Auth" tab allows you to manage user authentication. You can configure registration, login, and profile management.
// </p>
// <p class="paragraph">In "Auth" > "OAuth," you can configure authentication through third-party providers such as Google, Facebook, or GitHub. Make sure you have created applications with these providers beforehand. By integrating authentication mechanisms with third-party providers, you facilitate access to your application.
// </p>

// <img class="img-bigger" src="https://raw.githubusercontent.com/thomasaugot/portfolio/b5f0beedf2e9c42091e8a38ebcecf6d3a7454fa4/src/pages/Blog/Articles/assets/auth.png?raw=true" class="intro-img" alt="illustration" />

// <h2 class="gradient-text">API Endpoint Configuration</h2>
// <p class="paragraph">The "API" tab allows you to configure REST API endpoints for interacting with data and the application. After completing the imports described earlier in the "Basic Configuration" section, you only need to make API calls as already provided in the "API" tab of the Supabase project:
// </p>

// <img class="img-bigger" src="https://raw.githubusercontent.com/thomasaugot/portfolio/b5f0beedf2e9c42091e8a38ebcecf6d3a7454fa4/src/pages/Blog/Articles/assets/api-calls-supabase.png?raw=true" class="intro-img" alt="illustration" />

// <h2 class="gradient-text">RLS (Row-Level Security)</h2>
// <p class="paragraph">Another feature of Supabase is Row-Level Security (RLS). RLS represents a powerful mechanism that allows you to restrict access to data in your tables based on rules defined at the row level. This ensures that only authorized users can view and modify data assigned to them. Here's how to configure RLS in Supabase:
// </p>
// <p class="paragraph">Create tables with security columns: To use RLS, start by creating tables with columns that allow you to define security rules. For example, you can have an "owner" column that records the user who owns the row.
// </p>
// <p class="paragraph">Create security policies: Once your tables are configured, you can create security policies. This is done using the WITH (security_barrier = true) clause in the CREATE POLICY statement:
// </p>

// <pre class="code">
// CREATE POLICY my_policy
//   ON my_table
//   FOR SELECT
//   USING (user_id = current_user_id())
//   WITH CHECK (user_id = current_user_id());
// </pre>
// <p class="paragraph">In this example, my_policy is the name of your policy, my_table is the relevant table, SELECT indicates that this policy applies to select operations (you can also use INSERT, UPDATE, or DELETE), user_id is the column defining the owners, and current_user_id() returns the ID of the currently logged-in user.
// </p>
// <p class="paragraph">Activate security policies: The policies you create are not enabled by default. To activate them, use the ALTER TABLE command:
// </p>
// <pre class="code">
// ALTER TABLE my_table ENABLE ROW LEVEL SECURITY;
// </pre>
// <p class="paragraph">Configure user roles: Finally, assign roles to users who need to comply with these policies. A role can have multiple associated policies. You can assign a role to a user using the GRANT command:
// </p>
// <pre class="code">
// GRANT my_role TO my_user
// </pre>
// <p class="paragraph">Test policies: Once you have configured policies and roles, you can test them to ensure they work as intended. Log in as a user and try to access data for which security rules have been defined.
// </p>
// <p class="paragraph">Handling exceptions: You can also manage exceptions using the ON clause in your policies. For example, you can allow an administrator to access all data without any restrictions.
// </p>
// <p class="conclusion">With all this, you're already set to start with Supabase basics. Using such services is considerably time-saving and literally saves you from building an entire custom backend. Therefore, being a frontend fan, I use it on most of my work! For more information, refer to the official Supabase documentation on their website: https://supabase.com/docs
// </p>
//       <NewsletterSubscription />
//       <FooterArticles />
//       <br />
//       <br />
//     </div>
//   );
// };

// export default Mockarticle;
