import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const GuidePage = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsHelp.edges.map(({ node: help }) => (
        <div key={help.id} className="showcase__item">
          <figure className="card">
            <Link to={`/helps/${help.slug}`} className="card__image">
              <Img fluid={help.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/helps/${help.slug}`}>{help.title}</Link>
              </h6>
              <div className="card__description">
                <p>{help.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
)

export default GuidePage

export const query = graphql`
  query GuidePageQuery {
    allDatoCmsHelp(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
