import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChapterContentsReturn } from '@srd/common/interfaces/chapterInterfaces/ChapterInterfaces'

interface State {
  rulesGuideChapters: ChapterContentsReturn[],
  playersGuideChapters: ChapterContentsReturn[],
  gmsGuideChapters: ChapterContentsReturn[][]
}

const initialState: State = {
  rulesGuideChapters: [],
  playersGuideChapters: [],
  gmsGuideChapters: []
}

export const chapterSlice = createSlice({
  name: 'chapter',
  initialState,
  reducers: {
    saveChapter: (state: State, action: PayloadAction<ChapterContentsReturn>) => {
      const { payload } = action
      if (payload.book === 'rules') {
        state.rulesGuideChapters[payload.chapter] = payload
      } else if (payload.book === 'players') {
        state.playersGuideChapters[payload.chapter] = payload
      } else if (payload.book === 'gms') {
        if ((payload.section || payload.section === 0) && !state.gmsGuideChapters[payload.section]) {
          state.gmsGuideChapters[payload.section] = []
        }

        if (payload.section || payload.section === 0) {
          state.gmsGuideChapters[payload.section][payload.chapter] = payload
        }
      }
    }
  },
})

export const { saveChapter } = chapterSlice.actions

export default chapterSlice.reducer