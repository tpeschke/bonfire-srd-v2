export interface ChapterContent {
    type: 'markdown' | 'component'
}

export interface MarkdownContent extends ChapterContent {
    type: 'markdown',
    body: string
}

export type ValidComponents = 'characteristicGenerator' | 'kits' | 'originsShapesTraditions' | 'rudimentsByTradition' | 'burdensNInjuries' | 'relationshipChart' | AncestryImages | ClassImages | EquipmentTables | GMImages | uniqueItemTables

type AncestryImages = 'dwarfImage' | 'elfImage' | 'humanImage' | 'orcImage' | 'pechImage' | 'ratfolkImage' | 'gauntImage' | 'starCursedImage'

type ClassImages = 'expertImage' | 'fighterImage' | 'servantImage' | 'socialiteImage' | 'weirdAdeptImage'

type GMImages = 'structureImage' | createHexCrawlImages | popHexCrawlImages | villageMapImages | dungeonImages

type createHexCrawlImages = 'createHexExample1' | 'createHexExample2' | 'createHexExample3.1' | 'createHexExample3.2' | 'createHexExample4' | 'createHexExample5' | 'createHexExampleFinal'

type popHexCrawlImages = 'popHexExample1' | 'popHexExample2' | 'popHexExample3' | 'popHexExample4' | 'popHexExample5' | 'popHexExample6'

type villageMapImages = 'villageMap1' | 'villageMap2.1' | 'villageMap2.2' | 'villageMap3.1' | 'villageMap3.2' | 'villageMapFinal'

type dungeonImages = 'wizardTowerMapImage' | 'roomExampleMap' | dungeonMappingImages

type dungeonMappingImages ='lockAndKeyExplanation' | '1to1Variants' | '1toManyVariants' | '1WayVariants' | 'ManyTo1Variants' | 'OrSwitchVariants' | 'prereqVariants' | 'singleToManyVariants' | 'step2Example' | 'step4Example1' | 'step4Example2' | 'step4Example3' | 'step4Example4' | 'step4Example5' | 'step4Example6' | 'step4Example7' | 'step5Example1' | 'step5Example2' | 'step5Example3' | 'step5Example4' | 'step5Example5' | 'step5ExampleFinal'

type uniqueItemTables = uniqueItemBaseTables | uniqueItemArmorTables | uniqueItemClothingTables | uniqueItemFoodTables | uniqueItemWeaponTables | materials | supportTables

type uniqueItemBaseTables = 'uniqueItemCategories' | 'academicTools' | 'adventuringGear' | 'alchemicalSubstances' | 'beveragesUniqueItems' | 'entertainment' | 'fabricsNRopes' | 'householdItems' | 'illumination' | 'jewelry' | 'medical' | 'instruments' | 'personalContainers' | 'rawGoods' | 'religiousItems' | 'shieldsUniqueItems' | 'tradeTools' | 'worksOfArt'

type uniqueItemArmorTables = 'tableToDetermineArmor' | 'lightArmor' | 'mediumArmor' | 'heavyArmor'

type uniqueItemClothingTables = 'tableToDetermineClothing' | 'accessories' | 'body' | 'footgear' | 'headgear'

type uniqueItemFoodTables = 'tableToDetermineFood' | 'preppedFood' | 'bread' | 'fruitsNVeggies' | 'protein' | 'nuts' | 'spicesNSeasonings'

type uniqueItemWeaponTables = 'tableToDetermineWeapon' | 'axesUniqueItems' | 'polearmsUniqueItems' | 'sidearmsUniqueItems' | 'swordsUniqueItems' | 'traumaUniqueItems' | 'thrownUniqueItems' | 'mechanicalRangedUniqueItems' | 'firearmsUniqueItems'

type materials = clothMaterials | leatherNFurMaterials | metals | paperProducts | stone | wax | wood

type clothMaterials = 'commonCloth' | 'uncommonCloth' | 'rareCloth'

type leatherNFurMaterials = 'commonFurOrLeather' | 'uncommonFurOrLeather' | 'rareFurOrLeather'

type metals = 'commonMetal' | 'uncommonMetal' | 'rareMetal'

type paperProducts = 'commonPaperProducts' | 'uncommonPaperProducts' | 'rarePaperProducts'

type stone = 'commonStone' | 'uncommonStone' | 'rareStone'

type wax = 'commonWax' | 'uncommonWax' | 'rareWax'

type wood = 'commonWood' | 'uncommonWood' | 'rareWood'

type supportTables = animals | bodyParts | 'colors' | 'engraving'

type animals = 'tableToDetermineAnimal' | 'airAnimals' | 'landAnimals' | 'waterAnimals'

type bodyParts = 'tableToDetermineBodyPart' | 'arms' | 'head' | 'legs' | 'torso'

export type EquipmentTables = 'priceByDistance' | 'animalLivestock' | 'animalMounts' | 'animalBarding' | 'animalFeed' | 'armorPrices' | 'armorStats' | 'beverages' | 'clothing' | 'clothingAccessories' | 'containersHeavy' | 'containersPersonal' | 'musicalInstruments' | 'poisonsNToxins' | 'rope' | 'shields' | 'shieldStats' | 'toolsAdventuring' | 'toolsGeneral' | 'toolsTrade' | 'weaponsAxes' | 'weaponsPolearms' | 'weaponsSidearms' | 'weaponsSwords' | 'weaponsTrauma' | 'weaponsRanged' | 'ammunition' | 'meleeWeaponStats' | 'rangedWeaponStats'

export interface ComponentContent extends ChapterContent {
    type: 'component',
    component: ValidComponents
}

export type Books = 'rules' | 'players' | 'gms'

interface ChapterContentsBase {
    book: Books,
    section?: number,
    chapter: number,
    chapterName: string
}

export interface ChapterContentsReturn extends ChapterContentsBase {
    message?: string,
    chapterContents: ChapterContents
    navigation: ChapterNavigation[],
    info: ChapterInfo
}

export type ChapterContents = (MarkdownContent | ComponentContent)[]

export interface ChapterContentsCache extends ChapterContentsBase {
    chapterContents: ChapterContents | LockedChapterContents,
    navigation: ChapterNavigation[] | LockedNavigation,
    info: ChapterInfo | Function
}

export interface LockedChapterContents {
    free: ChapterContents,
    deluxe: ChapterContents
}

export interface LockedNavigation {
    free: ChapterNavigation[],
    deluxe: ChapterNavigation[]
}

export type ChapterInfo = null | ChapterInfoBaseObject

export interface ChapterInfoBaseObject {
    type: 'kits' | 'rudiments' | 'burdensNInjuries' | 'equipment' | 'uniqueItems',
    info: any[]
}

export interface ChapterNavigation {
    section: string,
    id: string,
    type: 'h1' | 'h2'
}