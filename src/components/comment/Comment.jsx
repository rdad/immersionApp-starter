import Alert from 'react-bootstrap/Alert';

function Comment({content, created='-'}) {

  return (
    <Alert key="primary" variant="pink" className='comment'>
      {content}<span className='content-date'>{created}</span>
    </Alert>
  );
}

export default Comment;