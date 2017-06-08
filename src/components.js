import React, { Component } from 'react'

export const Form = ({ store }) => {
  const { text } = store.getState()
  return (
    <div>
      <input 
        value={text} 
        onChange={e => store.dispatch({
          type: 'CHANGE_TEXT',
          text: e.target.value
        })}
      />
    </div>
  )
}

const canvasWidth = 300
const canvasHeight = 50

export class Canvas extends Component {
  componentDidMount() {
    this.ctx = this.refs.canvas.getContext('2d')
    this.ctx.textAlign = 'center'
    this.ctx.font = '24px sans-serif'
  }
  shouldComponentUpdate() {
    const { text } = this.props.store.getState()

    this.ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    this.ctx.fillText(text, canvasWidth / 2, canvasHeight / 2)

    return false
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={canvasWidth} height={canvasHeight} />
      </div>
    )
  }
}