import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const rareFurOrLeather: UniqueItemTable = {
    headers: [
        [
            "Roll",
            "Material",
            "Type",
            "Price Multiplier",
            "Bonus",
            "Conf Bonus"
        ]
    ],
    rows: [
        ["1 - 2", "Monster, Uncommon", "Leather", "3", "Ignore the first Wear gained", "+3"],
        ["3 - 4", "Beaver", "Fur", "3", "+3 vs Heat", "+3"],
        ["5 - 6", "Monster, Common", "Fur", "3", "+3 vs Heat", "+3"],
        ["7 - 8", "Ermine", "Fur", "3.5", "+3 vs Heat", "+3"],
        ["9 - 10", "Monster, Uncommon", "Fur", "4", "+3 vs Heat", "+3"],
        ["11 - 12", "Vair", "Fur", "4", "+3 vs Heat", "+3"],
        ["13 - 14", "Monster, Rare", "Leather", "4", "Ignore the first Wear gained", "+3"],
        ["15 - 16", "Monster, Rare", "Fur", "5", "+3 vs Heat", "+3"],
        ["17 - 18", "Monster, Legendary", "Leather", "5", "Ignore the first Wear gained", "+3"],
        ["19 - 20", "Monster, Legendary", "Fur", "6", "+3 vs Heat", "+3"]
    ]
}

export default rareFurOrLeather