import './App.css';
import Health from './pages/Health';
import Why_Saksham from './pages/Why_Saksham';
import ContactUsForm from './pages/ContactUsForm';
import SchoolForm from './pages/SchoolForm';

function App() {
  const text = "Health is characterized by World Health Organization (WHO) as, a 'Condition of complete physical, mental, and social prosperity, and not simply the shortfall of sickness or ailment.'For people, actual health implies a decent body health, which is sound as a result of customary active (work out), great sustenance, and sufficient rest. As a nation’s or alternately locale’s kin experience further developed sustenance, medical services, ways of life and personal satisfaction, their tallness and weight by and large increment."

  const image = "https://www.oneindia.com/ph-big/2020/04/homeless-poor-people-receive-foods-other-donation-across-india_15880458341.jpg"
  const title = 'A short story about “Saksham” helping people​'
  const quote = '“The purpose of our lives is to be happy.” — Dalai Lama'
  const story = [<div>
    <p>Got to hear the news few years back that a person will have to sell his house to get his treatment done as the doctors demanded ₹15,000/- for the operation, as the person who met with the accident needed a rod to be fixed in the place of his thigh bone.</p>
    <p>Mrs. Namita Gaur shared the story everywhere and within 3 to 4 hours collected approx. ₹30,000/- with which she not only helped him get the operation done successfully but also did fill his home with ration of 6 months.</p>
  </div>]
  const facts = [
    '27 crore people in 64 districts across 13 states don’t have a single blood bank',
    'Just 1833 people are there per one government hospital bed',
    'Just 1833 people are there per one government hospital bed',
    'Just 1833 people are there per one government hospital bed'
  ]
  return (
    <div className="App">
      <Health quote={quote} text={text} image={image} story={story} facts={facts} title={title} />
      {/* <Why_Saksham /> */}
      {/* <ContactUsForm /> */}
      {/* <SchoolForm /> */}
    </div>
  );
}

export default App;
