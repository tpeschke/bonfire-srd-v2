import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const illumination: UniqueItemTable = {
    headers: [
        [
            {
                label: "",
                colSpan: 3
            },
            {
                label: "Material",
                colSpan: 2
            },
            {
                label: "Details",
                colSpan: 3
            }
        ],
        [
            "Roll",
            "Type",
            "Base Price",
            "Base Material(s)",
            "Size",
            "Colors",
            "Engravings",
            "Gems"
        ]
    ],
    rows: [
        ["1", "Candelabra", 1, "Metal", "H", 2, 3, 1],
        ["2", "Candle", 0.05, "1-8 Tallow;\n9-10 Wax", "T", 4, 1, ""],
        ["3", "Candle, Timekeeping", 3, "1-7 Tallow;\n8-10 Wax", "S", 3, "", ""],
        ["4", "Candlestick", 0.5, "Metal", "D", 2, 2, 1],
        ["5", "Lamp", 3, "Metal", "S", 1, 2, 1],
        ["6", "Lantern, Beacon", 5, "Metal", "S", 1, 2, 1],
        ["7", "Lantern, Bullseye", 7, "Metal & Paper Product", "S", 1, 1, ""],
        ["8", "Lantern, Hooded", 9, "Metal", "S", 1, 1, ""],
        ["9", "Lantern, Storm", 2, "Metal", "S", 1, 2, ""],
        ["10", "Torch", 0.04, "1-5 Tallow;\n6-10 Cloth", "S", 1, "", ""]
    ]
}

export default illumination