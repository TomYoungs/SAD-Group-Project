import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useGetAttendance = ({ module }) => {

  const { user } = useAuthContext()
  let query = '/api/attendance/getByModuleIdForCharts/' + module._id

  const response = fetch(query, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })

  return response



}
