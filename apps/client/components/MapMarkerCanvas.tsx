import React, { VFC, useRef, useEffect } from 'react'

interface MapMarkerCanvasProps {
  x: number
  y: number
  isSelected: boolean
}

const MapMarkerCanvas: VFC<MapMarkerCanvasProps> = ({ x, y, isSelected, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    const context = canvas?.getContext('2d')

    context.clearRect(0, 0, canvas.width, canvas.height)
    canvas.width = canvas.parentElement?.clientWidth
    canvas.height = canvas.parentElement?.clientHeight
    context.fillStyle = '#ffd02c'
    context.strokeStyle = '#ffd02c'
    context.lineWidth = 2

    context.beginPath()
    context.arc(x * (canvas.width / 100), y * (canvas.height / 100), isSelected ? 10 : 6, 0, Math.PI * 2)
    isSelected ? context.fill() : context.stroke()
    context.closePath()
  }, [x, y, isSelected])

  return <canvas ref={canvasRef} {...props} />
}

export default MapMarkerCanvas
