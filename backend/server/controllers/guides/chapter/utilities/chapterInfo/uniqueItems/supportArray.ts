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
    engraving
]

export default supportInfo