import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const uncommonCloth: UniqueItemTable = {
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
        ["1 - 2", "Hemp", 2, "Repair = 1/2 cost", "+2 Pos"],
        ["3 - 4", "Fustian", 2, "+2 vs Heat", "+2 Pos"],
        ["5 - 6", "Bokeram", 2.25, "+2 vs Heat", "+2 Pos"],
        ["7 - 8", "Pintado", 2.5, "+2 vs Heat", "+2 Pos"],
        ["9 - 10", "Mohair", 3, "+1 vs Cold & Rain", "+2 Pos"],
        ["11 - 12", "Damask", 3.5, "Lower the Size by a third for Carry", "+2 Pos"],
        ["13 - 14", "Tussah", 4, "Lower the Size by a third for Carry", "+2 Pos"],
        ["15 - 16", "Silk", 2.5, "Lower the Size by a third for Carry", "+2 Pos"],
        ["17 - 18", "Tartan", 3, "+1 vs Cold & Rain", "+2 Pos"],
        ["19", "Cashmere", 3, "+1 vs Cold & Rain", "+2 Pos"],
        ["20", "Merino", 3.5, "+1 vs Cold & Rain", "+2 Pos"]
    ]
}

export default uncommonCloth