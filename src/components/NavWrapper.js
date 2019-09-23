import React from 'react';

import Header from './Header';
import BookNavBar from './BookNavBar';

class NavWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        bookNavOpen: false
    }
  }

  toggleBookNav = () => {
    if (this.state.bookNavOpen) {
      this.setState(() => ({ bookNavOpen: false }))
    } else {
      this.setState(() => ({ bookNavOpen: true }))
    }
  }

  render() {
    return(
      <div>
        <Header toggleBookNav={this.toggleBookNav}/>
        <BookNavBar {...this.state} toggleBookNav={this.toggleBookNav} />
      </div>
    )
  }
}

export default NavWrapper;