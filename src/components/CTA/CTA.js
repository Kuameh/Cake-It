import React from "react"
import { Link } from "gatsby"
import {
  StyledImg,
  CTAImage,
  CTAImageTextWrapper,
  CTAImageText,
} from "./CTA.styles"

const Cta = ({ image, link, text, alt }) => {
  return (
    <CTAImage>
      <StyledImg image={image} alt={alt} />
      <Link to={link}>
        <CTAImageTextWrapper>
          <CTAImageText>{text}</CTAImageText>
        </CTAImageTextWrapper>
      </Link>
    </CTAImage>
  )
}

export default Cta
