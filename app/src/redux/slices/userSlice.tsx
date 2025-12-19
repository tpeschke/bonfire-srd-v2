import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
  isUserLoggedIn?: boolean,
  patreon: number,
  isOwner?: boolean,
  infoHasBeenFetched: boolean
}

const initialState: User = {
  patreon: 0,
  infoHasBeenFetched: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: any, action: PayloadAction<User>) => {
      const { isUserLoggedIn, patreon, isOwner } = action.payload
      state.isUserLoggedIn = isUserLoggedIn
      state.patreon = patreon ?? 0
      state.isOwner = isOwner
      state.infoHasBeenFetched = true
    }
  },
})

export const { setUser } = userSlice.actions
export const isUserLoggedOn = (state: any): boolean => state.user.isUserLoggedIn
export const getUserPatreon = (state: any): number => state.user.patreon
export const isOwner = (state: any): boolean => state.user.isOwner
export const infoHasBeenFetched = (state: any): boolean => state.user.infoHasBeenFetched

export default userSlice.reducer