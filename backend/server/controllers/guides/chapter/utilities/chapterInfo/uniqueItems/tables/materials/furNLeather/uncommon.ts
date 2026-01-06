import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const uncommonFurOrLeather: UniqueItemTable = {
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
        ["1 - 2", "Cordovan", "Leather", "2", "Ignore the first Wear gained", "+2"],
        ["3", "Stoat", "Fur", "2", "+3 vs Heat", "+2"],
        ["4", "Other Animal", "Fur", "2.25", "+3 vs Heat", "+2"],
        ["5", "Snakeskin", "Leather", "2.25", "Ignore the first Wear gained", "+2"],
        ["6", "Sable", "Fur", "2.5", "+3 vs Heat", "+2"],
        ["7", "Monster, Common", "Leather", "2.5", "Ignore the first Wear gained", "+2"],
        ["8", "Sentient Person (See Race of Origin)", "Leather", "3", "Ignore the first Wear gained", "+2"]
    ]
}

export default uncommonFurOrLeather