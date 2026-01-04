import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const instruments: UniqueItemTable = {
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
            "Engravings/Stitching",
            "Gems",
        ]
    ],
    rows: [
        ["1-4", "Adufe", 5.3, "Wood", "S", 1, 1, 1],
        ["5-8", "Bagpipes", 94.9, "1-8 Wood;\n9-10 Metal;\nwith Cloth", "M", 3, 2, ""],
        ["9-12", "Bladder Pipe", 35, "1-8 Wood;\n9-10 Metal;\nwith Cloth", "S", 2, 1, ""],
        ["13-15", "Citole", 50, "Wood", "M", 1, 1, ""],
        ["16-19", "Crumhorn", 25, "Wood", "S", 1, 1, ""],
        ["20-23", "Dulcimer", 70, "Wood", "L", 1, 1, 1],
        ["24-27", "Fiddle", 80, "Wood", "M", 1, 1, 1],
        ["28-31", "Frame Drum", 3, "Wood & Leather", "S", 1, 1, ""],
        ["32-34", "Gittern", 75, "Wood", "S", 1, 1, ""],
        ["35-38", "Glockenspiel", 7, "Wood & Metal", "L", 1, 2, 1],
        ["39-41", "Guitarra", 35, "Wood", "M", 1, 2, ""],
        ["42-44", "Harp", 40, "Wood", "M", 1, 3, 2],
        ["45-48", "Hurdy-Gurdy", 100, "Wood & Metal", "L", 1, 2, ""],
        ["49-51", "Lute", 95, "Wood", "M", 1, 2, ""],
        ["52-55", "Mandolin", 60, "Wood", "M", 1, 2, ""],
        ["56-58", "Naqareh", 18.7, "Wood & Leather", "S", 1, 2, ""],
        ["59-61", "Oud", 42.5, "Wood", "L", 1, 1, ""],
        ["62-64", "Psalterium", 200, "Wood", "L", 1, 3, 3],
        ["65-67", "Rebec", 42.5, "Wood", "M", 1, 1, ""],
        ["68-71", "Recorder", 5, "Wood", "S", 1, 1, ""],
        ["72-74", "Sackbut", 41.5, "Metal", "M", 1, 1, ""],
        ["75-77", "Shawm", 34.5, "Wood", "L", 1, 1, ""],
        ["78-81", "String Drum", 27, "Wood", "M", 2, 1, ""],
        ["82-85", "Tabor Drum", 6.5, "Wood & Leather", "M", 2, 1, ""],
        ["86-88", "Tabor Pipe", 26.5, "Wood", "S", 1, 1, ""],
        ["89-91", "Timbrel", 5.5, "Metal & Wood", "S", 1, 1, ""],
        ["92-94", "Viol", 100, "Wood", "M", 1, 1, ""],
        ["95-97", "Zampogna", 75, "Wood;\nwith 1-2 Cloth;\n3-10 Leather", "L", 2, 1, ""],
        ["98-100", "Hunting Horn", 25, "Metal", "S", 1, 1, ""]
    ]
}

export default instruments