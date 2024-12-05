"use client"
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:5000/stream');

    eventSource.onopen = function() {
      console.log("opening connection");
    };
    
    eventSource.addEventListener("message", function(event) {
      console.log("New message from server:", JSON.parse(event.data));
    })
    
    
    eventSource.onerror = function(error) {
      console.log("New message from server:", error);
    };
    
  (async () => {
    const res = await fetch('http://localhost:5000/', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()
    console.log(data)
  })();

  return () => {
    eventSource.close()
    console.log("closed conn")
  }
  },[])
  return (
    <div>
      Hello
    </div>
  );
}
