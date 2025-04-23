// API endpoints - copied from internet
const API_BASE_URL = 'http://localhost:5000/api';

// Badge definitions 
const badges = {
    beginner: {
        name: "Sustainability Novice",
        icon: "🌱",
        description: "Complete your first quiz",
        requirement: 1
    },
    intermediate: {
        name: "Green Explorer",
        icon: "🌿",
        description: "Complete 10 quizzes",
        requirement: 10
    },
    advanced: {
        name: "Eco Warrior",
        icon: "🌳",
        description: "Complete 25 quizzes",
        requirement: 25
    },
    expert: {
        name: "Sustainability Master",
        icon: "🌍",
        description: "Complete 50 quizzes",
        requirement: 50
    },
    legend: {
        name: "Environmental Legend",
        icon: "🏆",
        description: "Complete 100 quizzes",
        requirement: 100
    },
    streak3: {
        name: "3-Day Streak",
        icon: "🔥",
        description: "Maintain a 3-day streak",
        requirement: 3
    },
    streak7: {
        name: "7-Day Streak",
        icon: "⚡",
        description: "Maintain a 7-day streak",
        requirement: 7
    },
    streak30: {
        name: "30-Day Streak",
        icon: "🌟",
        description: "Maintain a 30-day streak",
        requirement: 30
    }
};

// Quiz questions 
// const quizQuestions = {
//     easy: [
//         {
//             question: "What is the primary cause of global warming?",
//             options: ["Greenhouse gases", "Solar flares", "Ocean currents", "Volcanic eruptions"],
//             correct: 0
//         },
//         {
//             question: "Which of these is a renewable energy source?",
//             options: ["Coal", "Natural gas", "Solar power", "Nuclear power"],
//             correct: 2
//         },
//         {
//             question: "What is the '3 R's' of waste management?",
//             options: ["Reduce, Reuse, Recycle", "Read, Write, Remember", "Run, Rest, Relax", "Raw, Ripe, Rotten"],
//             correct: 0
//         },
//         {
//             question: "Which of these helps reduce water consumption?",
//             options: ["Taking longer showers", "Using a dishwasher", "Fixing leaky faucets", "Running water while brushing teeth"],
//             correct: 2
//         },
//         {
//             question: "What is the main benefit of using public transportation?",
//             options: ["More comfortable travel", "Reduced carbon emissions", "Faster travel time", "Lower cost"],
//             correct: 1
//         }
//     ],
//     medium: [
//         {
//             question: "What percentage of marine pollution is caused by plastic?",
//             options: ["40%", "60%", "80%", "90%"],
//             correct: 2
//         },
//         {
//             question: "Which country produces the most solar energy?",
//             options: ["United States", "Germany", "China", "Japan"],
//             correct: 2
//         },
//         {
//             question: "How much of Earth's water is freshwater?",
//             options: ["1%", "2.5%", "5%", "10%"],
//             correct: 1
//         },
//         {
//             question: "What is the main component of smog?",
//             options: ["Carbon dioxide", "Nitrogen oxides", "Methane", "Ozone"],
//             correct: 1
//         },
//         {
//             question: "Which ecosystem has the highest biodiversity?",
//             options: ["Deserts", "Tropical rainforests", "Tundra", "Grasslands"],
//             correct: 1
//         }
//     ],
//     hard: [
//         {
//             question: "What is the current rate of species extinction compared to the natural background rate?",
//             options: ["10 times faster", "100 times faster", "1000 times faster", "10000 times faster"],
//             correct: 2
//         },
//         {
//             question: "What percentage of global greenhouse gas emissions comes from the transportation sector?",
//             options: ["14%", "23%", "28%", "35%"],
//             correct: 1
//         },
//         {
//             question: "How much of the world's coral reefs have been lost since 1950?",
//             options: ["20%", "35%", "50%", "70%"],
//             correct: 2
//         },
//         {
//             question: "What is the estimated economic cost of climate change by 2100?",
//             options: ["$1 trillion", "$5 trillion", "$10 trillion", "$20 trillion"],
//             correct: 3
//         },
//         {
//             question: "Which country has the highest per capita carbon emissions?",
//             options: ["United States", "China", "Qatar", "Saudi Arabia"],
//             correct: 2
//         }
//     ]
// };

