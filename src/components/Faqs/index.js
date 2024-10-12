import './index.css'
import FaqItem from '../FaqItem'
const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="mainDiv">
      <div className="secondDiv">
        <h1>FAQs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem details={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
