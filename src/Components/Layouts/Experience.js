import React from "react";
import { Grid, Slug, Fade} from 'mauerwerk'
import data from '../../expData'

const Cell = ({ toggle, name, height, description, css, maximized, logo, logoSize }) => (
  <div
    className="cell"
    style={{ backgroundImage: 'linear-gradient(to top, #fff 0%, #fff 100%)', cursor: !maximized ? 'pointer' : 'auto' }}
    onClick={!maximized ? toggle : undefined}>
    <Fade show={maximized} delay={maximized ? 400 : 0}>
      <div className="details" onClick={toggle}>
        <Slug delay={600}>
          <h1>{name}</h1>
          <p>{description}</p>
        </Slug>
      </div>
    </Fade>
    <Fade
      show={!maximized}
      from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
      enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
      leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
      delay={maximized ? 0 : 400}>
      <div className="cellStart">
      <img className="logoImage" style={{width: logoSize}} src={logo}/>
      <div className="cellTitle"><h2>{name}</h2></div>
      </div>
    </Fade>
  </div>
)

class Experience extends React.Component {
  render() {
    return (
    <div>
        <div id="experience" class="section-exp experience scrollify">
            <div class="exp-header">
              <h1>E X P E R I E N C E</h1>
            </div>
            <div class="exp-content">
            <Grid
          className="grid"
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={data}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={d => d.name}
          // Can be a fixed value or an individual data accessor
          heights={d => d.height}
          // Number of columns
          columns={3}
          // Space between elements
          margin={20}
          // Removes the possibility to scroll away from a maximized element
          lockScroll={false}
          // Delay when active elements (blown up) are minimized again
          closeDelay={400}>
          {(data, maximized, toggle) => (
            <Cell {...data} maximized={maximized} toggle={toggle} />
          )}
        </Grid>
        </div>
        </div>
    </div>  
    )
  }
}

export default Experience;