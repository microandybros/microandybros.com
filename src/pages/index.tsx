import "nes.css/css/nes.css"
import React from "react"
import "../styles/layout.css"
import "../styles/typo.css"

export default () => {
  return (
    <div className="container">
      <header>
        <h1 id="logo">13bit Micro Andy Bros</h1>
      </header>

      <span className="nes-text is-primary">Primary</span>
      <span className="nes-text is-success">Success</span>
      <span className="nes-text is-warning">Warning</span>
      <span className="nes-text is-error">Error</span>
      <span className="nes-text is-disabled">Disabled</span>

      <a className="nes-btn">Normal</a>

      <button type="button" className="nes-btn is-primary">Primary</button>
      <button type="button" className="nes-btn is-success">Success</button>
      <button type="button" className="nes-btn is-warning">Warning</button>
      <button type="button" className="nes-btn is-error">Error</button>
      <button type="button" className="nes-btn is-disabled">Disabled</button>

      <main>
        <div className="content">
          <h1 className="headline">Micro Andy Bros</h1>
          <h2 className="subHeadline">Inside joke meets business</h2>
        </div>
        <div className="sidebar">
          Sidebar
          </div>
      </main>
    </div>
  )
}
