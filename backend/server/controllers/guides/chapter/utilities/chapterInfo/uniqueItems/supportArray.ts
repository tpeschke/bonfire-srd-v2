import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables";
import tableToDetermineAnimal from "./tables/supportInfo/animal/tableToDetermine";
import landAnimals from "./tables/supportInfo/animal/landAnimals";
import airAnimals from "./tables/supportInfo/animal/airAnimals";
import waterAnimals from "./tables/supportInfo/animal/waterAnimals";
import tableToDetermineBodyPart from "./tables/supportInfo/body/tableToDetermine";
import head from "./tables/supportInfo/body/head";
import arms from "./tables/supportInfo/body/arms";
import torso from "./tables/supportInfo/body/torso";
import legs from "./tables/supportInfo/body/legs";
import colors from "./tables/supportInfo/colors";
import engraving from "./tables/supportInfo/engravings";
import gemType from "./tables/supportInfo/gem/type";
import gemSize from "./tables/supportInfo/gem/size";
import gemShape from "./tables/supportInfo/gem/shape";
import timePeriod from "./tables/supportInfo/personal/timePeriod";
import relatedTo from "./tables/supportInfo/personal/relatedTo";
import freeAncestries from "./tables/supportInfo/ancestry/free";
import deluxeAncestries from "./tables/supportInfo/ancestry/deluxe";

const supportInfo: UniqueItemTable[] = [
    tableToDetermineAnimal,
    landAnimals,
    airAnimals,
    waterAnimals,

    tableToDetermineBodyPart,
    head,
    arms,
    torso,
    legs,

    colors,
    engraving,

    gemType,
    gemSize,
    gemShape,

    timePeriod,
    relatedTo,

    freeAncestries,
    deluxeAncestries
]

export default supportInfo