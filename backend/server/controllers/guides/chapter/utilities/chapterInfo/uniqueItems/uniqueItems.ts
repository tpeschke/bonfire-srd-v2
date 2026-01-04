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
import accessories from "./tables/clothing/accessories";
import footgear from "./tables/clothing/footgear";
import headgear from "./tables/clothing/headgear";
import tableToDetermineClothing from "./tables/clothing/tablesToDetermine";
import entertainment from "./tables/entertainment";
import fabricsNRopes from "./tables/fabricsNRopes";
import tableToDetermineFood from "./tables/food/tablesToDetermine";
import preppedFood from "./tables/food/preppedFood";
import bread from "./tables/food/bread";
import fruitsNVeggies from "./tables/food/fruitsNVeggies";
import protein from "./tables/food/protein";
import nuts from "./tables/food/nuts";
import spicesNSeasonings from "./tables/food/spicesNSeasonings";
import householdItems from "./tables/householdItems";
import illumination from "./tables/illumination";
import jewelry from "./tables/jewelry";
import medical from "./tables/medical";
import instruments from "./tables/instruments";
import personalContainers from "./tables/personalContainers";
import rawGoods from "./tables/rawGoods";
import religiousItems from "./tables/religiousItems";
import shieldsUniqueItems from "./tables/shields";

const uniqueItems: UniqueItemsInfo = {
    type: 'uniqueItems',
    info: [
        uniqueItemCategories,
        academicTools,
        adventuringGear,
        alchemicalSubstances,
        tableToDetermineArmor,
        // I'm putting gaps at every 5 elements for readability
        lightArmor,
        mediumArmor,
        heavyArmor,
        beverages,
        tableToDetermineClothing,

        accessories,
        body,
        footgear,
        headgear,
        entertainment,

        fabricsNRopes,
        tableToDetermineFood,
        preppedFood,
        bread,
        fruitsNVeggies,

        protein,
        nuts,
        spicesNSeasonings,
        householdItems,
        illumination,

        jewelry,
        medical,
        instruments,
        personalContainers,
        rawGoods,

        religiousItems,
        shieldsUniqueItems
    ]
}

export default uniqueItems