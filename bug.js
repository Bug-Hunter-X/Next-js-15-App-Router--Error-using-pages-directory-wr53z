```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello world!</div>
  );
}
```

This code will cause a runtime error in Next.js 15 if you try to use it in App Router. The `pages` directory is not supported by the App Router.  To fix this, you need to move the component to the `app` directory, and adjust the file structure.