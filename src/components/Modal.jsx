import React from 'react'

const Modal = () => {
  return (
    <>
      <button>
        <label htmlFor='my-modal' className='button button-white modal-button'>
          Contribute
        </label>
      </button>
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>Become a Contributor</h3>
          <p className='py-4'>
            Hey, you can assist in contributing to voxpopuli by filling the{' '}
            <span className='underline cursor-pointer decoration-primary text-primary'>
              google form
            </span>
          </p>
          <div className='modal-action'>
            <button>
              <label htmlFor='my-modal' className='button '>
                Close
              </label>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
