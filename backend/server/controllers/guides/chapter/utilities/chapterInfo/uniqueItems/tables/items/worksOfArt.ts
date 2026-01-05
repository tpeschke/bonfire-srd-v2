import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const worksOfArt: UniqueItemTable = {
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
                colSpan: 3
            }
        ],
        [
            "Roll",
            "Type",
            "Base Price",
            "Base Material(s)",
            "Size",
            "Colors",
            "Engravings/Stitchings",
            "Gems",
        ]
    ],
    rows: [
        ["1", "Painting", 150, "1 - 3 Cloth\n4 - 7 Leather\n8 - 9 Wood\n10 Metal", "L", 9, 9, ""],
        ["2", "Pottery", 25, "Stone/Earthwork", "S", 7, 9, 1],
        ["3", "Sculpture", 200, "Stone/Earthwork", "H", 8, 9, 1],
        ["4", "Book", 50, "Cover:\n1 Metal\n2 - 7 Cloth\n8 - 9 Leather\n10 Wood\nInterior:\nPaper Product", "S", 6, 9, ""],
        ["5", "Glassware", 200, "Glass", "S", 8, 9, 1],
        ["6", "Tapestry", 250, "Wool", "H", 9, 9, ""]
    ]
}

export default worksOfArt