// Quiz Data 
const quizData = {
    categories: {
        sdgs: {
            title: "Sustainable Development Goals",
            questions: [
                {
                    question: "Which of the following is the first Sustainable Development Goal (SDG)?",
                    options: ["Zero Hunger", "No Poverty", "Good Health and Well-being", "Quality Education"],
                    correctAnswer: 1,
                    explanation: "SDG 1 is 'No Poverty' - End poverty in all its forms everywhere."
                },
                {
                    question: "Which SDG focuses on climate action?",
                    options: ["SDG 10", "SDG 11", "SDG 13", "SDG 15"],
                    correctAnswer: 2,
                    explanation: "SDG 13 is 'Climate Action' - Take urgent action to combat climate change and its impacts."
                },
                {
                    question: "What is the main goal of SDG 10?",
                    options: ["Quality Education", "Gender Equality", "Reduce Inequality", "Clean Energy"],
                    correctAnswer: 2,
                    explanation: "SDG 10 aims to 'Reduce Inequality' within and among countries."
                },
                {
                    question: "Which of the following SDGs focuses on clean water and sanitation?",
                    options: ["SDG 3", "SDG 5", "SDG 6", "SDG 7"],
                    correctAnswer: 2,
                    explanation: "SDG 6 is 'Clean Water and Sanitation' - Ensure availability and sustainable management of water and sanitation for all."
                },
                {
                    question: "The deadline to achieve the SDGs is:",
                    options: ["2025", "2030", "2040", "2050"],
                    correctAnswer: 1,
                    explanation: "The Sustainable Development Goals (SDGs) are set to be achieved by 2030."
                },
                {
                    question: "What does SDG 4 aim to ensure?",
                    options: ["Peace and justice", "Inclusive and equitable quality education", "Sustainable consumption", "Industry and innovation"],
                    correctAnswer: 1,
                    explanation: "SDG 4 aims to 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all'."
                },
                {
                    question: "Which SDG addresses responsible consumption and production?",
                    options: ["SDG 9", "SDG 10", "SDG 11", "SDG 12"],
                    correctAnswer: 3,
                    explanation: "SDG 12 is 'Responsible Consumption and Production' - Ensure sustainable consumption and production patterns."
                },
                {
                    question: "What is SDG 17 about?",
                    options: ["Gender equality", "Life below water", "Partnerships for the Goals", "Affordable and clean energy"],
                    correctAnswer: 2,
                    explanation: "SDG 17 is 'Partnerships for the Goals' - Strengthen the means of implementation and revitalize the global partnership for sustainable development."
                },
                {
                    question: "Which of these is an economic-focused SDG?",
                    options: ["Decent Work and Economic Growth", "Life on Land", "Clean Water and Sanitation", "Climate Action"],
                    correctAnswer: 0,
                    explanation: "SDG 8 is 'Decent Work and Economic Growth' - Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all."
                },
                {
                    question: "Which SDG number is about Good Health and Well-being?",
                    options: ["SDG 1", "SDG 2", "SDG 3", "SDG 4"],
                    correctAnswer: 2,
                    explanation: "SDG 3 is 'Good Health and Well-being' - Ensure healthy lives and promote well-being for all at all ages."
                }
            ]
        },
        climate: {
            name: 'Climate Change Facts',
            icon: 'fa-temperature-high',
            questions: [
                {
                    question: 'What is the primary greenhouse gas released by human activities that contributes to climate change?',
                    options: [
                        'Methane',
                        'Nitrous Oxide',
                        'Carbon Dioxide',
                        'Ozone'
                    ],
                    correct: 2,
                    explanation: 'CO₂ accounts for about three-quarters of emissions and remains in the atmosphere for hundreds of years.'
                },
                {
                    question: 'Which sector is the largest contributor to global greenhouse gas emissions?',
                    options: [
                        'Transportation',
                        'Agriculture',
                        'Electricity and Heat Production',
                        'Industrial Processes'
                    ],
                    correct: 2,
                    explanation: 'Fossil fuel combustion for energy accounts for over 40% of CO₂ emissions.'
                },
                {
                    question: 'True or False: Climate change only affects the polar regions.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'Climate change affects global weather patterns, agriculture, sea levels, and human health everywhere.'
                },
                {
                    question: 'What international agreement aims to limit global warming to below 2°C?',
                    options: [
                        'Kyoto Protocol',
                        'Paris Agreement',
                        'Montreal Protocol',
                        'Rio Declaration'
                    ],
                    correct: 1,
                    explanation: 'The Paris Agreement was adopted in 2015 and signed by nearly every country in the world.'
                },
                {
                    question: 'Which of the following is a major effect of climate change?',
                    options: [
                        'Decrease in forest cover',
                        'Rising sea levels',
                        'Increased frequency of extreme weather events',
                        'All of the above'
                    ],
                    correct: 3,
                    explanation: 'These impacts threaten ecosystems, infrastructure, and livelihoods.'
                },
                {
                    question: 'What is the process by which the Earth\'s atmosphere traps heat?',
                    options: [
                        'Photosynthesis',
                        'Greenhouse Effect',
                        'Thermal Reflection',
                        'Heat Conduction'
                    ],
                    correct: 1,
                    explanation: 'Without the greenhouse effect, Earth would be too cold to support life.'
                },
                {
                    question: 'Which gas is more potent than CO₂ but less abundant, and is commonly emitted from livestock and landfills?',
                    options: [
                        'Sulfur Dioxide',
                        'Oxygen',
                        'Methane',
                        'Nitrogen'
                    ],
                    correct: 2,
                    explanation: 'Methane is over 25 times more effective than CO₂ at trapping heat over a 100-year period.'
                },
                {
                    question: 'Which human activity contributes most to deforestation and carbon emissions?',
                    options: [
                        'Fishing',
                        'Industrial Manufacturing',
                        'Logging for Timber',
                        'Clearing land for agriculture'
                    ],
                    correct: 3,
                    explanation: 'Agriculture, especially cattle ranching and soy production, drives most deforestation in the Amazon.'
                },
                {
                    question: 'What is the term for the long-term average of weather patterns in a region?',
                    options: [
                        'Temperature',
                        'Climate',
                        'Atmosphere',
                        'Forecast'
                    ],
                    correct: 1,
                    explanation: 'Weather changes daily; climate is measured over decades.'
                },
                {
                    question: 'How much has the Earth\'s average surface temperature risen since the late 19th century?',
                    options: [
                        '0.2°C',
                        '0.5°C',
                        '1.1°C',
                        '2.5°C'
                    ],
                    correct: 2,
                    explanation: 'This small number has had huge consequences globally — glaciers are melting, and weather is more extreme.'
                }
            ]
        },
        sustainability: {
            name: 'Sustainability',
            icon: 'fa-leaf',
            questions: [
                {
                    question: 'What is the primary cause of global warming?',
                    options: [
                        'Natural climate cycles',
                        'Human activities and greenhouse gas emissions',
                        'Solar radiation',
                        'Volcanic eruptions'
                    ],
                    correct: 1
                },
                {
                    question: 'Which of these is NOT a renewable energy source?',
                    options: [
                        'Solar power',
                        'Wind energy',
                        'Coal',
                        'Hydropower'
                    ],
                    correct: 2
                },
                {
                    question: 'What percentage of Earth\'s water is freshwater?',
                    options: [
                        '2.5%',
                        '10%',
                        '25%',
                        '50%'
                    ],
                    correct: 0
                }
            ]
        },
        recycling: {
            name: 'Recycling',
            icon: 'fa-recycle',
            questions: [
                {
                    question: 'Which of these items cannot be recycled?',
                    options: [
                        'Glass bottles',
                        'Plastic bags',
                        'Aluminum cans',
                        'Paper products'
                    ],
                    correct: 1
                },
                {
                    question: 'What is the recycling symbol called?',
                    options: [
                        'Eco mark',
                        'Green triangle',
                        'Mobius loop',
                        'Recycle badge'
                    ],
                    correct: 2
                },
                {
                    question: 'Which of these is recyclable?',
                    options: [
                        'Pizza boxes with grease',
                        'Plastic straws',
                        'Styrofoam',
                        'Clean paper'
                    ],
                    correct: 3
                }
            ]
        },
        carbon: {
            title: "Carbon Footprint & Daily Habits",
            questions: [
                {
                    question: "What is a carbon footprint?",
                    options: [
                        "The amount of carbon in your body",
                        "The total greenhouse gases emitted by your actions",
                        "A footprint left on a carbon surface",
                        "A method to clean carbon from the air"
                    ],
                    correctAnswer: 1,
                    explanation: "A carbon footprint is the total amount of greenhouse gases (including carbon dioxide and methane) that are generated by our actions."
                },
                {
                    question: "Which of the following daily habits contributes most to an individual's carbon footprint?",
                    options: [
                        "Taking a shower",
                        "Watching TV",
                        "Driving a petrol or diesel car",
                        "Walking to school"
                    ],
                    correctAnswer: 2,
                    explanation: "Transportation, particularly driving fossil fuel-powered vehicles, is one of the largest contributors to individual carbon footprints."
                },
                {
                    question: "Which of these is a low-carbon mode of transport?",
                    options: [
                        "Car",
                        "Plane",
                        "Bicycle",
                        "Motorbike"
                    ],
                    correctAnswer: 2,
                    explanation: "Cycling produces zero direct emissions and is one of the most environmentally friendly modes of transportation."
                },
                {
                    question: "Eating less of which of the following can significantly reduce your carbon footprint?",
                    options: [
                        "Vegetables",
                        "Grains",
                        "Meat",
                        "Fruits"
                    ],
                    correctAnswer: 2,
                    explanation: "Meat production, especially beef, has a much higher carbon footprint than plant-based foods due to methane emissions from livestock and the resources needed for animal farming."
                },
                {
                    question: "Which household appliance generally uses the most electricity and contributes heavily to carbon emissions?",
                    options: [
                        "Toaster",
                        "Refrigerator",
                        "Blender",
                        "Ceiling fan"
                    ],
                    correctAnswer: 1,
                    explanation: "Refrigerators consume significant electricity because they run 24/7 and require constant energy to maintain cool temperatures."
                },
                {
                    question: "What is a simple way to reduce your carbon footprint at home?",
                    options: [
                        "Use more plastic bags",
                        "Keep lights on all night",
                        "Switch off appliances when not in use",
                        "Drive more often"
                    ],
                    correctAnswer: 2,
                    explanation: "Turning off appliances and electronics when not in use (including standby mode) can significantly reduce energy consumption and lower your carbon footprint."
                },
                {
                    question: "Which product has the highest carbon footprint due to its production process?",
                    options: [
                        "Cotton T-shirt",
                        "Plastic bottle",
                        "Smartphone",
                        "Paper bag"
                    ],
                    correctAnswer: 2,
                    explanation: "Smartphones have a high carbon footprint due to the energy-intensive manufacturing process, mining of rare earth metals, and global transportation of components."
                },
                {
                    question: "Which type of energy source contributes least to carbon emissions?",
                    options: [
                        "Coal",
                        "Oil",
                        "Natural Gas",
                        "Solar"
                    ],
                    correctAnswer: 3,
                    explanation: "Solar energy produces no direct carbon emissions during operation and has minimal environmental impact compared to fossil fuels."
                },
                {
                    question: "Which of the following practices helps in offsetting carbon emissions?",
                    options: [
                        "Burning trash",
                        "Planting trees",
                        "Using air conditioners more",
                        "Eating processed foods"
                    ],
                    correctAnswer: 1,
                    explanation: "Trees absorb carbon dioxide during photosynthesis, making tree planting an effective way to offset carbon emissions."
                },
                {
                    question: "What can you do while shopping to reduce your carbon footprint?",
                    options: [
                        "Always buy new clothes",
                        "Choose local and seasonal products",
                        "Buy imported exotic fruits",
                        "Use single-use plastic bags"
                    ],
                    correctAnswer: 1,
                    explanation: "Choosing local and seasonal products reduces transportation emissions and supports sustainable farming practices."
                }
            ]
        },
        eco: {
            title: "Eco-Friendly Practices",
            questions: [
                {
                    question: "Which of the following is the most eco-friendly way to carry groceries?",
                    options: [
                        "Plastic bags",
                        "Paper bags",
                        "Reusable cloth bags",
                        "Styrofoam boxes"
                    ],
                    correctAnswer: 2,
                    explanation: "Reusable cloth bags are the most eco-friendly option as they can be used multiple times, reducing waste and environmental impact compared to single-use options."
                },
                {
                    question: "What does the \"3 Rs\" in sustainability stand for?",
                    options: [
                        "Reduce, Recycle, Repair",
                        "Reuse, Recycle, Repeat",
                        "Reduce, Reuse, Recycle",
                        "Replace, Rebuild, Reuse"
                    ],
                    correctAnswer: 2,
                    explanation: "The 3 Rs stand for Reduce (minimize waste), Reuse (use items multiple times), and Recycle (process materials for new use)."
                },
                {
                    question: "Which of these is an eco-friendly way to save electricity?",
                    options: [
                        "Leave lights on during the day",
                        "Use LED bulbs",
                        "Use electric heaters all the time",
                        "Keep the fridge door open"
                    ],
                    correctAnswer: 1,
                    explanation: "LED bulbs are more energy-efficient than traditional bulbs, using up to 90% less energy and lasting much longer."
                },
                {
                    question: "What is the best way to dispose of kitchen food waste?",
                    options: [
                        "Burn it",
                        "Throw it in a plastic bag",
                        "Compost it",
                        "Flush it down the toilet"
                    ],
                    correctAnswer: 2,
                    explanation: "Composting food waste turns it into nutrient-rich soil, reduces landfill waste, and helps reduce methane emissions from decomposing organic matter."
                },
                {
                    question: "Which is the most environmentally friendly method of transportation for short distances?",
                    options: [
                        "Driving a car",
                        "Taking a flight",
                        "Riding a bicycle",
                        "Using a motorcycle"
                    ],
                    correctAnswer: 2,
                    explanation: "Cycling produces zero emissions, improves health, and is the most sustainable mode of transport for short distances."
                },
                {
                    question: "Which of the following is a benefit of planting more trees?",
                    options: [
                        "Increases noise pollution",
                        "Raises the temperature",
                        "Reduces air pollution",
                        "Decreases biodiversity"
                    ],
                    correctAnswer: 2,
                    explanation: "Trees absorb carbon dioxide and other pollutants, produce oxygen, and help improve air quality in urban areas."
                },
                {
                    question: "Which of these household items is not recyclable in most recycling programs?",
                    options: [
                        "Glass bottle",
                        "Plastic container",
                        "Used paper towel",
                        "Aluminum can"
                    ],
                    correctAnswer: 2,
                    explanation: "Used paper towels are typically not recyclable due to contamination and the fibers being too short to be reprocessed effectively."
                },
                {
                    question: "What is a sustainable way to save water while brushing your teeth?",
                    options: [
                        "Keep the tap running",
                        "Use mouthwash instead",
                        "Turn off the tap while brushing",
                        "Brush for a shorter time"
                    ],
                    correctAnswer: 2,
                    explanation: "Turning off the tap while brushing can save up to 8 gallons of water per day per person."
                },
                {
                    question: "Why are fast fashion brands harmful to the environment?",
                    options: [
                        "They produce high-quality clothes",
                        "They encourage long-term use of items",
                        "They often use eco-friendly materials",
                        "They promote overproduction and waste"
                    ],
                    correctAnswer: 3,
                    explanation: "Fast fashion contributes to environmental damage through excessive production, poor quality materials, and massive amounts of textile waste."
                },
                {
                    question: "Which of these actions contributes to a greener lifestyle?",
                    options: [
                        "Using single-use plastics",
                        "Buying only what you need",
                        "Wasting leftover food",
                        "Leaving electronics plugged in all day"
                    ],
                    correctAnswer: 1,
                    explanation: "Buying only what you need reduces waste, saves money, and minimizes the environmental impact of production and disposal."
                }
            ]
        },
        tech: {
            title: "Sustainable Living & Green Tech",
            questions: [
                {
                    question: "What does sustainable living aim to do?",
                    options: [
                        "Increase the use of plastic products",
                        "Maintain a luxurious lifestyle at any cost",
                        "Reduce one's environmental impact",
                        "Promote consumerism"
                    ],
                    correctAnswer: 2,
                    explanation: "Sustainable living aims to reduce environmental impact by making conscious choices that minimize resource consumption and waste generation."
                },
                {
                    question: "Which of the following is an example of green technology?",
                    options: [
                        "Diesel engines",
                        "Solar panels",
                        "Incandescent bulbs",
                        "Gasoline generators"
                    ],
                    correctAnswer: 1,
                    explanation: "Solar panels are a green technology as they harness renewable solar energy without producing greenhouse gas emissions during operation."
                },
                {
                    question: "What is a smart grid in green technology?",
                    options: [
                        "A Wi-Fi network",
                        "A grid that delivers electricity digitally and efficiently",
                        "A solar-powered vehicle",
                        "A new type of mobile phone"
                    ],
                    correctAnswer: 1,
                    explanation: "A smart grid is an electrical grid that uses digital technology to monitor and manage the production and distribution of electricity more efficiently."
                },
                {
                    question: "What is the main purpose of green buildings?",
                    options: [
                        "To use more water",
                        "To increase construction costs",
                        "To minimize environmental impact",
                        "To reduce building height"
                    ],
                    correctAnswer: 2,
                    explanation: "Green buildings are designed to minimize environmental impact through energy efficiency, water conservation, and sustainable materials."
                },
                {
                    question: "Which energy source is considered non-renewable?",
                    options: [
                        "Wind",
                        "Solar",
                        "Coal",
                        "Hydropower"
                    ],
                    correctAnswer: 2,
                    explanation: "Coal is a non-renewable energy source as it takes millions of years to form and cannot be replenished at the rate it is consumed."
                },
                {
                    question: "What is one of the benefits of using LED lights in sustainable living?",
                    options: [
                        "Higher electricity usage",
                        "Shorter lifespan",
                        "Consumes less energy and lasts longer",
                        "Generates more heat"
                    ],
                    correctAnswer: 2,
                    explanation: "LED lights are more energy-efficient than traditional bulbs and have a longer lifespan, reducing both energy consumption and waste."
                },
                {
                    question: "What household action supports sustainable water use?",
                    options: [
                        "Running the tap while washing dishes",
                        "Fixing leaking faucets",
                        "Using a power washer daily",
                        "Taking long hot showers"
                    ],
                    correctAnswer: 1,
                    explanation: "Fixing leaking faucets prevents water waste and can save hundreds of gallons of water per year."
                },
                {
                    question: "Which of the following is a sustainable way to travel?",
                    options: [
                        "Driving a diesel truck",
                        "Riding a bicycle",
                        "Taking multiple short flights",
                        "Using personal cars for every trip"
                    ],
                    correctAnswer: 1,
                    explanation: "Cycling is a sustainable mode of transportation as it produces zero emissions and promotes physical health."
                },
                {
                    question: "What is vertical farming, a green technology in agriculture?",
                    options: [
                        "Farming on mountain slopes",
                        "Growing plants in rows horizontally",
                        "Growing crops in stacked layers, often indoors",
                        "Farming with tractors only"
                    ],
                    correctAnswer: 2,
                    explanation: "Vertical farming grows crops in stacked layers, often in controlled indoor environments, using less land and water than traditional farming."
                },
                {
                    question: "Which of the following practices supports sustainable consumption?",
                    options: [
                        "Buying in bulk to reduce packaging",
                        "Using disposable cutlery daily",
                        "Overbuying clothes",
                        "Ignoring product labels"
                    ],
                    correctAnswer: 0,
                    explanation: "Buying in bulk reduces packaging waste and transportation emissions, making it a more sustainable consumption practice."
                }
            ]
        },
        resources: {
            title: "Water, Energy, and Waste Management",
            questions: [
                {
                    question: "What is the main source of fresh water on Earth?",
                    options: [
                        "Oceans",
                        "Ice caps and glaciers",
                        "Underground aquifers",
                        "Rainforests"
                    ],
                    correctAnswer: 1,
                    explanation: "Ice caps and glaciers contain about 68.7% of the Earth's fresh water, making them the largest source of fresh water on Earth."
                },
                {
                    question: "Which of the following helps in saving water at home?",
                    options: [
                        "Washing clothes with the tap running",
                        "Installing a dual-flush toilet",
                        "Taking long baths every day",
                        "Watering plants at noon"
                    ],
                    correctAnswer: 1,
                    explanation: "Dual-flush toilets allow users to choose between a full or partial flush, significantly reducing water consumption compared to traditional toilets."
                },
                {
                    question: "What type of energy is produced by falling or flowing water?",
                    options: [
                        "Thermal energy",
                        "Solar energy",
                        "Hydroelectric energy",
                        "Nuclear energy"
                    ],
                    correctAnswer: 2,
                    explanation: "Hydroelectric energy is generated by converting the kinetic energy of falling or flowing water into electricity through turbines."
                },
                {
                    question: "Which of the following is a non-renewable energy resource?",
                    options: [
                        "Wind",
                        "Natural gas",
                        "Solar",
                        "Geothermal"
                    ],
                    correctAnswer: 1,
                    explanation: "Natural gas is a fossil fuel that takes millions of years to form and cannot be replenished at the rate it is consumed, making it non-renewable."
                },
                {
                    question: "What is the most energy-efficient way to light your home?",
                    options: [
                        "Halogen bulbs",
                        "Incandescent bulbs",
                        "LED lights",
                        "Fluorescent tubes"
                    ],
                    correctAnswer: 2,
                    explanation: "LED lights are the most energy-efficient lighting option, using up to 90% less energy than traditional incandescent bulbs and lasting much longer."
                },
                {
                    question: "Which of these items can be composted at home?",
                    options: [
                        "Plastic wrappers",
                        "Vegetable peels",
                        "Aluminum foil",
                        "Glass bottles"
                    ],
                    correctAnswer: 1,
                    explanation: "Vegetable peels are organic waste that can be composted at home, turning into nutrient-rich soil for plants."
                },
                {
                    question: "What does the process of recycling do?",
                    options: [
                        "Creates more waste",
                        "Reduces the need for raw materials",
                        "Increases landfill use",
                        "Pollutes water sources"
                    ],
                    correctAnswer: 1,
                    explanation: "Recycling reduces the need for raw materials by converting used materials into new products, conserving natural resources and energy."
                },
                {
                    question: "What is e-waste?",
                    options: [
                        "Water used for electronics",
                        "Plastic waste",
                        "Discarded electronic devices",
                        "Eco-friendly waste"
                    ],
                    correctAnswer: 2,
                    explanation: "E-waste refers to discarded electronic devices and equipment, which often contain hazardous materials and should be properly recycled."
                },
                {
                    question: "Which action helps reduce energy consumption at home?",
                    options: [
                        "Using old, inefficient appliances",
                        "Keeping devices plugged in all day",
                        "Turning off lights and electronics when not in use",
                        "Heating empty rooms"
                    ],
                    correctAnswer: 2,
                    explanation: "Turning off lights and electronics when not in use is a simple way to reduce energy consumption and lower your electricity bills."
                },
                {
                    question: "Which of these is a safe way to manage hazardous household waste like batteries and chemicals?",
                    options: [
                        "Burning them in the backyard",
                        "Throwing them in regular trash",
                        "Taking them to a hazardous waste collection center",
                        "Flushing them down the toilet"
                    ],
                    correctAnswer: 2,
                    explanation: "Hazardous waste should be taken to a designated collection center where it can be properly disposed of or recycled to prevent environmental contamination."
                }
            ]
        },
        myths: {
            title: "True or False Myths",
            questions: [
                {
                    question: "The Sustainable Development Goals (SDGs) are only meant for developing countries.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 1,
                    explanation: "The SDGs are universal goals that apply to all countries, both developed and developing, as they address global challenges that affect everyone."
                },
                {
                    question: "There are 17 SDGs in total, covering issues like poverty, education, and climate action.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 0,
                    explanation: "The United Nations established 17 SDGs in 2015 as part of the 2030 Agenda for Sustainable Development, covering a wide range of social, economic, and environmental issues."
                },
                {
                    question: "Flying once a year has no significant impact on your carbon footprint.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 1,
                    explanation: "A single long-haul flight can generate more CO2 than some people produce in a year. Aviation is one of the fastest-growing sources of greenhouse gas emissions."
                },
                {
                    question: "Eating locally grown food can reduce your carbon footprint.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 0,
                    explanation: "Local food typically travels shorter distances, reducing transportation emissions. However, the farming methods used can also significantly impact the carbon footprint."
                },
                {
                    question: "Using reusable items like bottles and bags can help reduce plastic pollution.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 0,
                    explanation: "Reusable items help reduce single-use plastic waste and can significantly decrease plastic pollution when used consistently."
                },
                {
                    question: "Eco-friendly products are always more expensive than regular ones.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 1,
                    explanation: "While some eco-friendly products may cost more initially, they often save money in the long run through durability and energy efficiency. Many sustainable options are also becoming more affordable."
                },
                {
                    question: "Climate change is caused only by natural cycles, not human activity.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 1,
                    explanation: "Scientific evidence shows that human activities, particularly the burning of fossil fuels and deforestation, are the primary drivers of recent climate change."
                },
                {
                    question: "Melting polar ice contributes to rising sea levels worldwide.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 0,
                    explanation: "Melting polar ice caps and glaciers contribute significantly to global sea level rise, threatening coastal communities and ecosystems worldwide."
                },
                {
                    question: "Solar panels do not work on cloudy days.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 1,
                    explanation: "Solar panels can still generate electricity on cloudy days, though at reduced efficiency. Modern solar technology can capture diffused sunlight even in overcast conditions."
                },
                {
                    question: "Electric vehicles produce zero emissions while driving.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 0,
                    explanation: "Electric vehicles produce no tailpipe emissions while driving. However, the environmental impact depends on how the electricity used to charge them is generated."
                },
                {
                    question: "Leaving a leaky tap unrepaired can waste hundreds of liters of water per year.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 0,
                    explanation: "A single dripping tap can waste up to 20 liters of water per day, which adds up to thousands of liters per year. Fixing leaks is an easy way to conserve water."
                },
                {
                    question: "Recycling is pointless because all waste ends up in landfills anyway.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 1,
                    explanation: "Properly recycled materials are processed into new products, reducing the need for raw materials and decreasing waste sent to landfills. Recycling is an essential part of waste management."
                },
                {
                    question: "Composting at home can attract dangerous pests and should be avoided.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 1,
                    explanation: "Properly maintained compost piles rarely attract dangerous pests. Most home composting systems are designed to be pest-resistant and can be managed safely."
                },
                {
                    question: "Buying second-hand items helps reduce environmental impact.",
                    options: [
                        "True",
                        "False"
                    ],
                    correctAnswer: 0,
                    explanation: "Buying second-hand extends the life of products, reduces demand for new items, and decreases the environmental impact of manufacturing and transportation."
                }
            ]
        }
    },
    difficulties: {
        easy: {
            timeLimit: 30,
            pointsMultiplier: 1
        },
        medium: {
            timeLimit: 20,
            pointsMultiplier: 1.5
        },
        hard: {
            timeLimit: 15,
            pointsMultiplier: 2
        }
    }
};

