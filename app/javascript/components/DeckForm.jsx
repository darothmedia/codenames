import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DeckForm = props => {
  useEffect(() => {
    {console.log(document)}
  }, [])

  const [wordList, setWordList] = useState([])

  return(
    <div id='lobby-page-container' className="primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <p className="lead">
            Enter words, one per line:
          </p>
          <Form>
            <Form.Group>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DeckForm

