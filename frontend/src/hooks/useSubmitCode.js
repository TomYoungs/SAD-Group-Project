import { useState } from "react";

export const useSubmitCode = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const submitCode = async (code) => {
        setIsLoading(true)
        setError(null)

        //proxy to localhost:4000
        const coderesponse = await fetch('/api/codes/getacode', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({code})
        })
        const json = await coderesponse.json()

        if (!coderesponse.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (coderesponse.ok) {
            setIsLoading(false)
        }
        
        const userid = localStorage.getItem('user').id
        const moduleName = json.moduleName 
        const weekid = json.weekid

        const attendanceresponse = await fetch('/api/attendance/updateuserattendance', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userid, moduleName, weekid})
        })
        const resjson = await attendanceresponse.json()

        if (!resjson.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (resjson.ok) {
            setIsLoading(false)
        }

    }

    return { submitCode, isLoading, error }
}