import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const preppedFood: UniqueItemTable = {
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
        ["1-2", "Almond-Cream", 1, "", "T", 1 ],
        ["3-5", "Bear Fat Dumplings", 1, "", "S", 1 ],
        ["6-7", "Blood", 0.02, "", "T", 1 ],
        ["8-9", "Boe", 1, "", "T", 1 ],
        ["10-11", "Bree", 1.7, "", "T", 1 ],
        ["12-13", "Brose", 0.5, "", "T", 1 ],
        ["14-15", "Broth", 0.02, "", "T", 1 ],
        ["16-17", "Browncap", 0.01, "", "T", 1 ],
        ["18-19", "Butter (1lb)", 1.2, "", "T", 1 ],
        ["20-22", "Candy", 3, "", "T", 1 ],
        ["23-24", "Charmeats", 1, "", "T", 1 ],
        ["25-26", "Cheese (1lb)", 1.2, "", "T", 1 ],
        ["27-28", "Comfirts", 1, "", "T", 1 ],
        ["29-30", "Crips", 1, "", "T", 1 ],
        ["31-32", "Daintiers", 2.3, "", "T", 1 ],
        ["33-34", "Egg", 0.05, "", "F", 1 ],
        ["35-37", "Fish Flay", 1, "", "T", 1 ],
        ["38-40", "Forcemeat", 1, "", "T", 1 ],
        ["41-42", "Fry", 1, "", "T", 1 ],
        ["43-44", "Galainte", 1, "", "T", 1 ],
        ["45-46", "Giblets", 1, "1-4 Chicken\n5-7 Goose\n8-9 Other Animal\n10 Other Monster", "T", 1 ],
        ["47-48", "Gut Warmer", 0.75, "", "T", 1 ],
        ["49-50", "Handpie", 1.2, "", "T", 1 ],
        ["51-52", "Hot Water Pastries", 1.6, "", "T", 1 ],
        ["53-54", "Lard (1 pt)", 1, "", "S", 1 ],
        ["55-56", "Livers", 0.02, "", "T", 1 ],
        ["57-58", "Muggets", 1, "1-3 Calf\n4-5 Hogs\n6-7 Sheep\n8-9 Other Animal\n10 Other Monster", "T", 1 ],
        ["59-60", "Musted Sauce", 0.4, "", "T", 1 ],
        ["61-63", "Nice Drippings", 0.01, "", "T", 1 ],
        ["64-65", "Numbles", 0.03, "", "T", 1 ],
        ["66-67", "Pap", 0.3, "", "T", 1 ],
        ["68-69", "Pasta", 0.02, "", "T", 1 ],
        ["70-72", "Pie", 1.3, "", "T", 1 ],
        ["73-74", "Pottage", 0.3, "", "T", 1 ],
        ["75-78", "Preserves, Fruit", 1.3, "For type Food > Fruits & Vegetables", "T", 1 ],
        ["79-80", "Pynepaste", 0.1, "", "T", 1 ],
        ["81-82", "Quenelle", 1, "", "T", 1 ],
        ["83-84", "Quoses", 1, "", "T", 1 ],
        ["85-86", "Roe", 2, "", "T", 1 ],
        ["87-88", "Sausage, Blood", 0.01, "", "T", 1 ],
        ["89-90", "Sausage, Pepper", 0.03, "", "T", 1 ],
        ["91-92", "Sausage, Sailor’s", 0.01, "", "T", 1 ],
        ["93-94", "Scratch-Root Stew", 0.3, "", "T", 1 ],
        ["95-96", "Soorea", 1, "", "T", 1 ],
        ["97-98", "Souse", 1.6, "", "T", 1 ],
        ["99-100", "Syrup", 0.1, "", "T", 1 ]
    ]
}

export default preppedFood