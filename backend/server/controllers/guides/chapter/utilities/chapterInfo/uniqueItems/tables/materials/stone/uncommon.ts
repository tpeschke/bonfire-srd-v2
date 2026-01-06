import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const uncommonStone: UniqueItemTable = {
    headers: [
        [
            "Roll",
            "Material",
            "Price Multiplier",
            "Bonus",
            "Conf Bonus"
        ]
    ],
    rows: [
        ["1 - 2", "Pottery", "1.25", "Ignore the first Wear gained", "+1 Pos"],
        ["3 - 4", "Tufa", "1.5", "Ignore the first Wear gained", "+1 Pos"],
        ["5 - 6", "Travertine", "1.5", "Ignore the first Wear gained", "+1 Pos"],
        ["7 - 8", "Wax", "1.75", "Ignore the first Wear gained", "+1 Pos"],
        ["9", "Slate", "2", "Ignore the first Wear gained", "+2 Pos"],
        ["10", "Granite", "2.5", "Ignore the first Wear gained", "+2 Pos"],
        ["11", "Flint", "2.5", "Ignore the first Wear gained", "+2 Pos"],
        ["12", "Alabaster", "3", "Ignore the first Wear gained", "+2 Pos"]
    ]
}

export default uncommonStone