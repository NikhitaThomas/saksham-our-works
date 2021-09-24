import './Health.css'
import Quote from '../components/Quote'
import Header from '../components/Header'
import Story from '../components/Story'
import Facts from '../components/Facts'
import KnowMore from '../components/KnowMore'

const Health = () => {
    const text = "Health is characterized by World Health Organization (WHO) as, a 'Condition of complete physical, mental, and social prosperity, and not simply the shortfall of sickness or ailment.'For people, actual health implies a decent body health, which is sound as a result of customary active (work out), great sustenance, and sufficient rest. As a nation’s or alternately locale’s kin experience further developed sustenance, medical services, ways of life and personal satisfaction, their tallness and weight by and large increment."

    const image = "https://www.oneindia.com/ph-big/2020/04/homeless-poor-people-receive-foods-other-donation-across-india_15880458341.jpg"
    const title = <h1>A short story about “Saksham” helping people​</h1>
    const story = [<div>
        <p>Got to hear the news few years back that a person will have to sell his house to get his treatment done as the doctors demanded ₹15,000/- for the operation, as the person who met with the accident needed a rod to be fixed in the place of his thigh bone.</p>
        <p>Mrs. Namita Gaur shared the story everywhere and within 3 to 4 hours collected approx. ₹30,000/- with which she not only helped him get the operation done successfully but also did fill his home with ration of 6 months.</p>
    </div>]
    return (
        <div className="header-quote">
            <Quote quote='“The purpose of our lives is to be happy.” — Dalai Lama' />
            <Header content={text} />
            <Story
                title={title}
                image={image}
                story={story}
            />
            <Facts image="data:image/jpeg;base64,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" header="Facts" />
            <KnowMore title='Know More' body={text} />
        </div>
    )
}

export default Health