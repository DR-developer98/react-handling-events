import React from "react";

function MethodsPropsChild(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          <p>Welcome to the site! Please complete the steps below:</p>
          <ol>
            <li>Confirm your e-mail</li>
            <li>Complete your profile</li>
            <li>Subscribe to the newsletter</li>
          </ol>
          <button onClick={props.handleSignInAndOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in</p>
          <button onClick={props.handleSignInAndOut}>Sign in</button>
        </div>
      )}
    </div>
  );
}

export default MethodsPropsChild;
