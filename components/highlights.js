const Highlights = (props) => {
    return (
        <div style={{width: '90%', paddingTop: 20}}>
            {generateCustomerLowlights(props)}
        </div>
    )
}

function getPercSpan(number) {
    return <span style={{fontWeight: '700', color: '#D05554', fontStyle: 'normal', marginRight: 5}}>
        {number}%
    </span>
}

function generateCustomerLowlights(props) {
    var cs = getCustomerSentiments(props, 'negative')
    var max = cs.length > 3 ? 3:cs.length

    var pArray = []
    for (var x = 0; x < max; x++) {
        pArray.push(<p style={{color: '#00000050', fontWeight: '500', lineHeight: 1.5, fontStyle: 'italic', fontSize: 15, marginTop: '-5px'}}>{getPercSpan(Math.round(cs[x].confidence*100))}{cs[x].text} <span style={{fontStyle: 'normal', color: '#00000020'}}>({millisToMinutesAndSeconds(cs[x].start)})</span></p>)
    }
    if (pArray.length == 0) {
        pArray.push(<p style={{color: '#00000050', fontWeight: '500', lineHeight: 1.5, fontSize: 15, marginTop: '-5px'}}>Nothing to report 🎉</p>)
    }
    return pArray
}

function getCustomerSentiments(props, sentiment) {
    var allSentimentTexts = props.json.sentiment_analysis_results.filter(sa => sa.sentiment.toLowerCase() == sentiment.toLowerCase() && (sa.speaker == 'C'))
    allSentimentTexts.sort((a, b) => (a.confidence < b.confidence) ? 1 : -1)
    return allSentimentTexts
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export default Highlights