import { z } from 'zod'
import { ReactNode } from 'react'
import { passwordRecoverySchema } from '../schemas'

export interface iChildren {
  children: ReactNode
}

export type iRecoveryPasswordRequest = z.infer<typeof passwordRecoverySchema>
