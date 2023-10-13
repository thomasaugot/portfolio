// this file is only to format my articles before importing them into my database as raw text
// if images don't load, add ?raw=true at the end of the url

// Template:
// <h1 class="gradient-text"></h1>
// <img src="https://example.com/?raw=true" class="intro-img" />
// <h2 class="gradient-text"></h2>
// <p class="paragraph"></p>
// <p class="conclusion"></p>
// <h6>Last updated:  September 2023</h6>
// <pre class="bash"></pre> for code snippets



<h1 class="gradient-text">Create a React Contact Form with Email.js</h1>

<img src="https://example.com/?raw=true" class="intro-img" />

<h2 class="gradient-text">Introduction</h2>

<p class="paragraph">In this tutorial, I'll walk you through creating a contact form in a React application and integrating Email.js to send emails with the form data.<br/> Email.js is a platform that allows developers to easily integrate email sending capabilities into their applications or websites using JavaScript. It provides a simple and efficient way to send emails directly from the client-side (front-end) of a web application, without the need for a back-end server to handle the email sending process.</p>

<h2 class="gradient-text">Prerequisites</h2>

<p class="paragraph">To complete this tutorial, you'll need:</p>

<p>
- Node.js and npm (Node Package Manager) installed on your machine<br/>
- Basic knowledge of React<br/>
- An email.js account
</p>

<h2 class="gradient-text">Step 1: Set up a React application</h2>

<p class="paragraph">Create a new React application using Create React App:</p>

<pre class="bash">
  npx create-react-app emailjs-contact-form
  cd emailjs-contact-form
</pre>

<h2 class="gradient-text">Step 2: Create a ContactForm component</h2>

<p class="paragraph">Inside the /src folder, create a new file named ContactForm.js and add the following code:</p>

<pre class="code">
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () =&gt; {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) =&gt; {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) =&gt; {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() =&gt; {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) =&gt; {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() =&gt; {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    &lt;form onSubmit={sendEmail}&gt;
      &lt;label&gt;Name&lt;/label&gt;
      &lt;input type=&quot;text&quot; name=&quot;user_name&quot; /&gt;
      &lt;label&gt;Email&lt;/label&gt;
      &lt;input type=&quot;email&quot; name=&quot;user_email&quot; /&gt;
      &lt;label&gt;Message&lt;/label&gt;
      &lt;textarea name=&quot;message&quot; /&gt;
      &lt;input type=&quot;submit&quot; value=&quot;Send&quot; disabled={isSubmitting} /&gt;
      {stateMessage &amp;&amp; &lt;p&gt;{stateMessage}&lt;/p&gt;}
    &lt;/form&gt;
  );
};

export default ContactForm;
</pre>

<h2 class="gradient-text">Step 3: Integrate the ContactForm component</h2>
<p class="paragraph">In your /src/App.js file, import and integrate the ContactForm component:</p>

<pre class="code">
import React from 'react';
import ContactForm from './ContactForm';
import './App.css';

function App() {
  return (
    &lt;div className=&quot;App&quot;&gt;
      &lt;h1&gt;Contact Us&lt;/h1&gt;
      &lt;ContactForm /&gt;
    &lt;/div&gt;
  );
}

export default App;
</pre>

<h2 class="gradient-text">Step 4: Configure Email.js</h2>
<p class="paragraph">Sign up for an Email.js account if you haven't already. Get your service ID, template ID, and user ID from Email.js Dashboard.</p>
<h2 class="gradient-text">Step 5: Test the contact form</h2>
<p class="paragraph">Run your React application:</p>

<pre class="bash">
  npm start
</pre>

<p class="paragraph">Fill out the contact form and click the "Submit" button. Check your email for the received message.</p>
<h2 class="gradient-text">Conclusion</h2>
<p class="conclusion">You've successfully created a contact form in a React application and integrated Email.js to send emails. This approach allows you to easily handle user inquiries or feedback on your website.</p>
<p class="conclusion">Feel free to customize the contact form's appearance and functionality according to your project's requirements.</p>
<h6>Last updated: October 2023</h6>