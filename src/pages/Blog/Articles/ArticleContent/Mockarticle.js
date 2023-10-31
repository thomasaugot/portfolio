/* eslint-disable no-lone-blocks */
import "./ArticleContent.scss";
import "../../Blog.scss";
import HeaderBlogMain from "../../../../components/HeaderBlog/HeaderBlogMain";
import FooterArticles from "../../../../components/Footer/FooterArticles";
import NewsletterSubscription from "../../../../components/Newsletter/Newsletter";

const Mockarticle = () => {
  // this file is only to format my articles before importing them into my database as raw text
  // if images don't load, add ?raw=true at the end of the url

  // Template:
  // <h1 class="gradient-text"></h1>
  // <img src="https://example.com/?raw=true" class="intro-img" alt="illustration" />
  // <img src="https://example.com/?raw=true" class="img-bigger" alt="illustration" />
  // <h2 class="gradient-text"></h2>
  // <p class="paragraph"></p>
  // <p class="conclusion"></p>
  // <h6>Last updated:  September 2023</h6>
  // <pre class="bash"></pre> for bash snippets
  // <pre class="code"></pre> for code snippets
  return (
    <div className="Content">
      <HeaderBlogMain />
      <h1 class="gradient-text">Making My React Native App More Secure in 2023</h1>
      <img src="https://example.com/?raw=true" class="intro-img" alt="illustration" />
      <p class="intro">
        Even more nowadays, it's essential to grasp the fundamental aspects of securing your React
        Native application. We'll explore some common security concerns that as developers we might
        encounter during our development adventures and, more importantly, how to navigate them.
        <br />
        <br />
        <b class="gradient-text">Storing Sensitive Information</b>
        <br />
        <br />
        In the world of app development, you'll often find yourself dealing with sensitive
        information. Whether it's connecting to external APIs, integrating third-party
        authentication, or tapping into open platforms for features like notifications and
        analytics, sensitive data is always part of the equation. These secrets need a secure home
        within your app. The golden rule here is never to store sensitive keys or secrets in your
        app's code. Anything tucked away in your code could potentially be accessed by anyone who
        examines your app bundle. That's a security no-no. So, what should you do instead?
        <br />
        To secure your API endpoints, you can turn to tools like react-native-dotenv and
        react-native-config. They offer a safe space to store sensitive information securely. When
        it comes to application secrets from external platforms like Facebook or Google, avoid
        embedding them in your code. Instead, consider alternatives to asynchronous storage.
        <br />
        <br />
        <b class="gradient-text">Deep Linking</b>
        <br />
        <br />
        Deep linking is an ingenious way of directing users straight into specific parts of your
        native app from external sources. It's like having a secret tunnel that leads to your app's
        hidden gems. However, this convenient feature can also pose security risks if not handled
        properly. Deep links are not inherently secure because anyone can configure their own URL
        schemes.
        <br />
        Imagine sending a deep link with sensitive data; it's akin to leaving your front door
        unlocked. Therefore, avoid sending anything sensitive via deep links. To enhance deep link
        security, consider Apple's Universal Links in iOS. They are a safer alternative, ensuring
        that your app is launched securely when a Universal Link is opened. This way, you can enjoy
        the convenience of deep linking without compromising security.
        <br />
        <br />
        These are just a few of the common security pitfalls to watch out for when developing your
        React Native app. As a developer, taking these steps to protect sensitive information and
        handle deep linking securely will set you on the right path to building a robust and secure
        app. The journey has just begun, and there's more to explore on our quest for a secure React
        Native app. So, stay with me as we delve into the intricacies of React Native security, one
        step at a time and explain some of the core concepts in Cybersecurity as of 2023.
      </p>
      <h2 class="gradient-text">Password Strength: Building Fortified Locks</h2>
      <p class="paragraph">
        Password strength is all about how tough your fortress's gate is. When you create a
        password, you're essentially designing a lock for your online accounts. A strong password is
        like a solid steel gate with a complex combination lock. It's hard for intruders to guess or
        crack it. It usually includes a mix of uppercase and lowercase letters, numbers, and special
        characters. On the other hand, a weak password is like a wooden gate with a simple latch.
        It's easier for someone to break in. So, to protect your accounts, aim for strong, unique
        passwords like "P@$$w0rd#123" instead of something simple like "password123."
      </p>
      <h2 class="gradient-text">Token-Based Authentication: A Secure Handshake</h2>
      <p class="paragraph">
        Token-based authentication is like using a digital keycard to access a secure building.
        Instead of sharing your secret password, you get a token (a temporary access code) after
        proving your identity. This token grants you access, and it's a safer and more convenient
        way to log in. For example, when you log into various apps without revealing your actual
        password, you're likely using token-based authentication.
      </p>
      <h2 class="gradient-text">Encryption: Shielding Sensitive Data</h2>
      <p class="paragraph">
        Encryption is like putting your sensitive information in a high-security vault before
        sending it across the internet. It's a way to scramble your data into a code that only
        someone with the right "key" can unscramble. Imagine sending a top-secret message in a
        locked box, and only the intended recipient has the key to unlock it. This ensures that even
        if hackers intercept your data, they can't make sense of it. It's like sending a love letter
        in a secret code that only your partner can decode. A common example is HTTPS, which
        encrypts your data when you shop online, so your credit card details stay safe.
      </p>
      <h2 class="gradient-text">Secure API Endpoints: Fortifying the Doors</h2>
      <p class="paragraph">
        API endpoints are like doors to your application, and you want to make sure they are
        well-guarded. To secure these entry points, you set up guards, just like security personnel
        at a nightclub. You define who's allowed in and what they can do. For instance, you may have
        a guest list that only permits certain people to enter the club. In the digital world,
        securing API endpoints means authenticating users, ensuring they have the right permissions,
        and protecting against unauthorized access. It's like verifying the identity of visitors and
        making sure they follow the rules. For example, when you log in to a social media app, the
        API checks if you have the right credentials (username and password) before letting you
        access your account. This way, only authorized users can interact with your app's data.
      </p>
      <h2 class="gradient-text">OAuth and Social Login: Simplifying Registration</h2>
      <p class="paragraph">
        Think of OAuth like a valet key for your car. When you give your car's valet key to a
        parking attendant, they can park your car but can't access your trunk or glove compartment.
        In a similar way, OAuth allows you to grant limited access to your online accounts, like
        social media or email, without revealing your password. When you log in to a website using
        your Google or Facebook account, you're using OAuth. Instead of sharing your login details,
        the site asks Google or Facebook, "Hey, can we verify this user?" You then authenticate with
        Google or Facebook, and they tell the website, "Yes, this person checks out." It's a bit
        like showing your ID at the entrance of a club to prove you're old enough to get in. OAuth
        keeps your credentials safe while letting you use your accounts on multiple websites.
      </p>
      <h2 class="gradient-text">Multi-Factor Authentication (MFA): Double the Defense</h2>
      <p class="paragraph">
        MFA is like having multiple locks on your front door. It adds extra layers of security to
        your online accounts beyond just a password. Imagine, you log in to your email, and it asks
        for your password (that's one lock). But then, MFA comes into play. It might also ask for a
        one-time code sent to your phone (that's another lock), or it could prompt you to use your
        fingerprint or face scan (yet another lock). It ensures that even if someone cracks your
        password, they can't get in without the additional keys. Think of MFA as a safety net, like
        having a PIN for your bank card in addition to the card itself. It significantly reduces the
        risk of unauthorized access to your accounts.
      </p>
      <h2 class="gradient-text">Code Obfuscation: Hiding My Secrets</h2>
      <p class="paragraph">
        Think of code obfuscation as a secret language for your app. It's like taking the source
        code that makes your app run and translating it into something only your app can understand.
        This hidden translation makes it incredibly difficult for anyone to reverse engineer your
        app's code and figure out how it works. It's like trying to read a novel in a language
        you've never seen before. Obfuscating your code makes it much more challenging for hackers
        to find vulnerabilities and exploit them. For example, if your app connects to a server,
        obfuscation can hide the details of how it communicates, making it less likely for malicious
        actors to intercept sensitive data or find weaknesses in your code. In essence, code
        obfuscation is like putting your app's secrets into a locked box, and only your app knows
        the combination.
      </p>
      <h2 class="gradient-text">Penetration Testing and Security Audits: Testing the Waters</h2>
      <p class="paragraph">
        Imagine your React Native app as a castle. You've built high walls, a moat, and locked the
        gates. However, you want to be sure it's truly secure. That's where penetration testing and
        security audits come in. Penetration testing is like hiring a team of ethical hackers who
        try to find ways to breach your defenses. They simulate real-world attacks to discover
        vulnerabilities. These experts use the same techniques malicious hackers might use, but with
        your permission. A security audit, on the other hand, is like a thorough inspection of your
        castle. It involves reviewing your app's code, configurations, and security measures to
        identify weaknesses. This process ensures you haven't accidentally left a hidden entrance
        open or overlooked a security gap. Together, these methods help you fortify your app's
        defenses and keep the bad guys out.
      </p>
      <p class="conclusion">
        While researching ways to enhance my React Native app's cybersecurity, I've realized that
        it's not just about writing code; it's about securing it too. From focusing on password
        strength, token-based authentication, encryption, secure API endpoints, OAuth and social
        login, Multi-Factor Authentication, code obfuscation, or even regular security testing, it's
        essential to provide a more secure experience for your users. Remember, cybersecurity is an
        ongoing journey, and staying updated is key to keeping an app secure.
      </p>
      <h6>Last updated: October 2023</h6>
      <NewsletterSubscription />
      <FooterArticles />
      <br />
      <br />
    </div>
  );
};

export default Mockarticle;
