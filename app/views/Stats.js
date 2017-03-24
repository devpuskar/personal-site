import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Helmet from 'react-helmet';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Stats = () => (
  <article className="post" id="stats">
    <Helmet title="Stats" />
    <header>
      <div className="title">
        <h2><Link to="/stats">Stats</Link></h2>
      </div>
    </header>
    <Personal />
    <Site />
  </article>
);

export default Stats;
