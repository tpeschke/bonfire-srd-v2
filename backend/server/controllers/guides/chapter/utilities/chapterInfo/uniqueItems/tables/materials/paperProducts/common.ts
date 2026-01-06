import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const commonPaperProducts: UniqueItemTable = {
    headers: [
        [
            "Roll",
            "Material",
            "Price Multiplier",
            "Conf Bonus"
        ]
    ],
    rows: [
        ["1 - 2", "Cow Vellum", "0.5", ""],
        ["3 - 4", "Common Animal Vellum", "0.75", ""],
        ["5 - 6", "Sheep Vellum", "0.75", ""],
        ["7 - 8", "Goat Vellum", "0.75", ""],
        ["9 - 10", "Cow Parchment", "0.75", ""],
        ["11 - 12", "Paper", "1", "+1 Pos"]
    ]
}

export default commonPaperProducts