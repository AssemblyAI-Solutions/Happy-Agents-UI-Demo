import Link from 'next/link'

const Button = (props) => {
    return (
        <Link href='' onClick={() => props.click(props.id)} style={{marginTop: 0, fontSize: 15, fontWeight: '500', padding: 15, justifyContent: 'center', alignItems: 'center', display: 'flex', backgroundColor: props.on ? 'white':'', color: props.on ? '#000000':'#00000020', borderRadius: 12, boxShadow: props.on ? '0px 4px 4px #00000020': ''  }}>
          {props.name == '' ? 'Call ' + props.id: props.name}
        </Link>
    )
}

export default Button