import React from 'react'
import './index.css'

class FaqItem extends React.Component {
  state = {
    isAnswerVisible: false,
  }

  toggleAnswer = () => {
    this.setState(prevState => ({
      isAnswerVisible: !prevState.isAnswerVisible,
    }))
  }

  render() {
    const {details} = this.props
    const {questionText, answerText} = details
    const {isAnswerVisible} = this.state

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="toggle-button"
            onClick={this.toggleAnswer}
          >
            <img
              src={
                isAnswerVisible
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={isAnswerVisible ? 'minus' : 'plus'}
            />
          </button>
        </div>
        {isAnswerVisible && (
          <div className="answer-container">
            <hr
              style={{
                border: 'none',
                height: '2px',
                backgroundColor: '#e4e7eb',
              }}
            />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
