import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const IndexPage = ({ data: { index } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={index.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{index.title}</h1>
        <div className="sheet__gallery">
          <Img fluid={index.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: index.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    index: datoCmsIndexPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
