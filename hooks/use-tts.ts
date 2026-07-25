"use client"

import { useState, useEffect, useCallback, useRef } from "react"

export function useTTS() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isSupported, setIsSupported] = useState(true)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  
  const synthRef = useRef<SpeechSynthesis | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis
      setIsSupported(true)
      
      const loadVoices = () => {
        setVoices(window.speechSynthesis.getVoices())
      }
      
      loadVoices()
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices
      }
    } else {
      setIsSupported(false)
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel()
      }
    }
  }, [])

  const play = useCallback((text: string) => {
    if (!synthRef.current || !text) return

    synthRef.current.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    
    // Try to find a good English voice
    const englishVoices = voices.filter(v => v.lang.startsWith("en-"))
    const preferredVoice = 
      englishVoices.find(v => v.name.includes("Google") || v.name.includes("Microsoft") || v.name.includes("Samantha")) || 
      englishVoices[0] || 
      voices[0]
      
    if (preferredVoice) {
      utterance.voice = preferredVoice
    }
    
    utterance.rate = 1.0
    utterance.pitch = 1.0

    utterance.onstart = () => {
      setIsPlaying(true)
      setIsPaused(false)
    }

    utterance.onend = () => {
      setIsPlaying(false)
      setIsPaused(false)
    }

    utterance.onpause = () => setIsPaused(true)
    utterance.onresume = () => setIsPaused(false)
    utterance.onerror = (e) => {
      console.error("TTS Error:", e)
      setIsPlaying(false)
      setIsPaused(false)
    }

    synthRef.current.speak(utterance)
  }, [voices])

  const pause = useCallback(() => {
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.pause()
    }
  }, [])

  const resume = useCallback(() => {
    if (synthRef.current && synthRef.current.paused) {
      synthRef.current.resume()
    }
  }, [])

  const stop = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel()
      setIsPlaying(false)
      setIsPaused(false)
    }
  }, [])

  return { play, pause, resume, stop, isPlaying, isPaused, isSupported }
}
