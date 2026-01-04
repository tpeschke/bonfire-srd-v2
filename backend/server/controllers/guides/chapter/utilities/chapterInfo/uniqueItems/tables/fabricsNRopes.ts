import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const fabricsNRopes: UniqueItemTable = {
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
                colSpan: 2
            }
        ],
        [
            "Roll",
            "Type",
            "Base Price",
            "Base Material(s)",
            "Size",
            "Colors",
            "Stitchings",
        ]
    ],
    rows: [
        ["1-3", "Comforter (3.5’ x 6’)", 10, "1-2 Down\n3-5 Feather\n7-8 Heavy Down\n9-10 Heavy Feather\n(see Animal > Air for type)\nwith Cloth", "L", 7, 4],
        ["4-7", "Cut of Fabric (1 sq yards)", 2.6, "Cloth", "S", 2, 2],
        ["8-10", "Flag", 5, "Cloth", "S", 9, 3],
        ["11-13", "Thread, 1d4 yards", 0.01, "1-7 Thread\n8-10 Twine", "T", 1, ""],
        ["14-16", "Yarn, 1d4 yards", 0.01, "1-5 Cotton\n6-10 Wool", "T", 2, ""],
        ["17-20", "Rope", 13, "1-4 Hemp\n5-7 Cotton\n8-9 Cloth\n10 Silk", "M", 2, 2]
    ]
}

export default fabricsNRopes