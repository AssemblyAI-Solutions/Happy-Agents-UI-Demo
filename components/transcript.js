import { faFileText } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Transcript = (props) => {
    return (
        <div style={styles.mainDiv}>
            <p style={styles.componentHeader}>
                <span><FontAwesomeIcon icon={faFileText} style={{marginRight: 8}}></FontAwesomeIcon></span>
                CALL TRANSCRIPT
            </p>
            {generateBubbles(props)}
        </div>
    )
}

function generateBubbles(props) {
    var divs = []
    props.json.utterances.forEach(utt => {
        // var average = getAverageSentimentForUtterance(props, utt.text)
        var div = <div style={{backgroundColor: utt.speaker == 'B' ? '#5F9AF225': '#EAEAEA', paddingLeft: 15, paddingTop: 5, paddingBottom: 5, paddingRight: 15, marginBottom: 15, marginRight: 20, fontSize: 14, fontWeight: '500', borderRadius: 10, color: 'black', justifyContent: utt.speaker == 'A' ? 'left':'right', display:'flex', float: utt.speaker == 'B' ? 'left':'right', width: '80%' }}>
            <div style={{width: '100%', paddingRight: 20}}>
                <p style={{fontWeight: '700', marginBottom: '-5px'}}>SPEAKER {utt.speaker}: {millisToMinutesAndSeconds(utt.start)} – {millisToMinutesAndSeconds(utt.end)}</p>
                <p style={{lineHeight: '1.4'}}>{utt.text}</p>
                {/* <p style={{color: 'gray', flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                    <span style={{backgroundColor: average.includes('NEUTRAL') ? '#00000030':average.includes('POSITIVE')? '#62A163':'#FF7C7C', borderRadius: 100, width: 10, height: 10, marginRight: 5}}></span>
                    {average}
                </p> */}
            </div>
        </div>
        divs.push(div)
    }); 
    return divs
}
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function getAverageSentimentForUtterance(props, utt) {
    var split = utt.match( /[^\.!\?]+[\.!\?]+/g );
    var total = 0
    split.forEach(u => {
        var searchedUtt = props.json.sentiment_analysis_results.filter(sa => sa.text == u.trim())
        if (searchedUtt.length > 0) {
            var sentiment = searchedUtt[0].sentiment
            total += sentiment == 'POSITIVE' ? 1:sentiment == 'NEGATIVE' ? -1 : 0
        }
    })
    return getSentimentLabelForScore(total / split.length)
}

function getSentimentLabelForScore(score) {
    var string = Math.abs(Math.round(score * 100)) + '% '
    return (score > 0 ? string + 'POSITIVE' : score < 0 ? string + 'NEGATIVE' : 'NEUTRAL')
}

const styles = {
    mainDiv: {
        backgroundColor: 'white',
        borderRadius: '8px',
        borderStyle: 'none',
        boxShadow: '0px 8px 4px #0000001a',
        maxHeight: '750px',
        overflowY: 'auto',
        paddingLeft: 25,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
    },
    componentHeader: {
        color: '#A8A8A8',
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 20,
    }
}

export default Transcript
