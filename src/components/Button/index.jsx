import './Button.css'

const Button = (props) =>{

    const {texto} = props
    return <button className='button'>
        {texto}
    </button>
}

export default Button