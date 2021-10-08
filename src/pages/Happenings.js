import './Happenings.css'

const Happenings = ({ news1title, news1, news1Image, news2title, news2, news3title, news3, events, eventsDesc }) => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return (
        <div className="happenings-main-page">
            <div className="happenings-page">
                <div className="happenings-header">
                    <h1>What's happening at Saksham!</h1>
                </div>
                <div className="happenings-date">
                    <p>Date: {date}-{month}-{year}</p>
                </div>
                <div className="happenings-news-section">
                    <div className="happenings-news1">
                        <h2>{news1title}</h2>
                        <p>{news1}</p>
                        <img alt="" src={news1Image} />
                    </div>
                    <div className="happenings-news2">
                        <h2>{news2title}</h2>
                        <p>{news2}</p>
                    </div>
                    <div className="happenings-news3">
                        <h2>{news3title} </h2>
                        <div className="happenings-news3-content">
                            <p>{news3} </p>
                        </div>
                    </div>
                    <div className="happenings-events">
                        <h2>Events</h2>
                        <ul>
                            {events.map(event => (
                                <li>{event}</li>
                            ))}
                        </ul>
                        <p>{eventsDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Happenings
