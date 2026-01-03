import academicTools from "./tables/academicTools";
import adventuringGear from "./tables/adventuringGear";
import { UniqueItemsInfo } from '@srd/common/interfaces/chapterInterfaces/UniqueItemTables'

const uniqueItems: UniqueItemsInfo = {
    type: 'uniqueItems',
    info: [
        academicTools,
        adventuringGear
    ]
}

export default uniqueItems