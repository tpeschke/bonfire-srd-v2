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
import commonStone from "./tables/materials/stone/common";
import uncommonStone from "./tables/materials/stone/uncommon";
import rareStone from "./tables/materials/stone/rare";
import commonWax from "./tables/materials/wax/common";
import uncommonWax from "./tables/materials/wax/uncommon";
import rareWax from "./tables/materials/wax/rare";
import commonWood from "./tables/materials/wood/common";
import uncommonWood from "./tables/materials/wood/uncommon";
import rareWood from "./tables/materials/wood/rare";

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
    rarePaperProducts,

    commonStone,
    uncommonStone,
    rareStone,

    commonWax,
    uncommonWax,
    rareWax,

    commonWood,
    uncommonWood,
    rareWood
]

export default materials