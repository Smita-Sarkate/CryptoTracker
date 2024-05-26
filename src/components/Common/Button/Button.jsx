import React from 'react'

function Button({text}) {
  return (
    <div style={{ background: 'var(--blue)' }} className='px-5 py-1.5 bg-cyan-700 rounded-full text-white shadow-lg hover:shadow-cyan-500/30 border-2 border-sky-500'>
      {text}
      <div>

      </div>
    </div>
  )
}

export default Button
