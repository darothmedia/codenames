import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createDeck } from '../actions/deck_actions';
import { connect } from 'react-redux';


const mSTP = state => ({})
const mDTP = dispatch => ({
  createDeck: deck => dispatch(createDeck(deck)),
  clearErrors: errors => dispatch(clearErrors(errors))
})

const DeckForm = props => {
  useEffect(() => {
  }, [])

  const [wordList, setWordList] = useState("")
  const {createDeck, clearErrors} = props

  function formSubmit(){
    let split = wordList.split(/[, \n]+/)
    createDeck(split)
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

export default connect(mSTP, mDTP)(DeckForm)

