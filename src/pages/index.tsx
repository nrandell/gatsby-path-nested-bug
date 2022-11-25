import React from "react";

const IndexPage: React.FC = (props) => {
  return (
    <main>
      <pre>{JSON.stringify(props, undefined, 2)}</pre>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
