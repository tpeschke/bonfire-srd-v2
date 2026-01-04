import academicTools from "./tables/academicTools";
import adventuringGear from "./tables/adventuringGear";
import { UniqueItemsInfo } from '@srd/common/interfaces/chapterInterfaces/UniqueItemTables'
import uniqueItemCategories from "./tables/uniqueItemCategories";
import alchemicalSubstances from "./tables/alchemicalSubstances";
import tableToDetermineArmor from "./tables/armor/tableToDetermine";
import lightArmor from "./tables/armor/lightArmor";
import mediumArmor from "./tables/armor/mediumArmor";
import heavyArmor from "./tables/armor/heavyArmor";

const uniqueItems: UniqueItemsInfo = {
    type: 'uniqueItems',
    info: [
        uniqueItemCategories,
        academicTools,
        adventuringGear,
        alchemicalSubstances,
        tableToDetermineArmor,
        lightArmor,
        mediumArmor,
        heavyArmor
    ]
}

export default uniqueItems