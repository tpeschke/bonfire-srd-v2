import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const rawGoods: UniqueItemTable = {
    headers: [
        [
            "d6",
            "Type",
            "Base Price",
            "Size",
        ]
    ],
    rows: [
        ["1", "Clothe", 5, "M"],
        ["2", "Leather & Fur", 30, "M"],
        ["3", "Metal", 20, "M"],
        ["4", "Stone/Earthworks", 5, "M"],
        ["5", "Wood", 5, "M"],
        ["6", "Gems", "*", "S"],
    ]
}

export default rawGoods