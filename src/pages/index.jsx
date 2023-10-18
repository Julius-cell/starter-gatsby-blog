import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

function RootIndex(props) {
  console.log(props);
  // const posts = props.data.allContentfulBlogPost.nodes;
  // const [author] = props.data.allContentfulPerson.nodes;
  // console.log(posts);
  // console.log(author);

  return (
    // <Layout location={props.location}>
    //   <Hero
    //     image={author.heroImage.gatsbyImage}
    //     title={author.name}
    //     content={author.shortBio}
    //   />
    //   <ArticlePreview posts={posts} />
    // </Layout>
    <h1>holaa</h1>
  )
}

export default RootIndex

export const GetHomePgPage = graphql`
  query {
    allContentfulPgPage(filter: {baseUrl: {eq: "home"}}) {
      nodes {
        baseUrl
        title
        header {
          title
        }
        modules {
          title
          elements {
            title
            description
          }
        }
        footer {
          title
        }
      }
    }
  }
`

