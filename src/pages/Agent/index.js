import React from 'react';
import { Link, Route } from 'react-router-dom'

import PlayersList from './PlayersList';


// function Topic({ match }) {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

const Agent = ({ match }) => (
    <div>
      <h2>Agent Panel</h2>
      <ul>
        <li>
          <Link to={`${match.url}/players`}>players</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* <Route path={`${match.path}/:topicId`} component={Topic} /> */}
      <Route path={`${match.path}/players`} component={PlayersList} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a page.</h3>}
      />
    </div>
);

export default Agent;