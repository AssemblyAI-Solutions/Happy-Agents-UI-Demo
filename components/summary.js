import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Summary = (props) => {
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
                CALL SUMMARY
            </p>
            {props.topic_summary != '' && <p style={{
                color: '#3985F8',
                padding: 10,
                fontSize: 15,
                cursor: 'pointer',
                fontWeight: '500'}}
                onClick={() => props.showBulletsClick()}>
                {props.showBullets ? 'View call summary':'Generate follow up email'}
            </p>}
        </div>
        {props.showBullets ?
        <p style={{
            color: '#000',
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 1.8, 
            whiteSpace: 'pre-wrap',
            paddingRight: 30,
            }}>
            {props.topic_summary}
        </p>:
         <p style={{
            color: '#000',
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 1.8, 
            paddingRight: 30,
            whiteSpace: 'pre-wrap'
            }}>
            {props.summary}
        </p>}
        </div>
    )
}

export default Summary