import { useState } from "react";

export const useSubmitCode = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const submitCode = async (code) => {
        setIsLoading(true)
        setError(null)

        //proxy to localhost:4000
        const response = await fetch('/api/codes/getacode', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({code})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            setIsLoading(false)
        }
    }

    return { submitCode, isLoading, error}
}