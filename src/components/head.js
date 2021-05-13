import React from "react"
import { graphql, useStaticQuery } from "gatsby"
const Head = ({ siteTitle }) => {
  // query data here
  const data = useStaticQuery(
    graphql`
      {
        wpMenu {
          id
          menuItems {
            nodes {
              parentId
              label
              path
              childItems {
                nodes {
                  path
                  label
                }
              }
            }
          }
        }
      }
    `
  )
  console.log(data);
  return (
    <div className="header">
        <h1></h1>
    </div>
    
  )
}

export default Head