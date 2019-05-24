import React from 'react';
import { Card } from 'react-bootstrap';

export default props => {
  const {
    title, subTitle, children, route, linkOneTitle
  } = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
        <Card.Text>{children}</Card.Text>
        <Card.Link href={route}>{linkOneTitle}</Card.Link>
      </Card.Body>
    </Card>
  );
};
