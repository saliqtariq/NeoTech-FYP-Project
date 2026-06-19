"use client"

import React, { useEffect, useState } from "react"
import { detectLocation } from "../lib/location"
import Loader from "../components/Loader"
import Enroll from "../pages/Enroll"
import EnrollPakistan from "../components/EnrollPakistan" // 👈 import your PK-only component

const EnrollGuard: React.FC = () => {
  const [location, setLocation] = useState<"pk" | "other" | "loading">("loading")

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const { isPakistan } = await detectLocation();
        if (isPakistan) {
          setLocation("pk")
        } else {
          setLocation("other")
        }
      } catch (error) {
        console.error("Location check failed:", error)
        setLocation("other") // fail open → show global Enroll
      }
    }

    checkLocation()
  }, [])

  if (location === "loading") return <Loader />

  return location === "pk" ? <EnrollPakistan /> : <Enroll />
}

export default EnrollGuard
