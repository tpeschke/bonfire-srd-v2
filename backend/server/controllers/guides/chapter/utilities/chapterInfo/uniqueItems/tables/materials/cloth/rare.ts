import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const rareCloth: UniqueItemTable = {
    headers: [
        [
            "Roll",
            "Cloth",
            "Price Multiplier",
            "Bonus",
            "Conf Bonus"
        ]
    ],
    rows: [
        ["1 - 2", "Brocade", 4, "Lower the Size by a third for Carry", "+3 Pos"],
        ["3 - 4", "Samite", 4.5, "Lower the Size by a third for Carry", "+3 Pos"],
        ["5 - 6", "Velvet", 5, "Lower the Size by a third for Carry", "+3 Pos"]
    ]
}

export default rareCloth