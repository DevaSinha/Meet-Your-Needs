import { useEffect } from "react"


function pendingRequest() {

    useEffect (()=>{
        fetch("http://localhost:8080/pendingRequest")
            .then(response => response.json())
            .then(data => { setReq(data) })
    })

    return (
        <div>

        </div>
    )
}