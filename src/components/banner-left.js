/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 
 const Bannerleft = (props) => {
   return (
     <div className="banner">
         <p>{props.eyebrow}</p>
         <h1>{props.heading}</h1>
         <button>{props.btnText}</button>

     </div>
   )
 }
 
 export default Bannerleft
 