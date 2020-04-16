import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Refund = ({ data: { refund } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={refund.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{refund.title}</h1>
        <p className="sheet__lead">{refund.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={refund.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: refund.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Refund

export const query = graphql`
  query RefundQuery {
    refund: datoCmsRefundPage {
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
