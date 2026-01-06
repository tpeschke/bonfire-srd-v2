import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables";
import commonCloth from "./tables/materials/cloth/common";
import uncommonCloth from "./tables/materials/cloth/uncommon";
import rareCloth from "./tables/materials/cloth/rare";
import commonFurOrLeather from "./tables/materials/furNLeather/common";
import uncommonFurOrLeather from "./tables/materials/furNLeather/uncommon";
import rareFurOrLeather from "./tables/materials/furNLeather/rare";
import commonMetal from "./tables/materials/metal/common";
import uncommonMetal from "./tables/materials/metal/uncommon";
import rareMetal from "./tables/materials/metal/rare";
import commonPaperProducts from "./tables/materials/paperProducts/common";
import uncommonPaperProducts from "./tables/materials/paperProducts/uncommon";
import rarePaperProducts from "./tables/materials/paperProducts/rare";

const materials: UniqueItemTable[] = [
    commonCloth,
    uncommonCloth,
    rareCloth,

    commonFurOrLeather,
    uncommonFurOrLeather,
    rareFurOrLeather,

    commonMetal,
    uncommonMetal,
    rareMetal,

    commonPaperProducts,
    uncommonPaperProducts,
    rarePaperProducts
]

export default materials