# Next.js 15 App Router: Error using pages directory

This repository demonstrates a common error encountered when migrating from the Pages Router to the App Router in Next.js 15: attempting to use the `pages` directory. This results in runtime errors.  The solution involves moving the component to the `app` directory. 

## Steps to reproduce

1. Clone the repository
2. Run `npm install`
3. Try to start the development server using `npm run dev`
4. Observe the error related to the `pages` directory.

## Solution

The provided solution shows how to move the component to the `app` directory, resolving the incompatibility.

## Additional Notes

This error is specific to Next.js 15's App Router.  The Pages Router uses the `pages` directory but is deprecated.