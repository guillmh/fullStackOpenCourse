import '../styles/succes.css'

const SuccesMessage = ({message}) => {
  if(message === null) {
    return null
  }

    return (
        <div className='success-message'>
            {message}
        </div>
    );
}

export default SuccesMessage;