// Global variables
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeStart = null;
let timerInterval = null;
let currentUser = null;
let selectedCategory = null;
let selectedDifficulty = null;
let answeredQuestions = new Set(); // Track which questions have been answered

// DOM elements
const questionContainer = document.querySelector('.question-container');
const optionsContainer = document.querySelector('.options-container');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const submitButton = document.querySelector('.submit-btn');
const timerDisplay = document.querySelector('.timer');
const progressBar = document.querySelector('.progress-bar');
const streakCounter = document.querySelector('.streak-counter');
const totalQuizzesCounter = document.querySelector('.total-quizzes');

// Level system configuration
const LEVELS = {
    1: {
        name: "Rookie Spark",
        requiredXP: 0
    },
    2: {
        name: "Rising Flame",
        requiredXP: 1000
    },
    3: {
        name: "Brainstormer",
        requiredXP: 2500
    }
};

// User progress state
let userXP = 0;
let currentLevel = 1;

// Start everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, starting quiz...');
    init();
});

// Main function to start everything
async function init() {
    try {
        console.log('Starting quiz...');
        
        // Initialize level system
        await initLevelSystem();
        
        // Check if user is logged in
        const userData = localStorage.getItem('user');
        if (userData) {
            currentUser = JSON.parse(userData);
            updateUserStats();
        } else {
            // Make a guest user for testing
            currentUser = {
                id: 1,
                name: 'Guest',
                streak: 0,
                total_quizzes: 0
            };
            localStorage.setItem('user', JSON.stringify(currentUser));
        }

        // Set up event listeners for existing category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const categoryId = card.dataset.category;
                selectCategory(categoryId);
            });
        });
        
        // Set up other event listeners
        setupEventListeners();
        
        console.log('Quiz started successfully!');
    } catch (error) {
        console.error('Something went wrong:', error);
    }
}

