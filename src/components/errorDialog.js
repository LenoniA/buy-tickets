export const ErrorDialog = ({ error, message}) => {
    const handleClose = () => {
      document.querySelector('.error-dialog').close();
      document.querySelector('.error-dialog').style.display = "none";
  
      let dialog = document.querySelector('.error-dialog');
      dialog.close();
      dialog.style.display = "none";
    }
  
    if (error === undefined) {
      return;
    }
  
    return (
      <dialog className='error-dialog modal'>
          <div className='modal-header'>
            <div className='dialog-title'>
                <i>⚠</i>
                {error}
            </div>
          </div>
          <div className='dialog-message'>{message}</div>
          <button onClick={handleClose} value="default" className='dialog-close'>OK</button>
      </dialog>
    );
  }