"use client"

import { useEffect } from "react"
import { getFirebaseAnalytics } from "@/lib/firebase"

export function Analytics() {
  useEffect(() => {
    getFirebaseAnalytics()
  }, [])

  return null
}