// Show categories on the page
function renderCategories(categories) {
    console.log('Showing categories:', categories);
    categoryGrid.innerHTML = categories.map(category => `
        <div class="category-card" data-id="${category.id}">
            <i class="${category.icon}"></i>
            <h3>${category.name}</h3>
        </div>
    `).join('');

    // Add click events to each category
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => selectCategory(card.dataset.id));
    });
}

// When user picks a category
async function selectCategory(categoryId) {
    console.log('User picked category:', categoryId);
    selectedCategory = categoryId;
    
    // Update UI to show selected category
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('selected');
        if (card.dataset.category === categoryId) {
            card.classList.add('selected');
        }
    });

    // Get questions from local quizData
    if (quizData.categories[categoryId]) {
        questions = quizData.categories[categoryId].questions;
        console.log('Loaded questions for category:', categoryId);
        console.log('Number of questions:', questions.length);
        console.log('Questions:', questions);
        startQuiz();
    } else {
        console.error('Category not found:', categoryId);
        // Use fallback questions if category not found
        questions = getFallbackQuestions();
        startQuiz();
    }
}

// Backup questions if server fails
function getFallbackQuestions() {
    return [
        {
            id: 1,
            question: "What is the primary cause of global warming?",
            options: [
                "Natural climate cycles",
                "Human activities and greenhouse gas emissions",
                "Solar radiation",
                "Volcanic eruptions"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "Which of these is NOT a renewable energy source?",
            options: [
                "Solar power",
                "Wind energy",
                "Coal",
                "Hydropower"
            ],
            correct: 2
        },
        {
            id: 3,
            question: "What percentage of Earth's water is freshwater?",
            options: [
                "2.5%",
                "10%",
                "25%",
                "50%"
            ],
            correct: 0
        }
    ];
}

// Start the quiz
async function startQuiz() {
    const selectedCategoryCard = document.querySelector('.category-card.selected');
    const selectedDifficultyBtn = document.querySelector('.difficulty-btn.selected');
    
    if (!selectedCategoryCard || !selectedDifficultyBtn) {
        alert('Please select both a category and difficulty level');
        return;
    }

    selectedCategory = selectedCategoryCard.dataset.category;
    selectedDifficulty = selectedDifficultyBtn.dataset.difficulty;

    try {
        // Show loading state
        const startButton = document.querySelector('.start-quiz-btn');
        startButton.disabled = true;
        startButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

        // Get questions from local quizData instead of API
        if (!quizData.categories[selectedCategory]) {
            throw new Error('Category not found');
        }

        const categoryQuestions = quizData.categories[selectedCategory].questions;
        if (!categoryQuestions || categoryQuestions.length === 0) {
            throw new Error('No questions available for this category');
        }

        // Initialize quiz state
        questions = categoryQuestions;
        currentQuestionIndex = 0;
        score = 0;
        answeredQuestions.clear(); // Reset answered questions
        timeStart = Date.now();
        
        console.log('Starting quiz with questions:', questions);
        
        // Hide selection and show quiz
        document.querySelector('.quiz-selection').style.display = 'none';
        document.querySelector('.quiz-container').style.display = 'block';
        
        // Start timer
        startTimer();
        
        // Display first question
        displayQuestion();

        // Reset button state
        startButton.disabled = false;
        startButton.innerHTML = '<i class="fas fa-play"></i> Start Quiz';
        
    } catch (error) {
        console.error('Error starting quiz:', error);
        alert('There was an error starting the quiz. Please try again.');
        startButton.disabled = false;
        startButton.innerHTML = '<i class="fas fa-play"></i> Start Quiz';
    }
}

// Show the current question
function displayQuestion() {
    console.log('Showing question', currentQuestionIndex + 1);
    const question = questions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <h2>Question ${currentQuestionIndex + 1} of ${questions.length}</h2>
        <p>${question.question}</p>
    `;
    
    optionsContainer.innerHTML = question.options.map((option, index) => `
        <div class="option" data-index="${index}">
            ${option}
        </div>
    `).join('');
    
    // Add click events to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => selectOption(option.dataset.index));
    });
    
    // Update progress bar
    updateProgress();
    
    // Update buttons
    updateNavigationButtons();
}

// When user picks an answer
function selectOption(optionIndex) {
    console.log('User picked option:', optionIndex);
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    const selectedOption = document.querySelector(`.option[data-index="${optionIndex}"]`);
    selectedOption.classList.add('selected');
    
    // Store the answer for this question
    const questionId = currentQuestionIndex;
    if (!answeredQuestions.has(questionId)) {
        // Check if answer is correct - compare the selected index with correctAnswer
        const currentQuestion = questions[currentQuestionIndex];
        console.log('Current question:', currentQuestion);
        console.log('Selected index:', optionIndex);
        console.log('Correct answer:', currentQuestion.correctAnswer);
        
        if (parseInt(optionIndex) === currentQuestion.correctAnswer) {
            score++;
            console.log('Correct answer! Score:', score);
        }
        answeredQuestions.add(questionId);
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Update navigation buttons
function updateNavigationButtons() {
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    submitButton.style.display = currentQuestionIndex === questions.length - 1 ? 'block' : 'none';
}

// Start the timer
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - timeStart) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Submit quiz to server
async function submitQuiz() {
    console.log('Submitting quiz with score:', score);
    clearInterval(timerInterval);
    const timeTaken = Math.floor((Date.now() - timeStart) / 1000);
    
    // Calculate final score with difficulty multiplier
    const difficultyMultiplier = {
        'easy': 1,
        'medium': 1.5,
        'hard': 2
    };
    const multiplier = difficultyMultiplier[selectedDifficulty] || 1;
    const finalScore = Math.round(score * multiplier);
    
    console.log('Final score calculation:', {
        rawScore: score,
        multiplier: multiplier,
        finalScore: finalScore
    });
    
    try {
        // Try to send to server
        await fetch(`${API_BASE_URL}/submit-quiz`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                category_id: selectedCategory,
                score: finalScore,
                difficulty: selectedDifficulty,
                time_taken: timeTaken
            })
        });
    } catch (error) {
        console.error('Could not send to server:', error);
        // Continue anyway
    }
    
    // Update user stats
    currentUser.total_quizzes++;
    currentUser.streak++;
    localStorage.setItem('user', JSON.stringify(currentUser));
    updateUserStats();
    
    // Show results with final score
    showResults(finalScore);
    
    // Check for level up
    handleQuizCompletion(finalScore);
}

// Show quiz results
function showResults(finalScore) {
    console.log('Showing results');
    const quizContainer = document.querySelector('.quiz-container');
    const resultsContainer = document.querySelector('.results-container');
    
    // Hide quiz container and show results
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Calculate accuracy
    const accuracy = Math.round((score / questions.length) * 100);
    
    // Update all result elements
    document.getElementById('score-value').textContent = finalScore;
    document.getElementById('total-questions').textContent = questions.length;
    document.getElementById('correct-answers').textContent = score;
    document.getElementById('accuracy').textContent = `${accuracy}%`;
    
    // Format and display time taken
    const timeTaken = Math.floor((Date.now() - timeStart) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    document.getElementById('time-taken').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Set result title based on score
    const resultTitle = document.getElementById('result-title');
    if (accuracy >= 90) {
        resultTitle.textContent = 'Eco Master';
    } else if (accuracy >= 70) {
        resultTitle.textContent = 'Eco Warrior';
    } else if (accuracy >= 50) {
        resultTitle.textContent = 'Eco Learner';
    } else {
        resultTitle.textContent = 'Eco Beginner';
    }
}

// Format time helper function
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Update user stats on screen
function updateUserStats() {
    if (currentUser) {
        streakCounter.textContent = currentUser.streak;
        totalQuizzesCounter.textContent = currentUser.total_quizzes;
    }
}

// Set up all button clicks
function setupEventListeners() {
    console.log('Setting up buttons...');
    
    // Category selection
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            // Remove selected class from all cards
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));
            // Add selected class to clicked card
            card.classList.add('selected');
        });
    });

    // Difficulty selection
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove selected class from all buttons
            document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
            // Add selected class to clicked button
            btn.classList.add('selected');
        });
    });

    // Start quiz button
    document.querySelector('.start-quiz-btn').addEventListener('click', startQuiz);

    // Option selection
    document.querySelector('.options-container').addEventListener('click', (e) => {
        const option = e.target.closest('.option');
        if (option) {
            const optionIndex = Array.from(option.parentElement.children).indexOf(option);
            selectOption(optionIndex);
        }
    });

    // Navigation buttons
    document.querySelector('.prev-btn').addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        }
    });

    // Submit button
    document.querySelector('.submit-btn').addEventListener('click', async () => {
        // Check if an option is selected
        const selectedOption = document.querySelector('.option.selected');
        if (!selectedOption) {
            alert('Please select an answer before submitting.');
            return;
        }
        
        // Disable submit button to prevent double submission
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
        
        try {
            await submitQuiz();
        } catch (error) {
            console.error('Error submitting quiz:', error);
            alert('There was an error submitting your quiz. Please try again.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit';
        }
    });

    // Try another quiz button
    document.querySelector('.try-another-btn').addEventListener('click', () => {
        // Reset quiz state
        score = 0;
        currentQuestionIndex = 0;
        selectedCategory = null;
        selectedDifficulty = null;
        
        // Reset UI
        document.querySelector('.results-container').style.display = 'none';
        document.querySelector('.quiz-container').style.display = 'none';
        document.querySelector('.quiz-selection').style.display = 'block';
        
        // Reset category and difficulty selections
        document.querySelectorAll('.category-card').forEach(card => card.classList.remove('selected'));
        document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('selected'));
    });
    
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // For testing, just make a user
            currentUser = {
                id: 1,
                name: email.split('@')[0],
                streak: 0,
                total_quizzes: 0
            };
            localStorage.setItem('user', JSON.stringify(currentUser));
            loginModal.style.display = 'none';
            updateUserStats();
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('user');
            currentUser = null;
            location.reload();
        });
    }
}

// Check and give badges
function checkBadges() {
    const newBadges = [];
    
    // Check quiz completion badges
    if (totalQuizzes >= badges.beginner.requirement && !earnedBadges.has('beginner')) {
        earnedBadges.add('beginner');
        newBadges.push(badges.beginner);
    }
    if (totalQuizzes >= badges.intermediate.requirement && !earnedBadges.has('intermediate')) {
        earnedBadges.add('intermediate');
        newBadges.push(badges.intermediate);
    }
    if (totalQuizzes >= badges.advanced.requirement && !earnedBadges.has('advanced')) {
        earnedBadges.add('advanced');
        newBadges.push(badges.advanced);
    }
    if (totalQuizzes >= badges.expert.requirement && !earnedBadges.has('expert')) {
        earnedBadges.add('expert');
        newBadges.push(badges.expert);
    }
    if (totalQuizzes >= badges.legend.requirement && !earnedBadges.has('legend')) {
        earnedBadges.add('legend');
        newBadges.push(badges.legend);
    }
    
    // Check streak badges
    if (streak >= badges.streak3.requirement && !earnedBadges.has('streak3')) {
        earnedBadges.add('streak3');
        newBadges.push(badges.streak3);
    }
    if (streak >= badges.streak7.requirement && !earnedBadges.has('streak7')) {
        earnedBadges.add('streak7');
        newBadges.push(badges.streak7);
    }
    if (streak >= badges.streak30.requirement && !earnedBadges.has('streak30')) {
        earnedBadges.add('streak30');
        newBadges.push(badges.streak30);
    }
    
    if (newBadges.length > 0) {
        showNewBadges(newBadges);
    }
    
    updateBadges();
}

// Show new badges notification
function showNewBadges(newBadges) {
    const notification = document.createElement('div');
    notification.className = 'badge-notification';
    notification.innerHTML = `
        <h3>New Badges Earned! 🎉</h3>
        ${newBadges.map(badge => `
            <div class="badge-item">
                <span class="badge-icon">${badge.icon}</span>
                <span class="badge-name">${badge.name}</span>
            </div>
        `).join('')}
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 5000);
}

