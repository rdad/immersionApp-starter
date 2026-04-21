import Card from 'react-bootstrap/Card';

function Picture({content, created='-'}) {

  return (

    <Card className="text-white">
      <Card.Img src={content} />
      <Card.ImgOverlay>
        <Card.Text>
          {created}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Picture;