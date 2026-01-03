import academicTools from "./tables/academicTools";
import adventuringGear from "./tables/adventuringGear";
import { UniqueItemsInfo } from '@srd/common/interfaces/chapterInterfaces/UniqueItemTables'
import uniqueItemCategories from "./tables/uniqueItemCategories";
import alchemicalSubstances from "./tables/alchemicalSubstances";

const uniqueItems: UniqueItemsInfo = {
    type: 'uniqueItems',
    info: [
        uniqueItemCategories,
        academicTools,
        adventuringGear,
        alchemicalSubstances
    ]
}

export default uniqueItems