import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Faq = ({ data: { faq } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={faq.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{faq.title}</h1>
        <p className="sheet__lead">{faq.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={faq.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: faq.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Faq

export const query = graphql`
  query FaqQuery {
    faq: datoCmsFaqPage {
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
