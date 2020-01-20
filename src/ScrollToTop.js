import { Component } from 'react'
import { withRouter } from 'react-router'


class ScrollToTop extends Component {
  
  componentDidUpdate(prevProps) {
    const { location } = this.props
    let isShouldScroll = false
 
    if (location !== prevProps.location && !isShouldScroll) {
      document.getElementById('root').scrollIntoView()
    }
  }
 
  render() {
    const { children } = this.props
    return children
  }
}
 

 
 export default withRouter(ScrollToTop)