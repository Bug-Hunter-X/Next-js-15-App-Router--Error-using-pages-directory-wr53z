```javascript
// app/page.js
export default function Home() {
  return (
    <div>Hello world!</div>
  );
}
```

To fix this issue, simply move the `Home` component from `pages/index.js` to `app/page.js`.  This aligns with the App Router's file structure.  If you have other pages, make sure to move them to the `app` directory and update the file structure accordingly.  Remember to remove the old `pages` directory.