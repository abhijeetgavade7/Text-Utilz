import React from 'react'

export default function Alert(props) {
  function capitalize(word) {
const lower=word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
  return (
    props.alert && <div
    className={`alert alert-${props.alert.type} alert-dismissible fade show`}
    role="alert">
    <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
    <button 
      type="button"
      className="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
  
  )
}
