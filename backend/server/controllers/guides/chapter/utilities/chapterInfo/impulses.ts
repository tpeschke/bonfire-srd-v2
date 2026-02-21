import { ImpulseInfo } from '@srd/common/interfaces/chapterInterfaces/ImpulseInterfaces'

const impulses: ImpulseInfo = {
    type: 'impulses',
    info: [
        {
            name: 'Survival',
            categories: [
                {
                    name: 'Food & Water',
                    rooms: [
                        "Pantry / Food Storage",
                        "Mess Hall",
                        "Kitchen",
                        "Specialized Kitchen",
                        "Ice Room / Preservation",
                        "Item Cleaning",
                        "Animals",
                        "Gardens / Farms",
                        "Water Source",
                        "Non-Water Source",
                        "Liquid Prep",
                        "Cistern",
                        "Liquid Distribution"
                    ]
                },
                {
                    name: 'Relationships',
                    rooms: [
                        "Artisan's Workspace",
                        "Trade",
                        "Records",
                        "Private Meeting",
                        "Welcome / Antechamber",
                        "Guest Room",
                        "Travel Support"
                    ]
                },
                {
                    name: 'Shelter',
                    rooms: [
                        "Sleeping",
                        "Warming",
                        "Transitory",
                        "Personal Cleaning",
                        "Hospital"
                    ]
                }
            ]
        },
        {
            name: "Security",
            categories: [
                {
                    name: "Belonging",
                    rooms: [
                        "Judgement",
                        "Social",
                        "Recreation",
                        "Religious",
                        "Government",
                        "Training",
                        "Memories"
                    ]
                },
                {
                    name: "Rest",
                    rooms: [
                        "Recreation",
                        "Personal Cleaning",
                        "Hobby",
                        "Social",
                        "Private Bedrooms",
                        "Hospital",
                        "Pets"
                    ]
                },
                {
                    name: "Safety",
                    rooms: [
                        "Watch",
                        "Guard Post",
                        "Walls, Locks, Barricades",
                        "Workshop",
                        "Arming",
                        "Traps",
                        "Kill Zones",
                        "Religious",
                        "Records",
                        "Warning"
                    ]
                }
            ]
        }, {
            name: "Expansion",
            categories: [
                {
                    name: "Achievement",
                    rooms: [
                        "Recreation",
                        "Competition",
                        "Trophy Display",
                        "Treasury",
                        "Government",
                        "Research",
                        "Records",
                        "Memories",
                        "Grave(s)",
                        "Experimentation"
                    ]
                },
                {
                    name: "Conquest",
                    rooms: [
                        "Training",
                        "Arming",
                        "Prison / Slave",
                        "Torture",
                        "Communication",
                        "Logistics",
                        "Information Gathering",
                        "Hospital",
                        "Planning"
                    ]
                },
                {
                    name: "Reproduction",
                    rooms: [
                        "Creche",
                        "Training",
                        "Recreation",
                        "Social",
                        "Hospital",
                        "Any Safety Room",
                        "Religious"
                    ]
                }
            ]
        }
    ]
}

export default impulses