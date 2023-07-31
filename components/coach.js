import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Coach = (props) => {
    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            borderStyle: 'none',
            boxShadow: '0px 8px 4px #0000001a',
            paddingLeft: 25,
            paddingTop: 10,
            paddingBottom: 10,
            margin: 10
        }}>
        <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20}}> 
            <p style={{
                color: '#A8A8A8',
                fontSize: 15,
                fontWeight: '500'
                }}>
                <span><FontAwesomeIcon icon={faListAlt} style={{marginRight: 8}}></FontAwesomeIcon></span>
                AGENT COACHING
            </p>
        </div>
        <p style={{
            color: '#000',
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 1.8, 
            paddingRight: 30,
            whiteSpace: 'pre-wrap'
            }}>
            {props.feedback}
        </p>
        </div>
    )
}

export default Coach