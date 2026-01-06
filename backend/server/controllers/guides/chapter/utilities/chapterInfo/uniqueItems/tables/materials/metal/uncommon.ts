import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const uncommonMetal: UniqueItemTable = {
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
        ["1 - 2", "Steel", "1.5", "+2 damage / +1 DR", "+1"],
        ["3 - 4", "Copper", "1.5", "Repair costs are halved", "+1"],
        ["5 - 6", "Brass", "2", "Spell Effects are +/-1 Order based on the wielder's desire", "+2"],
        ["7 - 8", "Bronze", "2.25", "Can do twice as many Maintenance Checks on it between Wear", "+2"]
    ]
}

export default uncommonMetal