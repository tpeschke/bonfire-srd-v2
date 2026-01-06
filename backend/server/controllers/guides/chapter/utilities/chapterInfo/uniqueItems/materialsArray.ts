import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables";
import commonCloth from "./tables/materials/cloth/common";
import uncommonCloth from "./tables/materials/cloth/uncommon";
import rareCloth from "./tables/materials/cloth/rare";
import commonFurOrLeather from "./tables/materials/furNLeather/common";
import uncommonFurOrLeather from "./tables/materials/furNLeather/uncommon";
import rareFurOrLeather from "./tables/materials/furNLeather/rare";

const materials: UniqueItemTable[] = [
    commonCloth,
    uncommonCloth,
    rareCloth,

    commonFurOrLeather,
    uncommonFurOrLeather,
    rareFurOrLeather
]

export default materials