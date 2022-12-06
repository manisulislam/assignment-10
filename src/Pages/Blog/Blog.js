import React from 'react';

const Blog = () => {
    return (
        <div >
            <h1 className='text-3xl text-purple-600 font-bold text-center my-5'>WELCOME TO OUR BLOG PAGE</h1>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium ">
  what is cors?
  </div>
  <div className="collapse-content"> 
    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  How does the private route work?
  </div>
  <div className="collapse-content"> 
    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is Node? How does Node work?
  </div>
  <div className="collapse-content"> 
    <p>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  Why are you using firebase? What other options do you have to implement authentication?
  </div>
  <div className="collapse-content"> 
    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
  </div>
</div>
        </div>
      




    );
};

export default Blog;