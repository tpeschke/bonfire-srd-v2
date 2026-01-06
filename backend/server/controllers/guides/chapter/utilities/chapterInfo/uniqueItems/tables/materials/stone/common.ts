import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const commonStone: UniqueItemTable = {
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
        ["1 - 2", "Clay", "0.25", "", ""],
        ["3 - 4", "Armorstone", "0.25", "", ""],
        ["5 - 6", "Basalt", "0.25", "", ""],
        ["7 - 8", "Limestone", "0.5", "", ""],
        ["9 - 10", "Earthenware", "1", "", ""]
    ]
}

export default commonStone