// Update badges display
function updateBadges() {
    // Update current badge
    const highestBadge = Array.from(earnedBadges)
        .map(key => badges[key])
        .sort((a, b) => b.requirement - a.requirement)[0];
    
    currentBadge.textContent = highestBadge ? highestBadge.name : 'No Badge Yet';
    
    // Update badges grid
    badgesGrid.innerHTML = Object.entries(badges)
        .map(([key, badge]) => `
            <div class="badge-item ${earnedBadges.has(key) ? 'earned' : 'locked'}">
                <span class="badge-icon">${badge.icon}</span>
                <span class="badge-name">${badge.name}</span>
                <span class="badge-description">${badge.description}</span>
            </div>
        `).join('');
}

// Load saved data from browser
function loadSavedData() {
    const savedData = localStorage.getItem('quizData');
    if (savedData) {
        const data = JSON.parse(savedData);
        streak = data.streak || 0;
        totalQuizzes = data.totalQuizzes || 0;
        lastQuizDate = data.lastQuizDate;
        earnedBadges = new Set(data.earnedBadges || []);
        updateStats();
        updateBadges();
    }
}

// Save data to browser
function saveData() {
    const data = {
        streak,
        totalQuizzes,
        lastQuizDate: new Date().toISOString(),
        earnedBadges: Array.from(earnedBadges)
    };
    localStorage.setItem('quizData', JSON.stringify(data));
}

