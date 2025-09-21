import { Anchor, Grommet, Box } from 'grommet';
import HomePage from './HomePage';
import { Chat } from 'grommet-icons';

function App() {
  return (
    <Grommet>
      <HomePage />
      <Box margin={'20px'} direction='column' gap='xsmall' align='center' justify='center'>
        <Chat />
        <Anchor
          href={"https://forms.gle/XW8PLFjzEEg2JPKj9"}
          target="_blank"
        >Provide feedback</Anchor>
      </Box>
    </Grommet>
  );
}

export default App;
