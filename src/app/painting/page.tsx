'use client'
import Boxing from "@/components/Box";
import {CanvaPublish} from "@/components/Canva";
import { Button } from "@mui/material";
import { useEffect } from "react"


export default function painting() {
    return (
     <Boxing>
      <h1 className="text-white text-2xl sm:text-2xl md:text-2xl">Paint</h1>
      <CanvaPublish/>
     </Boxing>
    )
}