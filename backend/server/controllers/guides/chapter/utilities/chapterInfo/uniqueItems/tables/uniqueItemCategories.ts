import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const uniqueItemCategories: UniqueItemTable = {
    tableName: "Unique Item Categories",
    headers: [
        [
            "d100",
            "Unique Item Categories",
        ]
    ],
    rows: [
        ["1-5", "Academic Tools"],
        ["6-10", "Adventuring Gear"],
        ["11-13", "Alchemical Substances"],
        ["14-16", "Armor"],
        ["17-21", "Beverages"],
        ["22-26", "Clothing"],
        ["27-31", "Entertainment"],
        ["32-36", "Fabrics & Ropes"],
        ["37-40", "Food"],
        ["41-45", "Household Items"],
        ["46-50", "Illumination"],
        ["51-55", "Jewelry"],
        ["56-60", "Medical Tools"],
        ["61-65", "Music Instruments"],
        ["66-70", "Personal Containers"],
        ["71-75", "Raw Goods"],
        ["76-80", "Religious Items"],
        ["81-83", "Shields"],
        ["84-88", "Trade Tools"],
        ["89-91", "Weapons"],
        ["92-96", "Works of Art"],
        ["97-100", "Roll Twice and Combine"]
    ]
}

export default uniqueItemCategories