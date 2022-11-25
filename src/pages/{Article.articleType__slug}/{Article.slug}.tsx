import { graphql, PageProps } from "gatsby";
import React from "react";

const IndexPage: React.FC<PageProps<Queries.SingleArticleQuery>> = (props) => {
  return (
    <main>
      <p>Got path as: {props.data.article?.gatsbyPath}</p>
      <p>
        Expect to see: /{props.data.article?.articleType?.slug}/
        {props.data.article?.slug}/
      </p>
      <pre>{JSON.stringify(props, undefined, 2)}</pre>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query SingleArticle($id: String) {
    article(id: { eq: $id }) {
      gatsbyPath(filePath: "/{Article.articleType__slug}/{Article.slug}")
      name
      slug
      articleType {
        name
        slug
      }
    }
  }
`;
