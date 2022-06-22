import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile';
import Publications from './publications/publications';
import Services from './services/services';
import Education from './education/education'
import { Stack } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <Stack
      flexDirection={{
        xs: 'column',
        md: 'row'
      }}
      sx={{
        maxWidth: 960,
        mx: 'auto'
      }}
      py={8}
      px={{
        xs: 4,
        md: 0
      }}
      gap={{
        xs: 30/8,
        md: 0
      }}
    >
      <Profile/>
      <Stack 
        sx={{
          marginLeft: {
            md: 98/8
          }
        }}
        gap={50/8}
      >
          <Publications></Publications>
          <Services></Services>
          <Education></Education>
      </Stack>
    </Stack>
  );
}

export default App;
