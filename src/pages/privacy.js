import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Privacy = ({ data: { privacy } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={privacy.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{privacy.title}</h1>
        <p className="sheet__lead">{privacy.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={privacy.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: privacy.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Privacy

export const query = graphql`
  query PrivacyQuery {
    privacy: datoCmsPrivacyPage {
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
