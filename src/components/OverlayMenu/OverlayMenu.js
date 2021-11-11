import React from "react"
import { Link } from "gatsby"
import InvertedLogo from "../../images/logo-inverted.svg"
import CloseButton from "../../images/close_btn.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Overlay } from "./OverlayMenu.styles"

const OverlayMenu = ({ menuOpen, callback }) => {
  const { menu } = useMenuQuery()

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img src={InvertedLogo} alt="white-logo" className="invertedLogo" />
        <ul className="overlayMenu">
          {menu.menuItems.nodes.map(item =>
            !item.parentId ? (
              <li key={item.id}>
                <Link to={item.url} activeClassName="overlayActive">
                  {item.label}
                </Link>
              </li>
            ) : null
          )}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          onKeyDown={callback}
          role="button"
          tabIndex="0"
        >
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
