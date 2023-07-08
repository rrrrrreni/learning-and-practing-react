import React from 'react'
import "../card/card.css"
export default function card(props) {
    // 传标签体 props.children
  return (
    <div className={`card ${props.className}`}>
      {props.children}
    </div>
  )
}
