import React, { VFC, useRef, useEffect } from 'react'

const MapMarkerCanvas: VFC = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    const context = canvas?.getContext('2d')

    context.clearRect(0, 0, canvas.width, canvas.height)
    canvas.width = canvas.parentElement?.clientWidth
    canvas.height = canvas.parentElement?.clientHeight
    context.fillStyle = '#ffd02c'

    context.beginPath()
    context.arc(45 * (canvas.width / 100), 48 * (canvas.height / 100), 10, 0, Math.PI * 2)
    context.fill()
    context.closePath()

    context.beginPath()
    context.arc(35 * (canvas.width / 100), 32 * (canvas.height / 100), 10, 0, Math.PI * 2)
    context.fill()
    context.closePath()

    context.beginPath()
    context.arc(55 * (canvas.width / 100), 64 * (canvas.height / 100), 10, 0, Math.PI * 2)
    context.fill()
    context.closePath()
  }, [])

  return <canvas ref={canvasRef} {...props} />
}

export default MapMarkerCanvas
