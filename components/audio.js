import { faFileAudio } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Audio = (props) => {
    return (
        <div style={styles.mainDiv}>
        <p style={styles.componentHeader}>
            <span><FontAwesomeIcon icon={faFileAudio} style={{marginRight: 8}}></FontAwesomeIcon></span>
            CALL RECORDING
        </p>
        {<video style={{width: '100%', height:'auto', borderRadius: 8, objectFit: 'cover'}} controls onLoadedData={() => {
        }}>
            <source type="video/mp4" src={props.url} />
        </video>}
        </div>
    )
}

const styles = {
    mainDiv: {
        backgroundColor: 'white',
        borderRadius: '8px',
        borderStyle: 'none',
        boxShadow: '0px 8px 4px #0000001a',
        paddingLeft: 25,
        paddingTop: 10,
        paddingBottom: 15,
        paddingRight: 20,
        margin: 10
    }, 
    componentHeader: {
        color: '#A8A8A8',
        fontSize: 15,
        fontWeight: '500'
    }
}

export default Audio