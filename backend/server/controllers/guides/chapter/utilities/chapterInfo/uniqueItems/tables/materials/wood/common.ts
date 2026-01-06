import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const commonWood: UniqueItemTable = {
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
        ["1 - 5", "Pine", "1", "", ""],
        ["6 - 10", "Aspen", "1", "Double your breakage threshold", ""],
        ["11 - 15", "Oak", "1.25", "Double your breakage threshold", "+1 Pos"],
        ["16 - 20", "Basswood", "1.25", "Lower the Size by a third for Carry", "+1 Pos"],
        ["21 - 25", "Hickory", "1.25", "Double your breakage threshold", "+1 Pos"],
        ["26 - 30", "Poplar", "1.25", "Lower the Size by a third for Carry", "+1 Pos"],
        ["31 - 35", "Ash", "1.25", "Double your breakage threshold", "+1 Pos"],
        ["36 - 40", "Cherry", "1.25", "Double your breakage threshold", "+1 Pos"],
        ["41 - 45", "Butternut", "1.25", "Lower the Size by a third for Carry", "+1 Pos"],
        ["46 - 50", "Beech", "1.25", "Double your breakage threshold", "+1 Pos"],
        ["51 - 55", "Ambrosia Maple", "1.25", "Lower the Size by a third for Carry", "+1 Pos"],
        ["56 - 60", "Yew", "1.5", "Lower the Size by a third for Carry", "+1 Pos"],
        ["61 - 65", "Sapele", "1.5", "Double your breakage threshold", "+1 Pos"],
        ["66 - 70", "Balsa", "1.5", "Lower the Size by a third for Carry", "+1 Pos"],
        ["71 - 75", "Mahogany", "1.5", "Double your breakage threshold", "+1 Pos"],
        ["76 - 80", "Bark Pocket Maple", "1.5", "Double your breakage threshold", "+1 Pos"],
        ["81 - 85", "Jatoba", "1.75", "Double your breakage threshold", "+1 Pos"],
        ["86 - 89", "Acacia", "1.75", "Double your breakage threshold", "+1 Pos"],
        ["90 - 93", "Cedar", "1.75", "Lower the Size by a third for Carry", "+1 Pos"],
        ["94 - 97", "Paduk", "2", "Double your breakage threshold", "+1 Pos"],
        ["98 - 100", "Walnut", "2", "Double your breakage threshold", "+1 Pos"]
    ]
}

export default commonWood