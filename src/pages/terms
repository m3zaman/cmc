import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Terms = ({ data: { terms } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={terms.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{terms.title}</h1>
        <p className="sheet__lead">{terms.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={terms.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: terms.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Terms

export const query = graphql`
  query TermsQuery {
    terms: datoCmsTermsPage {
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
