import burdensNInjuriesInfo from "./chapterInfo/burdensNInjuries";
import equipmentInfo from "./chapterInfo/equipment/equipment";
import kitInfo from "./chapterInfo/kits";
import uniqueItems from "./chapterInfo/uniqueItems/uniqueItems";
import rudimentInfo from "./chapterInfo/weird";

export default {
    rules: [],
    players: [
        null,
        kitInfo,
        null,
        rudimentInfo,
        burdensNInjuriesInfo,
        null,
        null,
        equipmentInfo
    ],
    gms: [
        [],
        [],
        [],
        [
            null,
            uniqueItems,
        ],
        [],
    ]
}