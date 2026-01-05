import academicTools from "./tables/items/academicTools";
import adventuringGear from "./tables/items/adventuringGear";
import { UniqueItemsInfo } from '@srd/common/interfaces/chapterInterfaces/UniqueItemTables'
import uniqueItemCategories from "./tables/items/uniqueItemCategories";
import alchemicalSubstances from "./tables/items/alchemicalSubstances";
import tableToDetermineArmor from "./tables/items/armor/tableToDetermine";
import lightArmor from "./tables/items/armor/lightArmor";
import mediumArmor from "./tables/items/armor/mediumArmor";
import heavyArmor from "./tables/items/armor/heavyArmor";
import beverages from "./tables/items/beverages";
import body from "./tables/items/clothing/body";
import accessories from "./tables/items/clothing/accessories";
import footgear from "./tables/items/clothing/footgear";
import headgear from "./tables/items/clothing/headgear";
import tableToDetermineClothing from "./tables/items/clothing/tablesToDetermine";
import entertainment from "./tables/items/entertainment";
import fabricsNRopes from "./tables/items/fabricsNRopes";
import tableToDetermineFood from "./tables/items/food/tablesToDetermine";
import preppedFood from "./tables/items/food/preppedFood";
import bread from "./tables/items/food/bread";
import fruitsNVeggies from "./tables/items/food/fruitsNVeggies";
import protein from "./tables/items/food/protein";
import nuts from "./tables/items/food/nuts";
import spicesNSeasonings from "./tables/items/food/spicesNSeasonings";
import householdItems from "./tables/items/householdItems";
import illumination from "./tables/items/illumination";
import jewelry from "./tables/items/jewelry";
import medical from "./tables/items/medical";
import instruments from "./tables/items/instruments";
import personalContainers from "./tables/items/personalContainers";
import rawGoods from "./tables/items/rawGoods";
import religiousItems from "./tables/items/religiousItems";
import shieldsUniqueItems from "./tables/items/shields";
import tradeTools from "./tables/items/tradeTools";
import tableToDetermineWeapon from "./tables/items/weapons/tableToDetermine";
import axesUniqueItems from "./tables/items/weapons/axesUniqueItems";
import polearmsUniqueItems from "./tables/items/weapons/polearmsUniqueItems";
import sidearmsUniqueItems from "./tables/items/weapons/sidearmsUniqueItems";
import swordsUniqueItems from "./tables/items/weapons/swordsUniqueItems";
import traumaUniqueItems from "./tables/items/weapons/traumaUniqueItems";
import thrownUniqueItems from "./tables/items/weapons/thrownUniqueItems";
import mechanicalRangedUniqueItems from "./tables/items/weapons/mechanicalRangeUniqueItems";
import firearmsUniqueItems from "./tables/items/weapons/firearmsUniqueItems";
import worksOfArt from "./tables/items/worksOfArt";

const uniqueItems: UniqueItemsInfo = {
    type: 'uniqueItems',
    info: [
        [
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
            shieldsUniqueItems,
            tradeTools,
            tableToDetermineWeapon,
            axesUniqueItems,

            polearmsUniqueItems,
            sidearmsUniqueItems,
            swordsUniqueItems,
            traumaUniqueItems,
            thrownUniqueItems,

            mechanicalRangedUniqueItems,
            firearmsUniqueItems,
            worksOfArt
        ]
    ]
}

export default uniqueItems