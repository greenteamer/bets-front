import React from 'react';

const initialState = {
  me: {
    username: 'Dave',
    email: 'test@test.ru'
  }
};

const UserContext = React.createContext();


export default class UserStore extends React.Component {
  state = {
    me: null,
  }

  updateMe = me => {
    this.setState({
      me,
    });
  }

  render() {
    const {children} = this.props;
    const { me, updateMe } = this.state;
    return (
      <UserContext.Provider value={{
        me,
        updateMe: this.updateMe,
      }}>
        {children}
      </UserContext.Provider>
    )
  }
}

export function withUser(Component) {
  return function ConnectedComponent(props) {
    return (
      <UserContext.Consumer>
        {user => <Component {...props} user={user} />}
      </UserContext.Consumer>
    );
  }
};

