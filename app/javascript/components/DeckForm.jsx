import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DeckForm = () => {
  useEffect(() => {
  }, [])

  const [wordList, setWordList] = useState("")

  function formSubmit(){
    let split = wordList.split(/[, \n]+/)
    console.log(split)
  }

  function formChange(e){
    setWordList(e.target.value)
  }

  return(
    <div id='lobby-page-container' className="primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <p className="lead">
            Enter words, one per line:
          </p>
          <Form onSubmit={formSubmit}>
            <Form.Group>
              <Form.Control value={wordList} onChange={formChange} as="textarea" rows={10} />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit" onClick={formSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DeckForm

