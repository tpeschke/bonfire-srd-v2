import academicTools from "./tables/academicTools";
import adventuringGear from "./tables/adventuringGear";
import { UniqueItemsInfo } from '@srd/common/interfaces/chapterInterfaces/UniqueItemTables'
import uniqueItemCategories from "./tables/uniqueItemCategories";
import alchemicalSubstances from "./tables/alchemicalSubstances";
import tableToDetermineArmor from "./tables/armor/tableToDetermine";
import lightArmor from "./tables/armor/lightArmor";
import mediumArmor from "./tables/armor/mediumArmor";
import heavyArmor from "./tables/armor/heavyArmor";
import beverages from "./tables/beverages";
import body from "./tables/clothing/body";
import accessories from "./tables/clothing/Accessories";
import footgear from "./tables/clothing/footgear";
import headgear from "./tables/clothing/headgear";
import tableToDetermineClothing from "./tables/clothing/tablesToDetermine";

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
        heavyArmor,
        beverages,
        tableToDetermineClothing,
        
        accessories,
        body,
        footgear,
        headgear
    ]
}

export default uniqueItems