import { UniqueItemsInfo } from '@srd/common/interfaces/chapterInterfaces/UniqueItemTables'
import items from './itemsArray'
import materials from './materialsArray'
import supportInfo from './supportArray'

const uniqueItems: UniqueItemsInfo = {
    type: 'uniqueItems',
    info: [
        items,
        materials,
        supportInfo
    ]
}

export default uniqueItems