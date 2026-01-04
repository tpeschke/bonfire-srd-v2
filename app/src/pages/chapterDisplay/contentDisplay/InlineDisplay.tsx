import './ContentDisplay.css'
import { ChapterInfoBaseObject, ComponentContent } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";
import CharacteristicGenerator from "./inlineComponents/characteristicGenerator/CharacteristicGenerator";
import Kits from './inlineComponents/kits/Kits';
import Image from '../../../components/image/Image';
import OriginsShapesTraditions from './inlineComponents/rudimentTables/OriginsShapesTraditions';
import RudimentsByTradition from './inlineComponents/rudimentTables/RudimentsByTradition';
import BurdensNInjuriesDisplay from './inlineComponents/burdensNInjuries/BurdensNInjuries';
import EquipmentTable from './inlineComponents/equipmentTables/EquipmentTable';
import ArmorStatsTable from './inlineComponents/equipmentTables/ArmorStatsTable';
import ShieldStatsTable from './inlineComponents/equipmentTables/ShieldStatsTable';
import MeleeWeaponStats from './inlineComponents/equipmentTables/MeleeWeaponStats';
import RangedWeaponStats from './inlineComponents/equipmentTables/RangedWeaponStats';
import Table from './inlineComponents/uniqueItemTables/Table';

interface Props {
    componentInfo: ComponentContent,
    chapterInfo?: ChapterInfoBaseObject | null
}

