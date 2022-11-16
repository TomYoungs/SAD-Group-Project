import { useState } from "react";

export const useSubmitCode = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const submitCode = async (codeid) => {
        setIsLoading(true)
        setError(null)
        //proxy to localhost:4000
        const coderesponse = await fetch('/api/codes/getacode', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({codeid})
        })
        const json = await coderesponse.json()

        if (!coderesponse.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (coderesponse.ok) {
            setIsLoading(false)
        }
        //^nest the below into the above
        const userid = JSON.parse(localStorage.getItem('user')).id
        const moduleid = json.moduleName 
        const weekid = json.weekid
        console.log("HERE!!!!!")
        console.log(JSON.stringify({userid, moduleid, weekid}))

        const attendanceresponse = await fetch('/api/attendance/updateuserattendance', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userid, moduleid, weekid})
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