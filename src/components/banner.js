/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import Bannerleft from './banner-left'
 import Bannerright from './banner-right'

 const Banner = () => {
   const { author } = useStaticQuery(graphql`
   query PageQuery {
    Banner:wpPage{
        content
        id
      }
  }
  
   `)
   return (
     <div className="banner">
            <Bannerleft eyebrow="FOOD & DRINK" heading="Discover the Latest in Taste" btnText="See more"/>
            <Bannerright />
     </div>
   )
 }
 
 export default Banner
 