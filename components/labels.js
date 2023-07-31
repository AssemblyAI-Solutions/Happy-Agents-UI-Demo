import { faFrown, faSmile, faMeh } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Labels = (props) => {
    return (
        <div style={styles.labelDiv}>
            <div>
                <p style={styles.labelHeader}>Negative</p>
                <p style={styles.countText}><FontAwesomeIcon icon={faFrown} color={'#D05554'} style={{marginRight:8}}/>{getSentimentSegments(props, 'negative')}</p>
            </div>
            <div>
                <p style={styles.labelHeader}>Neutral</p>
                <p style={styles.countText}><FontAwesomeIcon icon={faMeh} color={'#FFB552'} style={{marginRight:8}}/>{getSentimentSegments(props, 'neutral')}</p>
            </div>
            <div>
                <p style={styles.labelHeader}>Positive</p>
                <p style={styles.countText}><FontAwesomeIcon icon={faSmile} color={'#62A163'} style={{marginRight:8}}/>{getSentimentSegments(props, 'positive')}</p>
            </div>
        </div>
    )
}

function getSentimentSegments(props, sentiment) {
    return props.json.sentiment_analysis_results.filter(sa => sa.sentiment.toLowerCase() == sentiment.toLowerCase()).length
}

const styles = {
    labelDiv: {width: '60%', flexDirection: 'row', display: 'flex', paddingTop: 8, userSelect: 'none', justifyContent: 'space-between'},
    labelHeader: {color: 'gray', fontWeight: '500'},
    countText: {color: 'black', fontWeight: '500', fontSize: 16, marginTop: '-5px'}
}

export default Labels