import { Dimmer, Loader } from 'semantic-ui-react';

export const Loading = () => (
  <Dimmer active inverted>
    <Loader inverted content="Loading" />
  </Dimmer>
);
