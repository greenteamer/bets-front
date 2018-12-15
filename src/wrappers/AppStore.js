import React from "react"

const value = {
  visibilityFilter: "SHOW_ALL",
  user: null,
}

export const AppContext = React.createContext(value);

export const appConsumerWrapper = Children => props => (
  <AppContext.Consumer>
    {context => 
      <Children {...props} {...context} />
    }
  </AppContext.Consumer>
);

export default class AppProvider extends React.Component {
  state = value

  setVisibilityFilter = visibilityFilter => {
    this.setState({ visibilityFilter })
  }

  updateUserInfo = user => {
    this.setState({ user });
  }

  render() {
    return (
      <AppContext.Provider
        value={{

          visibilityFilter: this.state.visibilityFilter,
          setVisibilityFilter: this.setVisibilityFilter,

          // user info
          user: this.state.user,
          updateUserInfo: this.updateUserInfo,

        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}