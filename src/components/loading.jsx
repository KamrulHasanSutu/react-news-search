import React from 'react'

export default function loading() {
  return (
    <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div className="spinner-border text-danger" style={{marginLeft:'auto'}} role="status" aria-hidden='true'></div>
    </div>
  )
}
