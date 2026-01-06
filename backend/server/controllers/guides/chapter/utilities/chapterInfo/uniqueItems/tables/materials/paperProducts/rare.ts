import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const rarePaperProducts: UniqueItemTable = {
    headers: [
        [
            "Roll",
            "Material",
            "Price Multiplier",
            "Conf Bonus"
        ]
    ],
    rows: [
        ["1 - 2", "Uncommon Animal Parchment", "2.25", "+3 Pos"],
        ["3 - 4", "Monster Vellum", "2.5", "+3 Pos"],
        ["5 - 6", "Sentient Person Vellum", "3", "+3 Pos"],
        ["7 - 8", "Monster Parchment", "3.75", "+3 Pos"],
        ["9 - 10", "Sentient Person Parchment", "4.5", "+3 Pos"]
    ]
}

export default rarePaperProducts