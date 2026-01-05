import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const fruitsNVeggies: UniqueItemTable = {
    headers: [
        [
            {
                label: "",
                colSpan: 3
            },
            {
                label: "Material",
                colSpan: 2
            },
            {
                label: "Details",
                colSpan: 1
            }
        ],
        [
            "Roll",
            "Type",
            "Base Price",
            "Base Material(s)",
            "Size",
            "Colors"
        ]
    ],
    rows: [
        ["1-3", "Barberries", 1.5, "", "M", 1],
        ["4-6", "Bush Tomatoes", 1, "", "M", 1],
        ["7-9", "Canabens", 1, "", "M", 1],
        ["10-12", "Beets", 1, "", "M", 1],
        ["13-15", "Cardoons", 1, "", "M", 1],
        ["16-18", "Carrots", 1, "", "M", 1],
        ["19-21", "Celozia", 1, "", "M", 1],
        ["22-24", "Currants", 1.5, "", "M", 1],
        ["25-27", "Flattops", 1, "", "M", 1],
        ["28-30", "Lemon", 2, "", "M", 1],
        ["31-33", "Liakeer", 1, "", "M", 1],
        ["34-36", "Limes", 2, "", "M", 1],
        ["37-39", "Meat Grass", 1.5, "", "M", 1],
        ["40-42", "Mutries", 1, "", "M", 1],
        ["43-45", "Onions", 1, "", "M", 1],
        ["46-48", "Orange", 2, "", "M", 1],
        ["49-51", "Pippins", 2, "", "M", 1],
        ["52-54", "Pomace", 1.5, "", "M", 1],
        ["55-57", "Quadong", 1.5, "", "M", 1],
        ["58-60", "Quinces", 1, "", "M", 1],
        ["61-63", "Raisins", 1.5, "", "M", 1],
        ["64-66", "Roundberries", 1.5, "", "M", 1],
        ["67-69", "Rozele", 2, "", "M", 1],
        ["70-72", "Salad", 1, "", "M", 1],
        ["73-75", "Smalledge", 1, "", "M", 1],
        ["76-78", "Skyrwits", 1, "", "M", 1],
        ["79-81", "Spinach", 1, "", "M", 1],
        ["82-84", "Taola", 1, "", "M", 1],
        ["85-87", "Wardons", 1, "", "M", 1],
        ["88-90", "Warrigals", 1, "", "M", 1],
        ["91-92", "Wortes", 1, "", "M", 1],
        ["93-94", "Jam", 3, "Roll again on this table for type", "M", 1],
        ["95-96", "Pickles", 2, "", "M", 1],
        ["97-98", "Raisins", 1.5, "", "M", 1],
        ["99-100", "Seed, tobacco", 3, "", "M", 1]
    ]
}

export default fruitsNVeggies