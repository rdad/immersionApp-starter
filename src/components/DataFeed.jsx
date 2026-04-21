import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Comment from './comment/Comment';
import Picture from './camera/Picture';
import Alert from 'react-bootstrap/Alert';
import ScrollToTop from "react-scroll-to-top";
import noData from '../assets/no-data.png';

function DataFeed() {

  return (
    <Container style={{marginTop: '80px'}}>
      <ScrollToTop 
        top={window.innerHeight * .5}
        color="#01B9FD"
        smooth 
      />
      <Stack gap={3}>
        <Comment key={1} content="comment exemple" />
        <Picture key={2} content="https://i0.wp.com/impactify.io/wp-content/uploads/2024/05/placeholder-5.png?resize=768%2C512&ssl=1" />
      </Stack>
    </Container> 
  );
}

export default DataFeed;