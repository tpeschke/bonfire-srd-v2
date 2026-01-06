import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const commonCloth: UniqueItemTable = {
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
        ["1", "Serge", 0.25, "+1 vs Cold & Rain", ""],
        ["2", "Burlap", 0.25, "Repair = 1/2 cost", ""],
        ["3", "Canvas", 0.5, "Repair = 1/2 cost", ""],
        ["4", "Linen", 1, "+2 vs Heat", ""],
        ["5", "Cotton", 1, "None", ""],
        ["6", "Wool", 1, "+1 vs Cold & Rain", ""],
        ["7", "Calico", 1.25, "+2 vs Heat", "+1 Pos"],
        ["8", "Satin", 1.25, "Lower the Size by a third for Carry", "+1 Pos"],
        ["9", "Taffeta", 1.25, "Lower the Size by a third for Carry", "+1 Pos"],
        ["10", "Cambric", 1.5, "Repair = 1/2 cost", "+1 Pos"],
        ["11", "Muslin", 1.75, "+2 vs Heat", "+1 Pos"],
        ["12", "Worsted", 1.75, "+1 vs Cold & Rain", "+1 Pos"]
    ]
}

export default commonCloth