// Update stats display
function updateStats() {
    streakCounter.textContent = streak;
    totalQuizzesCounter.textContent = totalQuizzes;
}

// Check and update streak
function updateStreak() {
    const today = new Date();
    const lastQuiz = lastQuizDate ? new Date(lastQuizDate) : null;
    
    if (!lastQuiz) {
        streak = 1;
    } else {
        const daysSinceLastQuiz = Math.floor((today - lastQuiz) / (1000 * 60 * 60 * 24));
        if (daysSinceLastQuiz === 1) {
            streak++;
        } else if (daysSinceLastQuiz > 1) {
            streak = 1;
        }
    }
    
    streakCounter.classList.add('active');
    setTimeout(() => streakCounter.classList.remove('active'), 500);
    updateStats();
    checkBadges();
    saveData();
}

// Leaderboard stuff
function loadLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    renderLeaderboard(leaderboard);
}

function updateLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    
    const entry = {
        userId: currentUser.id,
        userName: currentUser.name,
        score: score,
        category: selectedCategory,
        difficulty: selectedDifficulty,
        date: new Date().toISOString()
    };
    
    leaderboard.push(entry);
    leaderboard.sort((a, b) => b.score - a.score);
    
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    renderLeaderboard(leaderboard);
}

function renderLeaderboard(leaderboard) {
    const tbody = document.querySelector('.leaderboard-table tbody');
    tbody.innerHTML = '';
    
    leaderboard.slice(0, 10).forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.userName}</td>
            <td>${entry.score}</td>
            <td>${quizData.categories[entry.category].name}</td>
            <td>${entry.difficulty}</td>
            <td>${new Date(entry.date).toLocaleDateString()}</td>
        `;
        tbody.appendChild(row);
    });
}

// Update quiz completion handler
function handleQuizCompletion(score) {
    // Add XP based on score and difficulty
    const difficultyMultiplier = {
        'easy': 1,
        'medium': 1.5,
        'hard': 2
    };
    
    const baseXP = 100;
    const multiplier = difficultyMultiplier[selectedDifficulty] || 1;
    const earnedXP = Math.round(baseXP * multiplier * (score / questions.length));
    
    addXP(earnedXP);
    
    // Rest of existing completion code...
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize level system
async function initLevelSystem() {
    try {
        // Try to fetch from API first
        const response = await fetch(`${API_BASE_URL}/user/level`);
        if (response.ok) {
            const data = await response.json();
            userXP = data.xp;
            currentLevel = data.level;
        } else {
            // Fallback to local storage if API fails
            const savedProgress = localStorage.getItem('userProgress');
            if (savedProgress) {
                const data = JSON.parse(savedProgress);
                userXP = data.xp || 0;
                currentLevel = data.level || 1;
            }
        }
    } catch (error) {
        console.error('Error fetching user level:', error);
        // Fallback to local storage
        const savedProgress = localStorage.getItem('userProgress');
        if (savedProgress) {
            const data = JSON.parse(savedProgress);
            userXP = data.xp || 0;
            currentLevel = data.level || 1;
        }
    }

    updateLevelUI();
}

// Update the level UI
function updateLevelUI() {
    // Update active level button
    document.querySelectorAll('.level-button').forEach(button => {
        const level = parseInt(button.dataset.level);
        button.classList.toggle('active', level === currentLevel);
    });

    // Calculate progress to next level
    let progress = 0;
    if (currentLevel < 3) {
        const currentLevelXP = LEVELS[currentLevel].requiredXP;
        const nextLevelXP = LEVELS[currentLevel + 1].requiredXP;
        const xpForNextLevel = nextLevelXP - currentLevelXP;
        const userProgressInLevel = userXP - currentLevelXP;
        progress = (userProgressInLevel / xpForNextLevel) * 100;
    } else {
        progress = 100; // Max level reached
    }

    // Update progress bar
    const progressBar = document.querySelector('.level-progress-bar');
    if (progressBar) {
        progressBar.style.width = `${Math.min(100, progress)}%`;
    }
}

// Add XP and check for level up
function addXP(amount) {
    userXP += amount;
    
    // Check for level up
    let newLevel = currentLevel;
    for (let level = currentLevel + 1; level <= 3; level++) {
        if (userXP >= LEVELS[level].requiredXP) {
            newLevel = level;
        }
    }

    // If leveled up
    if (newLevel > currentLevel) {
        currentLevel = newLevel;
        showLevelUpMessage(currentLevel);
    }

    // Save progress
    saveProgress();
    updateLevelUI();
}

// Save progress to localStorage and try to sync with backend
function saveProgress() {
    const progress = {
        xp: userXP,
        level: currentLevel
    };
    
    localStorage.setItem('userProgress', JSON.stringify(progress));
    
    // Try to sync with backend
    fetch(`${API_BASE_URL}/user/level`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(progress)
    }).catch(error => console.error('Error saving progress:', error));
}

// Show level up message
function showLevelUpMessage(level) {
    const levelName = LEVELS[level].name;
    const message = `🎉 Congratulations! You've reached Level ${level}: ${levelName}!`;
    
    // Create and show notification
    const notification = document.createElement('div');
    notification.className = 'level-up-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => notification.remove(), 5000);
}