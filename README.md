# Astro Build for the Town of Triangle 

This is a conversion of our Create React Town of Triangle build. 

Astro routing works very intuitvly just add a new file under pages and that will be rendered at an end point with the same name. 

Integration with React was very simple. Most of my react components are making use of the intersection observer, which means they need to be running JS on the client side, so we simply add `client:load` to the components tag. This makes it a server-side rendered component that hydrates on the front end rather than simply statically generated HTML.