import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createDeck, fetchDecks } from '../actions/deck_actions';
import { connect } from 'react-redux';


const mSTP = state => ({})
const mDTP = dispatch => ({
  createDeck: deck => dispatch(createDeck(deck)),
  clearErrors: errors => dispatch(clearErrors(errors)),
  fetchDecks: () => dispatch(fetchDecks())
})

const DeckForm = props => {
  useEffect(() => {
  }, [])

  const [deckInfo, setDeckInfo] = useState({
    wordList: "",
    name: ""
  })
  const {createDeck, clearErrors, fetchDecks} = props

  function formSubmit(){
    let split = deckInfo.wordList.split(/[, \n]+/)
    let newDeck = {
      input_cards: deckInfo.wordList,
      name: deckInfo.name,
      is_private: true,
      num_cards_included: split.length
    }
    createDeck(newDeck)
  }



  function formChange(type, e){
    type === 'list' ? 
      setDeckInfo({ ...deckInfo, wordList: e.target.value }) 
      : setDeckInfo({...deckInfo, name: e.target.value})
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
              <Form.Control value={deckInfo.wordList} onChange={(e) => formChange('list', e)} as="textarea" rows={10} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name this Deck!</Form.Label>
              <Form.Control value={deckInfo.name} onChange={(e) => formChange('name', e)} />
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

