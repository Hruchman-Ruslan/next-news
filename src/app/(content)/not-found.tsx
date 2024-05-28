import React from "react";

export interface NotFoundPageProps {}

export default function NotFoundPage({}: NotFoundPageProps) {
  return (
    <div id="error">
      <h1>Not Found!</h1>
      <p>The request resource not be found!</p>
    </div>
  );
}
