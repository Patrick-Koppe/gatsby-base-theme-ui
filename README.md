# Setup our Project ⚙️

## Install Gatsby theme ui
<ol>
<li>Install the following packages: <code>yarn add theme-ui gatsby-plugin-theme-ui @emotion/core @mdx-js/react</code>.</li>
<li>Config the gatsby-config.js <code>plugins: ["gatsby-plugin-theme-ui"]</code></li>
<li>Create a folder for the theme-ui with an index.js configs <code>src/gatsby-plugin-theme-ui/index.js</code></li>
</ol>

## Configure our Styles
<ol>
<li>Confgure our theme-ui index.js</li>
<li>Change your components (e.g. header.js):</br>
Add jsx in your file <code>/** @jsx jsx */</code></br>
Import theme-ui: <code>import { jsx } from "theme-ui"</code>
<li>Stlye ur componens:</br>
<code> >header< sx={{color: "background",backgroundColor: "primary"}} >/header< </code>
</li>
<li>Re-run <code>gatsby develop</code></li>
</ol>