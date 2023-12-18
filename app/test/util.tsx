/*not currently used*/ 
export async function startEyeTracker() {
    await fetch('http://127.0.0.1:8000/api/start', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : 'http://127.0.0.1:8000',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
        },
        body: JSON.stringify({ message: "start" })
    })
      .then(async (res) => {
        const response = await res.json()
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
  
  export async function endEyeTracker() {
    await fetch('http://127.0.0.1:8000/api/end', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : 'http://127.0.0.1:8000',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
        },
        body: JSON.stringify({ message: "end" })
    })
      .then(async (res) => {
        const response = await res.json()
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
  