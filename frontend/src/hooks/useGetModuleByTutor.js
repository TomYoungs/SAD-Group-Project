import { useAuthContext } from './useAuthContext'

export const useGetModuleByTutor = () => {

  const { user } = useAuthContext()
  let query = '/api/module/getbytutor/' + user.id

  const response = fetch(query, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })

  return response



}
