import { UniqueItemsInfo } from '@srd/common/interfaces/chapterInterfaces/UniqueItemTables'
import items from './itemsArray'
import materials from './materialsArray'

const uniqueItems: UniqueItemsInfo = {
    type: 'uniqueItems',
    info: [
        items,
        materials
    ]
}

export default uniqueItems