export default function InlineDisplay({ componentInfo, chapterInfo }: Props) {
    switch (componentInfo.component) {
        case 'characteristicGenerator':
            return <CharacteristicGenerator />
        case 'dwarfImage':
            return <Image src='https://i.imgur.com/wmRFD94.png' />
        case 'elfImage':
            return <Image src='https://i.imgur.com/j6rAlEw.png' />
        case 'humanImage':
            return <Image src='https://i.imgur.com/cKtlDOs.png' />
        case 'orcImage':
            return <Image src='https://i.imgur.com/SSFLhnr.png' />
        case 'pechImage':
            return <Image src='https://i.imgur.com/T8Kr1KQ.png' />
        case 'ratfolkImage':
            return <Image src='https://i.imgur.com/TRJphC6.png' />
        case 'gauntImage':
            return <Image src='https://i.imgur.com/f3F1CIC.png' />
        case 'starCursedImage':
            return <Image src='https://i.imgur.com/rok7r6M.png' />
        case 'expertImage':
            return <Image isClass={true} src='https://i.imgur.com/oe59eQA.png' />
        case 'fighterImage':
            return <Image isClass={true} src='https://i.imgur.com/sEyzgEB.png' />
        case 'servantImage':
            return <Image isClass={true} src='https://i.imgur.com/aGHwKaf.png' />
        case 'socialiteImage':
            return <Image isClass={true} src='https://i.imgur.com/YH1ELml.png' />
        case 'weirdAdeptImage':
            return <Image isClass={true} src='https://i.imgur.com/sa2dkYn.png' />
        case 'structureImage':
            return <Image src='https://i.imgur.com/3D7PuxZ.jpeg' goran={false} removeFloat={true} />
        case 'createHexExample1':
            return <Image src='https://i.imgur.com/8dlKoXh.png' goran={false} removeFloat={true} />
        case 'createHexExample2':
            return <Image src='https://i.imgur.com/rWMpZLb.png' goran={false} removeFloat={true} />
        case 'createHexExample3.1':
            return <Image src='https://i.imgur.com/hWjJIHm.png' goran={false} removeFloat={true} />
        case 'createHexExample3.2':
            return <Image src='https://i.imgur.com/nt7awKY.png' goran={false} removeFloat={true} />
        case 'createHexExample4':
            return <Image src='https://i.imgur.com/3dUnypq.png' goran={false} removeFloat={true} />
        case 'createHexExample5':
            return <Image src='https://i.imgur.com/h1B7Cex.png' goran={false} removeFloat={true} />
        case 'createHexExampleFinal':
            return <Image src='https://i.imgur.com/gtxoVYJ.png' goran={false} removeFloat={true} />
        case 'popHexExample1':
            return <Image src='https://i.imgur.com/uszC0QF.png' goran={false} removeFloat={true} />
        case 'popHexExample2':
            return <Image src='https://i.imgur.com/8KSMcLB.png' goran={false} removeFloat={true} />
        case 'popHexExample3':
            return <Image src='https://i.imgur.com/75zIToZ.png' goran={false} removeFloat={true} />
        case 'popHexExample4':
            return <Image src='https://i.imgur.com/Nxt5fBt.png' goran={false} removeFloat={true} />
        case 'popHexExample5':
            return <Image src='https://i.imgur.com/qtZCgos.png' goran={false} removeFloat={true} />
        case 'popHexExample6':
            return <Image src='https://i.imgur.com/EoKGuUu.png' goran={false} removeFloat={true} />
        case 'villageMap1':
            return <Image src='https://i.imgur.com/D8OlzHO.png' goran={false} removeFloat={true} />
        case 'villageMap2.1':
            return <Image src='https://i.imgur.com/Kq2KesU.png' goran={false} removeFloat={true} />
        case 'villageMap2.2':
            return <Image src='https://i.imgur.com/8cgD9WV.png' goran={false} removeFloat={true} />
        case 'villageMap3.1':
            return <Image src='https://i.imgur.com/4clnE36.png' goran={false} removeFloat={true} />
        case 'villageMap3.2':
            return <Image src='https://i.imgur.com/h3jpImy.png' goran={false} removeFloat={true} />
        case 'villageMapFinal':
            return <Image src='https://i.imgur.com/6Q3BbOg.png' goran={false} removeFloat={true} />
        case 'wizardTowerMapImage':
            return <Image src='https://i.imgur.com/6KGriCk.png' goran={false} removeFloat={true} />
        case 'roomExampleMap':
            return <Image src='https://i.imgur.com/26bJueI.png' goran={false} />
        case 'lockAndKeyExplanation':
            return <Image src='https://i.imgur.com/aKlRR1S.png' goran={false} unsetWidth={true} />
        case '1to1Variants':
            return <Image src='https://i.imgur.com/lEog7JZ.png' goran={false} removeFloat={true} />
        case '1toManyVariants':
            return <Image src='https://i.imgur.com/nn3yKsn.png' goran={false} removeFloat={true} />
        case '1WayVariants':
            return <Image src='https://i.imgur.com/CVXqh3S.png' goran={false} removeFloat={true} />
        case 'ManyTo1Variants':
            return <Image src='https://i.imgur.com/f92zxSo.png' goran={false} removeFloat={true} />
        case 'OrSwitchVariants':
            return <Image src='https://i.imgur.com/PnXpuBF.png' goran={false} removeFloat={true} />
        case 'prereqVariants':
            return <Image src='https://i.imgur.com/IiVk9Vt.png' goran={false} removeFloat={true} />
        case 'singleToManyVariants':
            return <Image src='https://i.imgur.com/xnjPe4H.png' goran={false} removeFloat={true} />
        case 'step2Example':
            return <Image src='https://i.imgur.com/YpAaJm5.png' goran={false} unsetWidth={true} />
        case 'step4Example1':
            return <Image src='https://i.imgur.com/rxp0Mgi.png' goran={false} unsetWidth={true} />
        case 'step4Example2':
            return <Image src='https://i.imgur.com/hY6YMnd.png' goran={false} removeFloat={true} />
        case 'step4Example3':
            return <Image src='https://i.imgur.com/51jFIdr.png' goran={false} removeFloat={true} />
        case 'step4Example4':
            return <Image src='https://i.imgur.com/0kTYVDp.png' goran={false} removeFloat={true} />
        case 'step4Example5':
            return <Image src='https://i.imgur.com/7rAafMP.png' goran={false} removeFloat={true} />
        case 'step4Example6':
            return <Image src='https://i.imgur.com/hLsPWyT.png' goran={false} unsetWidth={true} />
        case 'step4Example7':
            return <Image src='https://i.imgur.com/xdvY91d.png' goran={false} removeFloat={true} />
        case 'step5Example1':
            return <Image src='https://i.imgur.com/eHbnw2Q.png' goran={false} removeFloat={true} />
        case 'step5Example2':
            return <Image src='https://i.imgur.com/3axMkid.png' goran={false} removeFloat={true} />
        case 'step5Example3':
            return <Image src='https://i.imgur.com/XtS0lSg.png' goran={false} removeFloat={true} />
        case 'step5Example4':
            return <Image src='https://i.imgur.com/HSJHoyP.png' goran={false} removeFloat={true} />
        case 'step5Example5':
            return <Image src='https://i.imgur.com/nofVwuc.png' goran={false} removeFloat={true} />
        case 'step5ExampleFinal':
            return <Image src='https://i.imgur.com/88CSkjN.png' goran={false} removeFloat={true} />
        case 'relationshipChart':
            return <Image src='https://i.imgur.com/s2NN4w3.jpeg' goran={false} />
        case 'kits':
            return <Kits info={chapterInfo ? chapterInfo.info : []} />
        case 'originsShapesTraditions':
            return <OriginsShapesTraditions info={chapterInfo ? chapterInfo.info : []} />
        case 'rudimentsByTradition':
            return <RudimentsByTradition info={chapterInfo ? chapterInfo.info : []} />
        case 'burdensNInjuries':
            return <BurdensNInjuriesDisplay info={chapterInfo ? chapterInfo.info : []} />
        case 'priceByDistance':
            return <EquipmentTable table='priceByDistance' info={chapterInfo ? chapterInfo.info : []} />
        case 'animalLivestock':
            return <EquipmentTable table='animalLivestock' info={chapterInfo ? chapterInfo.info : []} />
        case 'animalMounts':
            return <EquipmentTable table='animalMounts' info={chapterInfo ? chapterInfo.info : []} />
        case 'animalBarding':
            return <EquipmentTable table='animalBarding' info={chapterInfo ? chapterInfo.info : []} />
        case 'animalFeed':
            return <EquipmentTable table='animalFeed' info={chapterInfo ? chapterInfo.info : []} />
        case 'armorPrices':
            return <EquipmentTable table='armorPrices' info={chapterInfo ? chapterInfo.info : []} />
        case 'armorStats':
            return <ArmorStatsTable armorStats={chapterInfo ? chapterInfo.info[0].armorStats : []} />
        case 'beverages':
            return <EquipmentTable table='beverages' info={chapterInfo ? chapterInfo.info : []} />
        case 'clothing':
            return <EquipmentTable table='clothing' info={chapterInfo ? chapterInfo.info : []} />
        case 'clothingAccessories':
            return <EquipmentTable table='clothingAccessories' info={chapterInfo ? chapterInfo.info : []} />
        case 'containersHeavy':
            return <EquipmentTable table='containersHeavy' info={chapterInfo ? chapterInfo.info : []} />
        case 'containersPersonal':
            return <EquipmentTable table='containersPersonal' info={chapterInfo ? chapterInfo.info : []} />
        case 'musicalInstruments':
            return <EquipmentTable table='musicalInstruments' info={chapterInfo ? chapterInfo.info : []} />
        case 'poisonsNToxins':
            return <EquipmentTable table='poisonsNToxins' info={chapterInfo ? chapterInfo.info : []} />
        case 'rope':
            return <EquipmentTable table='rope' info={chapterInfo ? chapterInfo.info : []} />
        case 'shields':
            return <EquipmentTable table='shields' info={chapterInfo ? chapterInfo.info : []} />
        case 'shieldStats':
            return <ShieldStatsTable shieldStats={chapterInfo ? chapterInfo.info[0].shieldStats : []} />
        case 'toolsAdventuring':
            return <EquipmentTable table='toolsAdventuring' info={chapterInfo ? chapterInfo.info : []} />
        case 'toolsGeneral':
            return <EquipmentTable table='toolsGeneral' info={chapterInfo ? chapterInfo.info : []} />
        case 'toolsTrade':
            return <EquipmentTable table='toolsTrade' info={chapterInfo ? chapterInfo.info : []} />
        case 'weaponsAxes':
            return <EquipmentTable table='weaponsAxes' info={chapterInfo ? chapterInfo.info : []} />
        case 'weaponsPolearms':
            return <EquipmentTable table='weaponsPolearms' info={chapterInfo ? chapterInfo.info : []} />
        case 'weaponsSidearms':
            return <EquipmentTable table='weaponsSidearms' info={chapterInfo ? chapterInfo.info : []} />
        case 'weaponsSwords':
            return <EquipmentTable table='weaponsSwords' info={chapterInfo ? chapterInfo.info : []} />
        case 'weaponsTrauma':
            return <EquipmentTable table='weaponsTrauma' info={chapterInfo ? chapterInfo.info : []} />
        case 'weaponsRanged':
            return <EquipmentTable table='weaponsRanged' info={chapterInfo ? chapterInfo.info : []} />
        case 'ammunition':
            return <EquipmentTable table='ammunition' info={chapterInfo ? chapterInfo.info : []} />
        case 'meleeWeaponStats':
            return <MeleeWeaponStats meleeWeaponStats={chapterInfo ? chapterInfo.info[0].meleeWeaponStats : []} />
        case 'rangedWeaponStats':
            return <RangedWeaponStats rangedWeaponStats={chapterInfo ? chapterInfo.info[0].rangedWeaponStats : []} />
        case 'uniqueItemCategories':
            return <Table table={chapterInfo ? chapterInfo.info[0] : []} />
        case 'academicTools':
            return <Table table={chapterInfo ? chapterInfo.info[1] : []} />
        case 'adventuringGear':
            return <Table table={chapterInfo ? chapterInfo.info[2] : []} />
        case 'alchemicalSubstances':
            return <Table table={chapterInfo ? chapterInfo.info[3] : []} />
        case 'tableToDetermineArmor':
            return <Table table={chapterInfo ? chapterInfo.info[4] : []} />
        case 'lightArmor':
            return <Table table={chapterInfo ? chapterInfo.info[5] : []} />
        case 'mediumArmor':
            return <Table table={chapterInfo ? chapterInfo.info[6] : []} />
        case 'heavyArmor':
            return <Table table={chapterInfo ? chapterInfo.info[7] : []} />
        case 'beveragesUniqueItems':
            return <Table table={chapterInfo ? chapterInfo.info[8] : []} />
        case 'tableToDetermineClothing':
            return <Table table={chapterInfo ? chapterInfo.info[9] : []} />
        case 'accessories':
            return <Table table={chapterInfo ? chapterInfo.info[10] : []} />
        case 'body':
            return <Table table={chapterInfo ? chapterInfo.info[11] : []} />
        case 'footgear':
            return <Table table={chapterInfo ? chapterInfo.info[12] : []} />
        case 'headgear':
            return <Table table={chapterInfo ? chapterInfo.info[13] : []} />
        case 'entertainment':
            return <Table table={chapterInfo ? chapterInfo.info[14] : []} />
        case 'fabricsNRopes':
            return <Table table={chapterInfo ? chapterInfo.info[15] : []} />
        case 'tableToDetermineFood':
            return <Table table={chapterInfo ? chapterInfo.info[16] : []} />
        case 'preppedFood':
            return <Table table={chapterInfo ? chapterInfo.info[17] : []} />
        case 'bread':
            return <Table table={chapterInfo ? chapterInfo.info[18] : []} />
        case 'fruitsNVeggies':
            return <Table table={chapterInfo ? chapterInfo.info[19] : []} />
        case 'protein':
            return <Table table={chapterInfo ? chapterInfo.info[20] : []} />
        case 'nuts':
            return <Table table={chapterInfo ? chapterInfo.info[21] : []} />
        case 'spicesNSeasonings':
            return <Table table={chapterInfo ? chapterInfo.info[22] : []} />
        case 'householdItems':
            return <Table table={chapterInfo ? chapterInfo.info[23] : []} />
        case 'illumination':
            return <Table table={chapterInfo ? chapterInfo.info[24] : []} />
        case 'jewelry':
            return <Table table={chapterInfo ? chapterInfo.info[25] : []} />
        case 'medical':
            return <Table table={chapterInfo ? chapterInfo.info[26] : []} />
        case 'instruments':
            return <Table table={chapterInfo ? chapterInfo.info[27] : []} />
        case 'personalContainers':
            return <Table table={chapterInfo ? chapterInfo.info[28] : []} />
        case 'rawGoods':
            return <Table table={chapterInfo ? chapterInfo.info[29] : []} />
        case 'religiousItems':
            return <Table table={chapterInfo ? chapterInfo.info[30] : []} />
        case 'shieldsUniqueItems':
            return <Table table={chapterInfo ? chapterInfo.info[21] : []} />
        default:
            return <div className="component-shell"><p>Something Went Wrong With The {componentInfo.component} Component</p></div>
    }
}