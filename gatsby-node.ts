import { CreateSchemaCustomizationArgs, SourceNodesArgs } from "gatsby";

const articleTypes = [
  {
    id: "at1",
    name: "type 1",
    slug: "type1",
  },
  {
    id: "at2",
    name: "type 2",
    slug: "type2",
  },
];

const articles = [
  {
    name: "Article 1",
    id: "a1",
    articleType: "at1",
    slug: "article1",
  },
  {
    name: "Article 2",
    id: "a2",
    articleType: "at2",
    slug: "article2",
  },
  {
    name: "Article 3",
    id: "a3",
    articleType: "at1",
    slug: "article3",
  },
  {
    name: "Article 4",
    id: "a4",
    articleType: "at2",
    slug: "article4",
  },
];

export function sourceNodes(args: SourceNodesArgs) {
  const {
    actions: { createNode },
    createNodeId,
    createContentDigest,
  } = args;

  articleTypes.forEach((at) => {
    const node = {
      ...at,
      parent: null,
      children: [],
      internal: {
        type: "ArticleType",
        contentDigest: createContentDigest(at),
      },
    };
    createNode(node);
  });

  articles.forEach((article) => {
    const node = {
      ...article,
      parent: null,
      children: [],
      internal: {
        type: "Article",
        contentDigest: createContentDigest(article),
      },
    };
    createNode(node);
  });
}

export function createSchemaCustomization({
  actions: { createTypes },
}: CreateSchemaCustomizationArgs) {
  createTypes([
    `type ArticleType implements Node {
            name: String!
            slug: String!
        }`,
    `type Article implements Node {
            name: String!
            articleType: ArticleType @link
            slug: String!
        }`,
  ]);
}
