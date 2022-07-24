import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeCircles } from 'react-loader-spinner';
import { Box } from 'components/Box/Box';

export default (
  <Box display="flex" justifyContent="center" mt={6}>
    <ThreeCircles
      color="red"
      outerCircleColor="blue"
      middleCircleColor="green"
      innerCircleColor="grey"
    />
  </Box>
);
