import { apiUsingNow, iRecoveryPasswordRequest } from '../../shared'

const passwordRecovery = async (
  data: iRecoveryPasswordRequest,
  userId: string,
  token: string,
): Promise<void> => {
  await apiUsingNow.post(`password/${userId}/${token}`, data)
}

export const apiAuth = {
  passwordRecovery,
}
