"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react"

export default function DraggableMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.25)
  const [position, setPosition] = useState({ x: 30, y: 30 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [expandDirection, setExpandDirection] = useState("right")

  const audioRef = useRef(null)
  const playerRef = useRef(null)

  const checkExpandDirection = () => {
    if (!playerRef.current) return
    const rect = playerRef.current.getBoundingClientRect()
    const expandedWidth = 240
    const spaceOnRight = window.innerWidth - rect.right
    const spaceOnLeft = rect.left

    if (spaceOnRight < expandedWidth && spaceOnLeft >= expandedWidth) {
      setExpandDirection("left")
    } else {
      setExpandDirection("right")
    }
  }

  useEffect(() => {
    const tryAutoPlay = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = volume
          await audioRef.current.play()
          setIsPlaying(true)
        } catch (error) {
          console.log("Autoplay prevented by browser policy - user interaction required")
        }
      }
    }
    const timer = setTimeout(tryAutoPlay, 1500)
    return () => clearTimeout(timer)
  }, [])

  // === DRAG EVENTS ===
  const handleMouseDown = (e) => {
    if (e.target.closest(".control-element")) return
    if (!playerRef.current) return
    const rect = playerRef.current.getBoundingClientRect()
    setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    setIsDragging(true)
    setIsHovered(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const newX = e.clientX - dragOffset.x
    const newY = e.clientY - dragOffset.y
    const maxX = window.innerWidth - 60
    const maxY = window.innerHeight - 60

    setPosition({
      x: Math.max(10, Math.min(newX, maxX)),
      y: Math.max(10, Math.min(newY, maxY)),
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e) => {
    if (e.target.closest(".control-element")) return
    const touch = e.touches[0]
    if (!playerRef.current) return
    const rect = playerRef.current.getBoundingClientRect()
    setDragOffset({ x: touch.clientX - rect.left, y: touch.clientY - rect.top })
    setIsDragging(true)
    setIsHovered(false)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const touch = e.touches[0]
    const newX = touch.clientX - dragOffset.x
    const newY = touch.clientY - dragOffset.y
    const maxX = window.innerWidth - 60
    const maxY = window.innerHeight - 60

    setPosition({
      x: Math.max(10, Math.min(newX, maxX)),
      y: Math.max(10, Math.min(newY, maxY)),
    })
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove)
      document.addEventListener("touchend", handleTouchEnd)
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging, dragOffset])

  const handleMouseEnter = () => {
    if (!isDragging) {
      checkExpandDirection()
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isDragging) {
      setIsHovered(false)
    }
  }

  // === AUDIO CONTROLS ===
  const togglePlay = (e) => {
    e.stopPropagation()
    if (!audioRef.current) return
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e) => {
    e.stopPropagation()
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const handleVolumeMouseDown = (e) => e.stopPropagation()

  const showExpanded = isHovered && !isDragging

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        crossOrigin="anonymous"
      >
        <source src="/audio/blue-instrumental.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div
        ref={playerRef}
        className={`fixed z-50 transition-all duration-500 ease-out select-none ${
          isDragging ? "cursor-grabbing scale-105" : "cursor-grab"
        } ${showExpanded ? "w-60" : "w-14"}`}
        style={{
          left: showExpanded && expandDirection === "left" ? `${position.x - 240 + 56}px` : `${position.x}px`,
          top: `${position.y}px`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className={`bg-white/90 backdrop-blur-xl shadow-2xl border border-white/30 transition-all duration-500 ease-out h-14 flex items-center ${
            showExpanded ? "rounded-full px-4" : "rounded-full w-14"
          } ${expandDirection === "left" && showExpanded ? "flex-row-reverse" : ""}`}
        >
          {!showExpanded && (
            <div className="flex items-center justify-center relative w-14 h-14">
              {isPlaying && (
                <>
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-400 border-r-indigo-400 animate-spin-slow opacity-70" />
                  <div className="absolute inset-1 rounded-full border border-blue-300/50 animate-pulse-slow opacity-40" />
                </>
              )}
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 flex items-center justify-center transition-all duration-700 ${
                isPlaying ? "animate-pulse-slow" : ""
              }`}>
                <Music className="w-4 h-4 text-white" />
              </div>
              {isPlaying && <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse-gentle shadow-lg shadow-blue-400/50" />}
            </div>
          )}

          {showExpanded && (
            <div className={`flex items-center justify-between space-x-3 w-full ${expandDirection === "left" ? "flex-row-reverse space-x-reverse" : ""}`}>
              <button onClick={togglePlay} className={`control-element w-8 h-8 p-0 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 border-0 shadow-lg transition-all duration-300 flex-shrink-0 flex items-center justify-center ${
                isPlaying ? "animate-pulse-slow shadow-blue-500/30" : ""
              }`}>
                {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
              </button>

              <div className={`flex items-center space-x-2 flex-1 control-element ${expandDirection === "left" ? "flex-row-reverse space-x-reverse" : ""}`}>
                <button onClick={toggleMute} className="control-element w-6 h-6 p-0 rounded-full hover:bg-blue-50 transition-all duration-300 flex items-center justify-center">
                  {isMuted ? <VolumeX className="w-3 h-3 text-gray-400" /> : <Volume2 className="w-3 h-3 text-blue-600" />}
                </button>
                <div className="flex-1 relative control-element">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    onMouseDown={handleVolumeMouseDown}
                    className="w-full h-1 bg-blue-100 rounded-full appearance-none cursor-pointer slider control-element"
                  />
                </div>
              </div>

              <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                isPlaying ? "bg-blue-400 animate-pulse-gentle shadow-sm shadow-blue-400/50" : "bg-gray-300"
              }`} />
            </div>
          )}
        </div>

        {isPlaying && (
          <>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/15 via-indigo-400/10 to-blue-500/15 blur-2xl -z-10 animate-pulse-ambient" />
            <div className="absolute inset-2 rounded-full bg-blue-400/5 blur-lg -z-10 animate-pulse-gentle" />
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.02); }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes pulse-ambient {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3.5s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 4s ease-in-out infinite; }
        .animate-pulse-ambient { animation: pulse-ambient 6s ease-in-out infinite; }

        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(to right, #3b82f6, #4f46e5);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(to right, #3b82f6, #4f46e5);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .slider::-webkit-slider-track, .slider::-moz-range-track {
          background: linear-gradient(to right, #3b82f6, #4f46e5);
          height: 4px;
          border-radius: 2px;
        }
        .control-element { cursor: pointer !important; }
      `}</style>
    </>
  )
}
