import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const beverages: UniqueItemTable = {
    headers: [
        [
            {
                label: "",
                colSpan: 4
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
            "Size",
            "Colors"
        ]
    ],
    rows: [
        ["1-4", "Ale (gallon)", 0.8, "M", 1],
        ["5-8", "Almond Milk (pint)", 1, "S", 1],
        ["9-12", "Applejack (pint)", 2, "S", 1],
        ["13-16", "Barley-Broth", 0.01, "S", 1],
        ["17-20", "Beer (gallon)", 0.8, "M", 1],
        ["21-24", "Bitter Broth (pint)", 1, "S", 1],
        ["25-28", "Braggart (pint)", 1, "S", 1],
        ["29-32", "Brandy (gallon)", 4, "M", 1],
        ["33-36", "Cider, Hard (gallon)", 3.2, "M", 1],
        ["37-40", "Cider, Sweet (gallon)", 2, "M", 1],
        ["41-44", "Decoction (pint)", 1, "S", 1],
        ["45-48", "Furmore (pint)", 1, "S", 1],
        ["49-52", "Grog (gallon)", 0.5, "M", 1],
        ["53-56", "Lemon Juice (gallon)", 4, "M", 1],
        ["57-60", "Liver Squeezings (cup)", 1, "T", 1],
        ["61-64", "Mead (gallon)", 3.8, "M", 1],
        ["65-68", "Milk (gallon)", 0.2, "M", 1],
        ["69-72", "Miracle Water (cup)", 5, "T", 1],
        ["73-76", "Must (cup)", 1, "T", 1],
        ["77-80", "Posset", 0.5, "S", 1],
        ["81-84", "Rum (gallon)", 15, "M", 1],
        ["85-88", "Tea (cup)", 4, "T", 1],
        ["89-92", "Vinegar (gallon)", 6, "M", 1],
        ["93-96", "Whiskey (gallon)", 0.4, "M", 1],
        ["97-100", "Wine (gallon)", 5.4, "M", 1]
    ]
}

export default beverages