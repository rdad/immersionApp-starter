import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Comment from './comment/Comment';
import Picture from './camera/Picture';
import Alert from 'react-bootstrap/Alert';
import ScrollToTop from "react-scroll-to-top";
import noData from '../assets/no-data.png';

function DataFeed({list}) {

  let content;

  if(list.length === 0){
    content = <img src={noData} />; 
  }else{
    content = list.map(object=>{
      if(object.type === 'comment'){
        return <Comment key={object.id} {...object} />
      }
      if(object.type === 'picture'){
        return <Picture key={object.id} {...object} />
      }
    })
  }

  return (
    <Container style={{marginTop: '80px'}}>
      <ScrollToTop 
        top={window.innerHeight * .5}
        color="#01B9FD"
        smooth 
      />
      <Stack gap={3}>      
        { content }
      </Stack>
    </Container> 
  );
}

export default DataFeed;