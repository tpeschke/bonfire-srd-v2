import academicTools from "./tables/academicTools";
import adventuringGear from "./tables/adventuringGear";
import { UniqueItemsInfo } from '@srd/common/interfaces/chapterInterfaces/UniqueItemTables'
import uniqueItemCategories from "./tables/uniqueItemCategories";

const uniqueItems: UniqueItemsInfo = {
    type: 'uniqueItems',
    info: [
        uniqueItemCategories,
        academicTools,
        adventuringGear
    ]
}

export default uniqueItems