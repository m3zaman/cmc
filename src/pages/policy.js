import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Policy = ({ data: { policy } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={policy.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{policy.title}</h1>
        <p className="sheet__lead">{policy.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={policy.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: policy.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Policy

export const query = graphql`
  query PolicyQuery {
    policy: datoCmsPolicyPage {
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
