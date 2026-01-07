import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const rareStone: UniqueItemTable = {
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
        ["1 - 2", "Sandstone", "3", "Ignore the first Wear gained", "+3 Pos"],
        ["3 - 4", "Quartz", "4", "Ignore the first Wear gained", "+3 Pos"],
        ["5 - 6", "Marble", "4", "Ignore the first Wear gained", "+3 Pos"],
        ["7 - 8", "Crystal", "4", "Ignore the first Wear gained", "+3 Pos"],
        ["9 - 10", "Glass", "5", "", "+5 Pos"]
    ]
}

export default rareStone