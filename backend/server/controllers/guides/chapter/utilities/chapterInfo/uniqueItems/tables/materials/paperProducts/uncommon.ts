import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const uncommonPaperProducts: UniqueItemTable = {
    headers: [
        [
            "Roll",
            "Material",
            "Price Multiplier",
            "Conf Bonus"
        ]
    ],
    rows: [
        ["1 - 2", "Common Animal Parchment", "1.125", "+2 Pos"],
        ["3 - 4", "Goat Parchment", "1.125", "+2 Pos"],
        ["5 - 6", "Sheep Parchment", "1.125", "+2 Pos"],
        ["7 - 8", "Papyrus", "1.25", "+2 Pos"],
        ["9 - 10", "Uncommon Animal Vellum", "1.5", "+2 Pos"]
    ]
}

export default uncommonPaperProducts