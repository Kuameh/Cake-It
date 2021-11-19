import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./BreadCrumb.styles"

const BreadCrumb = ({ parent }) => {
  return (
    <Wrapper>
      Breadcrumb
      {console.log(parent)}
    </Wrapper>
  )
}

export default BreadCrumb
