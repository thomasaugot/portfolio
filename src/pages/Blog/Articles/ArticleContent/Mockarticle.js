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
  // <h2 class="gradient-text"></h2>
  // <p class="paragraph"></p>
  // <p class="conclusion"></p>
  // <h6>Last updated:  September 2023</h6>
  // <pre class="bash"></pre> for bash snippets
  // <pre class="code"></pre> for code snippets
  return (
    <div className="Content">
      <HeaderBlogMain />
      <h1 class="gradient-text">Optimizing Performance in React Native</h1>
      <img
        src="https://raw.githubusercontent.com/thomasaugot/portfolio/88291bfce5f35a76e1aa65a2e1c48f1358c2c04c/src/pages/Blog/Articles/assets/optimize.PNG?raw=true"
        class="intro-img"
        alt="illustration"
      />
      <p class="intro">
        React Native is an excellent choice for building cross-platform mobile applications.
        However, as your app grows and evolves, it's easy to encounter performance bottlenecks.
        Fortunately, there are effective strategies and tools that can help you overcome these
        challenges. In this article, we'll explore a variety of methods that will empower you to
        take control of your app's performance. From leveraging the power of React Native's built-in
        components to using advanced memoization techniques and profiling tools, you'll learn how to
        create smooth and responsive mobile experiences.
      </p>
      <h2 class="gradient-text">Use React Native's FlatList</h2>
      <p class="paragraph">
        <b>What it does:</b>
        <br /> React Native's FlatList is a performant component for rendering lists. It renders
        only the items that are currently visible on the screen, and it recycles items as you
        scroll.
      </p>
      <p class="paragraph">
        For more information about Flatlist, visit the official React Native documentation{" "}
      </p>
      <a class="link-content" href="https://reactnative.dev/docs/flatlist">
        here
      </a>
      <p class="paragraph">
        <b>How to use it:</b>
        <br />
        Import FlatList from 'react-native'. Create a data source and pass it to the data prop of
        FlatList. Implement a renderItem function that specifies how each item should be rendered.
        Add keyExtractor to specify a unique key for each item. Customize the appearance and
        behavior using various props such as ItemSeparatorComponent, ListEmptyComponent, and more.
      </p>
      <p class="paragraph">
        <b>Limits:</b>
        <br /> While FlatList optimizes rendering for long lists, it may not be suitable for all UI
        components. Consider when to use SectionList or other components based on your app's
        requirements.
      </p>
      <h2 class="gradient-text">Memoization with React.memo</h2>
      <p class="paragraph">
        <b>What it does:</b>
        <br /> React.memo is a higher-order component (HOC) in React that memoizes functional
        components. It prevents re-renders when the component's props remain unchanged.
      </p>
      <p class="paragraph">
        <b>How to use it:</b>
        <br />
        Wrap a functional component with React.memo to create a memoized version. Control re-renders
        by defining a custom comparison function for props using the areEqual parameter.
        {/* <pre class="code">const ExpensiveComponent = ({ data }) =&gt; {
  // Imagine this component is computation-heavy
  const result = data * 2;

  return (
    &lt;div&gt;
      &lt;h1&gt;Result: {result}&lt;/h1&gt;
    &lt;/div&gt;
  );
};

// Without React.memo, ExpensiveComponent re-renders with every parent render
// With React.memo, it re-renders only when the &quot;data&quot; prop changes
const MemoizedExpensiveComponent = React.memo(ExpensiveComponent);

const App = () =&gt; {
  const [value, setValue] = React.useState(10);

  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; setValue(value + 1)}&gt;Increment&lt;/button&gt;
      &lt;MemoizedExpensiveComponent data={value} /&gt;
    &lt;/div&gt;
  );
};

export default App;</pre> */}
        <b>Limits:</b>
        <br /> Memoization is most effective for pure presentational components. Be cautious with
        components that contain complex logic or side effects.
      </p>
      <h2 class="gradient-text">Harnessing useMemo and useCallback</h2>
      <p class="paragraph">
        useMemo is a React hook that's all about optimizing your calculations. It allows you to
        memoize the result of a computation, ensuring that it's only recalculated when its
        dependencies change. Memoization, in this context, means storing the result of a function
        call and returning the cached result when the same inputs occur again. Consider a scenario
        where you're performing complex calculations or fetching data from an API within a
        component. Without useMemo, these calculations or fetch operations might be triggered with
        every render, even when the component's state or props haven't changed. This can lead to
        inefficient usage of computational resources and unnecessary re-renders. By using useMemo,
        you can store the result of these calculations and only recompute them when the specified
        dependencies change. This is especially handy for expensive operations that shouldn't be
        repeated unless necessary.
      </p>
      {/* <pre class="code">const expensiveCalculation = (input) =&gt; {
  // Expensive computation logic
};

const MyComponent = ({ data }) =&gt; {
  const result = useMemo(() =&gt; expensiveCalculation(data), [data]);

  return &lt;div&gt;{result}&lt;/div&gt;;
};</pre>

<p class="paragraph">useCallback is closely related to useMemo, but its primary focus is on optimizing function references. When you define a function inside a component, it's recreated with every render. This means that if you pass that function as a prop to child components or use it as a dependency in other hooks, it can trigger re-renders unnecessarily.
Here's where useCallback shines. It memoizes the function reference, ensuring that it remains constant unless its dependencies change. This is incredibly useful when dealing with callbacks for event handlers or functions that are used as dependencies in useEffect.</p>
<pre class="code">const MyComponent = ({ onClick }) =&gt; {
  const handleClick = useCallback(() =&gt; {
    // Handle click
  }, []);

  return &lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;;
};</pre> */}
      <h2 class="gradient-text">Use Profiling Tools</h2>
      <p class="paragraph">
        <b>What it does:</b>
        <br /> Profiling tools such as React DevTools allow you to measure performance and identify
        performance bottlenecks in your app.
      </p>
      <p class="paragraph">
        <b>How to use it:</b>
        <br />
        Install and set up React DevTools in your development environment. Record and analyze
        performance profiles. Identify components causing excessive re-renders, and optimize them.
        <b>Limits:</b>
        <br /> Profiling tools provide insights into performance bottlenecks, but they don't provide
        direct solutions. Optimizing your app based on profiling data is essential.
      </p>
      <h2 class="gradient-text">Optimize Item Components</h2>
      <p class="paragraph">
        <b>What it does:</b>
        <br /> Optimizing item components involves making them lightweight, avoiding heavy
        computations, and minimizing side effects.
      </p>
      <p class="paragraph">
        <b>How to use it:</b>
        <br />
        Ensure item components only contain the necessary logic for rendering. Avoid complex
        computations and side effects inside item components. Optimize rendering for complex
        components.
        <b>Limits:</b>
        <br /> Item components must balance between reusability and complexity. Careful
        consideration is required for more complex items.
      </p>
      <h2 class="gradient-text">Streamline Network Requests</h2>
      <p class="paragraph">
        <b>What it does:</b>
        <br /> Streamlining network requests involves optimizing API calls by techniques such as
        caching, batching, and loading data incrementally.
      </p>
      <p class="paragraph">
        <b>How to use it:</b>
        <br />
        Implement caching strategies to reduce unnecessary network requests. Consider batching
        multiple requests to reduce the overhead of making numerous small requests. Implement lazy
        loading or pagination for large data sets.
        <b>Limits:</b>
        <br /> These strategies depend on your app's specific requirements and the APIs you interact
        with.
      </p>
      <h2 class="gradient-text">Efficient State Management</h2>
      <p class="paragraph">
        <b>What it does:</b>
        <br /> Efficient state management involves minimizing frequent state updates, which can lead
        to unnecessary re-renders.
      </p>
      <p class="paragraph">
        <b>How to use it:</b>
        <br />
        Carefully manage state updates and avoid excessive re-renders. Use hooks like useMemo and
        useCallback to memoize values and functions. Implement shouldComponentUpdate when using
        class components.
        <b>Limits:</b>
        <br /> Over-optimizing state management can lead to complex code. Balance between
        performance and maintainability.
      </p>
      <h2 class="gradient-text">Content Optimization</h2>
      <p class="paragraph">
        <b>What it does:</b>
        <br /> Content optimization involves optimizing the content within list items by employing
        techniques like lazy loading for images and other resources.
      </p>
      <p class="paragraph">
        <b>How to use it:</b>
        <br />
        Lazy load images to avoid blocking rendering of other components. Optimize content within
        items, such as text and icons, for quick rendering.
        <b>Limits:</b>
        <br /> Content optimization varies depending on the nature of the content and the components
        involved.
      </p>
      <h2 class="gradient-text">Implement Pagination</h2>
      <p class="paragraph">
        <b>What it does:</b>
        <br /> Implementing pagination or infinite scrolling allows you to handle large data sets
        effectively without loading all data at once.
      </p>
      <p class="paragraph">
        <b>How to use it:</b>
        <br />
        Break your data into smaller chunks or pages. Load data incrementally as the user scrolls,
        and manage the loaded data efficiently.
        <b>Limits:</b>
        <br /> Pagination is beneficial for long lists but may not be suitable for all types of
        data.
      </p>
      <h2 class="gradient-text">Use useEffect Wisely</h2>
      <p class="paragraph">
        <b>What it does:</b>
        <br /> Understanding the impact of useEffect on re-renders and ensuring correct dependency
        management to avoid unnecessary re-renders.
      </p>
      <p class="paragraph">
        <b>How to use it:</b>
        <br />
        Be aware that useEffect can trigger re-renders if not managed properly. Define dependencies
        correctly to ensure that the effect only runs when necessary.
        {/* <pre class="code">import React, { useState, useEffect } from 'react';

const App = () =&gt; {
  const [count, setCount] = useState(0);

  // The effect function is executed after the component renders
  useEffect(() =&gt; {
    document.title = `Count: ${count}`;

    // This function will be called when the component unmounts or when count changes
    return () =&gt; {
      document.title = 'React App'; // Cleanup code
    };
  }, [count]);

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
};

export default App;</pre> */}
        <b>
          Limits:<b></b>
          <br />
        </b>
        <br /> Incorrectly managing dependencies can lead to bugs or suboptimal performance.
      </p>
      <p class="conclusion">
        In conclusion, optimizing performance in a React Native app is crucial for delivering a
        smooth and responsive user experience. By implementing the techniques and best practices
        discussed in this comprehensive guide, you can significantly enhance your app's speed and
        efficiency.
      </p>
      <NewsletterSubscription />
      <FooterArticles />
      <br />
      <br />
    </div>
  );
};

export default Mockarticle;
