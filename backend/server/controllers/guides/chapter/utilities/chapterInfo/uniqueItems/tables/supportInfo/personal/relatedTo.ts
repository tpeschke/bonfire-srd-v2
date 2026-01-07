import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const relatedTo: UniqueItemTable = {
    headers: [
        [
            "Roll",
            "Related To...",
        ]
    ],
    rows: [
        ["1", "Civic"],
        ["2", "Personal"],
        ["3", "Religious"],
        ["4", "Military/War"],
        ["5", "Political"],
        ["6", "Dynamically Opposed with Another Part of the Piece"],
        ["7", "Metaphorically Aligned with Another Part of the Piece"],
        ["8", "Roll Twice"],
        ["9", "Roll Thrice"],
        ["10", "Subject of Infamy (reroll)"]
    ]
}

export default relatedTo