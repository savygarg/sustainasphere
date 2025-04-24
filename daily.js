// Daily Tips Data
const dailyTips = {
    'eco-habits': [
        {
            tip: "Carry a Reusable Bottle & Bag - Always have a refillable water bottle and a cloth bag with you to reduce plastic waste.",
            category: "Eco-Habits",
            learnMoreLink: "https://www.earthday.org/plastic-pollution-facts/"
        },
        {
            tip: "Practice Meatless Mondays (or more!) - Opt for plant-based meals to lower your carbon footprint.",
            category: "Eco-Habits",
            learnMoreLink: "https://www.meatlessmonday.com/about-us/why-meatless/"
        },
        {
            tip: "Unplug Devices When Not in Use - Even in standby mode, electronics consume energy—unplug and save.",
            category: "Eco-Habits",
            learnMoreLink: "https://www.energy.gov/energysaver/articles/phantom-loads"
        },
        {
            tip: "Limit Water Usage - Turn off the tap while brushing, fix leaks, and opt for quick showers.",
            category: "Eco-Habits",
            learnMoreLink: "https://www.epa.gov/watersense/shower-better"
        },
        {
            tip: "Segregate and Compost Waste - Separate recyclables and start composting food scraps at home.",
            category: "Eco-Habits",
            learnMoreLink: "https://www.epa.gov/recycle/composting-home"
        },
        {
            tip: "Use Natural Light - Make the most of daylight to reduce electricity use during the day.",
            category: "Eco-Habits",
            learnMoreLink: "https://www.energy.gov/energysaver/lighting-choices-save-you-money"
        },
        {
            tip: "Choose Public Transport, Carpool, or Walk - Cut emissions and fuel usage by reducing car rides.",
            category: "Eco-Habits",
            learnMoreLink: "https://www.epa.gov/transportation-air-pollution-and-climate-change"
        },
        {
            tip: "Say No to Single-Use Plastics - Refuse plastic straws, cutlery, and over-packaged products.",
            category: "Eco-Habits",
            learnMoreLink: "https://www.plasticfreejuly.org/get-involved/what-you-can-do/"
        },
        {
            tip: "Support Local & Seasonal Produce - Shop from local farmers and choose what's in season to cut transport emissions.",
            category: "Eco-Habits",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/local-seasonal-food/"
        },
        {
            tip: "Educate & Influence - Share eco-friendly knowledge with friends, family, or on social media to inspire change.",
            category: "Eco-Habits",
            learnMoreLink: "https://www.un.org/en/actnow/"
        }
    ],
    'zero-waste': [
        {
            tip: "Refuse What You Don't Need - Say no to freebies, junk mail, and unnecessary packaging—it all adds up.",
            category: "Zero-Waste Living",
            learnMoreLink: "https://zerowastehome.com/2011/04/21/refuse/"
        },
        {
            tip: "Bring Your Own Reusables - Carry your own tote, jar, straw, utensils, and takeaway containers.",
            category: "Zero-Waste Living",
            learnMoreLink: "https://www.plasticfreejuly.org/get-involved/what-you-can-do/reusable-items/"
        },
        {
            tip: "Buy in Bulk - Purchase grains, spices, and cleaning supplies from bulk stores using your own containers.",
            category: "Zero-Waste Living",
            learnMoreLink: "https://zerowastehome.com/2010/03/01/bulk/"
        },
        {
            tip: "Use Bar Soap & Shampoo Bars - Switch from plastic bottles to package-free hygiene products.",
            category: "Zero-Waste Living",
            learnMoreLink: "https://www.earthhero.com/blog/why-shampoo-bars-are-better/"
        },
        {
            tip: "Compost Organic Waste - Turn food scraps, peels, and garden waste into nutrient-rich compost.",
            category: "Zero-Waste Living",
            learnMoreLink: "https://www.epa.gov/recycle/composting-home"
        },
        {
            tip: "DIY Your Cleaning Products - Mix vinegar, baking soda, and lemon to make natural, waste-free cleaners.",
            category: "Zero-Waste Living",
            learnMoreLink: "https://www.epa.gov/saferchoice/do-it-yourself-cleaning-products"
        },
        {
            tip: "Repurpose & Upcycle - Get creative with old clothes, jars, or containers instead of tossing them out.",
            category: "Zero-Waste Living",
            learnMoreLink: "https://www.loveyourclothes.org.uk/"
        },
        {
            tip: "Choose Secondhand First - Shop from thrift stores, swaps, or online marketplaces before buying new.",
            category: "Zero-Waste Living",
            learnMoreLink: "https://www.thredup.com/impact/"
        },
        {
            tip: "Go Digital When Possible - Avoid printing, opt for e-tickets, and switch to paperless billing.",
            category: "Zero-Waste Living",
            learnMoreLink: "https://www.epa.gov/wastes/paper-recycling"
        },
        {
            tip: "Track Your Trash - Keep a small 'waste audit' journal to understand what you throw away and how to reduce it.",
            category: "Zero-Waste Living",
            learnMoreLink: "https://zerowastehome.com/2011/04/21/refuse/"
        }
    ],
    'fashion': [
        {
            tip: "Wear What You Already Own - The most sustainable outfit is the one in your closet—re-style, re-wear, repeat.",
            category: "Sustainable Fashion",
            learnMoreLink: "https://www.loveyourclothes.org.uk/"
        },
        {
            tip: "Choose Quality Over Quantity - Invest in well-made, timeless pieces that last longer and resist trends.",
            category: "Sustainable Fashion",
            learnMoreLink: "https://www.sustainablefashion.earth/"
        },
        {
            tip: "Support Ethical Brands - Shop from brands that are transparent about fair wages, eco-materials, and cruelty-free processes.",
            category: "Sustainable Fashion",
            learnMoreLink: "https://goodonyou.eco/"
        },
        {
            tip: "Wash Clothes Less Frequently - Air out clothes and spot-clean instead of tossing them in the wash after every wear.",
            category: "Sustainable Fashion",
            learnMoreLink: "https://www.loveyourclothes.org.uk/care"
        },
        {
            tip: "Use Cold Water & Eco Detergents - Save energy and reduce microplastic shedding with gentler washing practices.",
            category: "Sustainable Fashion",
            learnMoreLink: "https://www.epa.gov/saferchoice"
        },
        {
            tip: "Air Dry Instead of Using a Dryer - Extend garment life and cut down electricity use by hanging clothes to dry.",
            category: "Sustainable Fashion",
            learnMoreLink: "https://www.energy.gov/energysaver/laundry"
        },
        {
            tip: "DIY Repairs & Alterations - Sew on buttons, patch holes, or crop old jeans to give them a fresh life.",
            category: "Sustainable Fashion",
            learnMoreLink: "https://www.loveyourclothes.org.uk/repair"
        },
        {
            tip: "Host or Join a Clothing Swap - Trade pieces with friends instead of buying new.",
            category: "Sustainable Fashion",
            learnMoreLink: "https://www.swishing.com/"
        },
        {
            tip: "Thrift Before You Buy New - Explore thrift stores, online vintage shops, or local secondhand markets.",
            category: "Sustainable Fashion",
            learnMoreLink: "https://www.thredup.com/impact/"
        },
        {
            tip: "Donate or Recycle Responsibly - Don't dump clothes—find donation centers, textile recycling bins, or upcycling projects.",
            category: "Sustainable Fashion",
            learnMoreLink: "https://www.epa.gov/textiles"
        }
    ],
    'tech': [
        {
            tip: "Switch to Energy-Efficient Devices - Choose appliances and electronics with a high Energy Star rating.",
            category: "Green Tech",
            learnMoreLink: "https://www.energystar.gov/products"
        },
        {
            tip: "Use Smart Power Strips - These cut off electricity to devices when not in use, reducing phantom energy drain.",
            category: "Green Tech",
            learnMoreLink: "https://www.energy.gov/energysaver/articles/phantom-loads"
        },
        {
            tip: "Enable Power-Saving Mode - Turn on energy-saving settings on your phone, laptop, and other gadgets.",
            category: "Green Tech",
            learnMoreLink: "https://www.energy.gov/energysaver/energy-efficient-computer-use"
        },
        {
            tip: "Charge with Solar Power - Use portable solar chargers for your phone or other small devices.",
            category: "Green Tech",
            learnMoreLink: "https://www.energy.gov/eere/solar/solar-energy-technologies-office"
        },
        {
            tip: "Recycle E-Waste Properly - Drop off old gadgets at certified e-waste collection points instead of tossing them in the trash.",
            category: "Green Tech",
            learnMoreLink: "https://www.epa.gov/international-cooperation/promoting-sustainable-materials-management-e-waste"
        },
        {
            tip: "Limit Cloud Storage Use - Cloud services consume a lot of energy—clean up files and store locally when possible.",
            category: "Green Tech",
            learnMoreLink: "https://www.energy.gov/energysaver/energy-efficient-computer-use"
        },
        {
            tip: "Go Paperless with Digital Tools - Use apps for notes, billing, and productivity instead of printing paper.",
            category: "Green Tech",
            learnMoreLink: "https://www.epa.gov/wastes/paper-recycling"
        },
        {
            tip: "Choose Green Browsers & Search Engines - Use options like Ecosia, which plants trees with ad revenue from your searches.",
            category: "Green Tech",
            learnMoreLink: "https://www.ecosia.org/"
        },
        {
            tip: "Upgrade Mindfully - Only upgrade tech when necessary, and consider refurbished models to reduce e-waste.",
            category: "Green Tech",
            learnMoreLink: "https://www.epa.gov/international-cooperation/promoting-sustainable-materials-management-e-waste"
        },
        {
            tip: "Advocate for Greener Tech Policies - Stay informed and support companies or legislation that promote renewable energy and ethical tech production.",
            category: "Green Tech",
            learnMoreLink: "https://www.epa.gov/green-power-markets"
        }
    ],
    'plant-based': [
        {
            tip: "Start with One Plant-Based Meal a Day - Ease in by making breakfast or lunch fully plant-based—smoothie bowls, oats, or veggie wraps are great starters!",
            category: "Plant-Based Living",
            learnMoreLink: "https://www.meatlessmonday.com/about-us/why-meatless/"
        },
        {
            tip: "Meal Prep with Plants - Prep grains, beans, and roasted veggies in batches to make healthy eating effortless.",
            category: "Plant-Based Living",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/local-seasonal-food/"
        },
        {
            tip: "Explore Meat Alternatives - Try tofu, tempeh, lentils, or jackfruit in place of meat in your favorite recipes.",
            category: "Plant-Based Living",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/meat-alternatives/"
        },
        {
            tip: "Read Food Labels Carefully - Look out for sneaky non-vegan ingredients like whey, gelatin, or casein.",
            category: "Plant-Based Living",
            learnMoreLink: "https://www.fda.gov/food/nutrition-facts-label"
        },
        {
            tip: "Get Creative with Veggies - Spiralize zucchini, roast chickpeas, or make cauliflower wings—there's no limit to the fun.",
            category: "Plant-Based Living",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/vegetables/"
        },
        {
            tip: "Snack Smart - Choose whole-food snacks like fruit, trail mix, or homemade hummus with veggies.",
            category: "Plant-Based Living",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/healthy-snacks/"
        },
        {
            tip: "Keep Plant Milks Handy - Almond, oat, soy, or coconut milk can easily replace dairy in coffee, cereal, and baking.",
            category: "Plant-Based Living",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/dairy-alternatives/"
        },
        {
            tip: "Eat the Rainbow - Add colorful fruits and veggies to your plate to boost your nutrition and visual appeal.",
            category: "Plant-Based Living",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/vegetables/"
        },
        {
            tip: "Support Local Farmers - Shop at farmer's markets or subscribe to a local veggie box to stay seasonal and fresh.",
            category: "Plant-Based Living",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/local-seasonal-food/"
        },
        {
            tip: "Don't Stress Perfection - It's a journey—every plant-based choice counts, even if you're not 100% vegan.",
            category: "Plant-Based Living",
            learnMoreLink: "https://www.meatlessmonday.com/about-us/why-meatless/"
        }
    ],
    'seasonal': [
        {
            tip: "Eat Seasonally - Choose fruits and veggies that are in season to support local farmers and reduce food miles.",
            category: "Seasonal Tips",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/local-seasonal-food/"
        },
        {
            tip: "Switch Up Skincare Naturally - Lighter routines in summer, richer hydration in winter—use natural oils and ingredients like aloe, rose water, or shea butter.",
            category: "Seasonal Tips",
            learnMoreLink: "https://www.epa.gov/saferchoice"
        },
        {
            tip: "Declutter with the Season - Use spring to freshen up your space, summer for lightening your load, fall for cozy resets, and winter for simplifying.",
            category: "Seasonal Tips",
            learnMoreLink: "https://www.epa.gov/wastes/paper-recycling"
        },
        {
            tip: "Refresh Wardrobes Mindfully - Store and rotate clothes with the seasons—donate or upcycle instead of tossing.",
            category: "Seasonal Tips",
            learnMoreLink: "https://www.loveyourclothes.org.uk/"
        },
        {
            tip: "Grow Seasonal Plants or Herbs - Basil in summer, mint in spring, rosemary and thyme in fall—start small on your windowsill or balcony.",
            category: "Seasonal Tips",
            learnMoreLink: "https://www.almanac.com/content/kitchen-herb-garden-growing-guide"
        },
        {
            tip: "Celebrate Eco-Friendly Seasonal Decor - Use natural elements—pinecones, dried leaves, flowers, or citrus garlands—for sustainable, compostable decor.",
            category: "Seasonal Tips",
            learnMoreLink: "https://www.epa.gov/wastes/paper-recycling"
        },
        {
            tip: "Adjust Energy Use - Open windows in spring, insulate in winter, rely on fans over AC in summer—small shifts, big savings.",
            category: "Seasonal Tips",
            learnMoreLink: "https://www.energy.gov/energysaver/energy-efficient-home-design"
        },
        {
            tip: "Get Outdoors Mindfully - Hike in the fall, stargaze in winter, picnic in spring, swim in summer—connect with nature all year long.",
            category: "Seasonal Tips",
            learnMoreLink: "https://www.nps.gov/index.htm"
        },
        {
            tip: "DIY Seasonal Self-Care - Herbal teas in winter, cooling rosewater sprays in summer, exfoliating scrubs in spring, grounding oils in fall.",
            category: "Seasonal Tips",
            learnMoreLink: "https://www.epa.gov/saferchoice"
        },
        {
            tip: "Honor Seasonal Transitions - Take a moment to reflect and reset with each equinox or solstice—journal, meditate, or set new intentions.",
            category: "Seasonal Tips",
            learnMoreLink: "https://www.epa.gov/education"
        }
    ],
    'diy': [
        {
            tip: "Repurpose Old Clothes - Turn worn-out jeans into tote bags, scrunchies, or patchwork pillows.",
            category: "DIY & Upcycling",
            learnMoreLink: "https://www.loveyourclothes.org.uk/repair"
        },
        {
            tip: "Save Jars & Bottles - Use glass jars as organizers, vases, planters, or DIY lanterns.",
            category: "DIY & Upcycling",
            learnMoreLink: "https://zerowastehome.com/2010/03/01/jars/"
        },
        {
            tip: "Transform Cardboard Boxes - Make drawer organizers, storage bins, or mini shelves with a bit of tape and paint.",
            category: "DIY & Upcycling",
            learnMoreLink: "https://www.epa.gov/wastes/paper-recycling"
        },
        {
            tip: "Create Art from Waste - Use magazine clippings, bottle caps, or broken jewelry for collages and decor.",
            category: "DIY & Upcycling",
            learnMoreLink: "https://www.epa.gov/wastes/paper-recycling"
        },
        {
            tip: "DIY Natural Cleaners - Mix vinegar, baking soda, and lemon to create low-waste, chemical-free solutions.",
            category: "DIY & Upcycling",
            learnMoreLink: "https://www.epa.gov/saferchoice/do-it-yourself-cleaning-products"
        },
        {
            tip: "Upcycle Tin Cans - Decorate and reuse them as pen holders, herb planters, or candle holders.",
            category: "DIY & Upcycling",
            learnMoreLink: "https://www.epa.gov/wastes/paper-recycling"
        },
        {
            tip: "Give Furniture a Second Life - Sand, paint, or decoupage old tables and chairs instead of tossing them out.",
            category: "DIY & Upcycling",
            learnMoreLink: "https://www.loveyourclothes.org.uk/repair"
        },
        {
            tip: "Make Reusable Cloth Wipes - Cut up old t-shirts or towels to replace paper towels and tissues.",
            category: "DIY & Upcycling",
            learnMoreLink: "https://zerowastehome.com/2010/03/01/cloth-wipes/"
        },
        {
            tip: "Turn Books into Decor - Stack or fold old books into art pieces, shelves, or journal covers.",
            category: "DIY & Upcycling",
            learnMoreLink: "https://www.epa.gov/wastes/paper-recycling"
        },
        {
            tip: "Host a DIY Swap Party - Trade leftover craft supplies or DIY projects with friends for new inspiration.",
            category: "DIY & Upcycling",
            learnMoreLink: "https://www.swishing.com/"
        }
    ],
    'consumerism': [
        {
            tip: "Ask 'Do I really need this?' - Pause before purchasing and consider the item's purpose, lifespan, and impact.",
            category: "Mindful Consumerism",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/sustainable-consumption/"
        },
        {
            tip: "Sleep on Big Purchases - Wait 24–48 hours before buying non-essential items to avoid impulse spending.",
            category: "Mindful Consumerism",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/sustainable-consumption/"
        },
        {
            tip: "Support Ethical Brands - Choose businesses that prioritize fair trade, sustainability, and transparency.",
            category: "Mindful Consumerism",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/sustainable-consumption/"
        },
        {
            tip: "Buy Less, Choose Well - Invest in fewer, high-quality items rather than constantly chasing trends or deals.",
            category: "Mindful Consumerism",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/sustainable-consumption/"
        },
        {
            tip: "Embrace Minimalism - Keep your space clutter-free and intentional—quality over quantity.",
            category: "Mindful Consumerism",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/sustainable-consumption/"
        },
        {
            tip: "Research Before Buying - Look into how and where products are made, and what materials are used.",
            category: "Mindful Consumerism",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/sustainable-consumption/"
        },
        {
            tip: "Borrow or Rent Instead of Buying - From books to tools to outfits—consider borrowing instead of owning.",
            category: "Mindful Consumerism",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/sustainable-consumption/"
        },
        {
            tip: "Avoid Fast Fashion and Fads - Trends fade, but timeless and durable pieces stick around.",
            category: "Mindful Consumerism",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/sustainable-consumption/"
        },
        {
            tip: "Use What You Have First - Finish the shampoo, wear the old shoes, and eat what's in the fridge before getting more.",
            category: "Mindful Consumerism",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/sustainable-consumption/"
        },
        {
            tip: "Mind Your Digital Consumption Too - Unsubscribe from retail emails, reduce social media-triggered shopping, and be intentional with screen time.",
            category: "Mindful Consumerism",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/sustainable-consumption/"
        }
    ],
    'nature': [
        {
            tip: "Trees 'Talk' to Each Other - Through underground fungal networks (aka the 'Wood Wide Web'), trees share nutrients and warn each other of danger.",
            category: "Nature Facts",
            learnMoreLink: "https://www.nature.com/articles/s41598-019-45002-8"
        },
        {
            tip: "A Single Beehive Can Pollinate 50 Million Flowers Daily - Bees are tiny superheroes when it comes to sustaining our food system.",
            category: "Nature Facts",
            learnMoreLink: "https://www.fao.org/pollination/en/"
        },
        {
            tip: "Oceans Absorb About 30% of CO₂ Emissions - The ocean is one of Earth's largest carbon sinks, playing a critical role in climate regulation.",
            category: "Nature Facts",
            learnMoreLink: "https://www.noaa.gov/education/resource-collections/ocean-coasts/ocean-acidification"
        },
        {
            tip: "Moss Can Survive in Space - Some species of moss have been shown to survive the harsh conditions of space—how cool is that?",
            category: "Nature Facts",
            learnMoreLink: "https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=7895"
        },
        {
            tip: "Sloths Only Poop Once a Week - It's risky business—they come down from the trees to do it, exposing them to predators.",
            category: "Nature Facts",
            learnMoreLink: "https://www.nationalgeographic.com/animals/mammals/facts/sloths"
        },
        {
            tip: "Banana Plants Are Actually Herbs - Technically, they're giant herbs, and bananas are berries. Yep, nature's full of surprises.",
            category: "Nature Facts",
            learnMoreLink: "https://www.britannica.com/plant/banana-plant"
        },
        {
            tip: "Coral Reefs Support 25% of Marine Life - Though they cover less than 1% of the ocean floor, coral reefs are biodiversity powerhouses.",
            category: "Nature Facts",
            learnMoreLink: "https://www.noaa.gov/education/resource-collections/marine-life/coral-reef-ecosystems"
        },
        {
            tip: "A Drop of Water Can House Millions of Microorganisms - Ponds and puddles are microcosms of life, teeming with unseen biodiversity.",
            category: "Nature Facts",
            learnMoreLink: "https://www.epa.gov/water-research/microbial-water-quality"
        },
        {
            tip: "Earthworms Are Soil Engineers - They improve soil structure and fertility by mixing organic material deep into the ground.",
            category: "Nature Facts",
            learnMoreLink: "https://www.nrcs.usda.gov/wps/portal/nrcs/detail/soils/health/biology/"
        },
        {
            tip: "A Full Grown Oak Tree Can Produce 10 Million Acorns Over Its Lifetime - Imagine how many squirrels that could feed!",
            category: "Nature Facts",
            learnMoreLink: "https://www.fs.usda.gov/detail/r8/plants-animals/?cid=fsbdev3_037276"
        }
    ],
    'community': [
        {
            tip: "Start Local - Get involved with neighborhood clean-ups, community gardens, or local events.",
            category: "Community & Action",
            learnMoreLink: "https://www.epa.gov/community-grants"
        },
        {
            tip: "Support Small & Local Businesses - Your money has power—use it to uplift ethical, local entrepreneurs.",
            category: "Community & Action",
            learnMoreLink: "https://www.sustainabletable.org/eat-sustainable/local-seasonal-food/"
        },
        {
            tip: "Volunteer Your Time or Skills - Even an hour a week can make a big difference—teach, mentor, or help organize.",
            category: "Community & Action",
            learnMoreLink: "https://www.volunteer.gov/"
        },
        {
            tip: "Share What You Know - Post about causes you care about, host discussions, or simply talk to friends and family.",
            category: "Community & Action",
            learnMoreLink: "https://www.epa.gov/education"
        },
        {
            tip: "Sign Petitions & Write to Leaders - Add your voice to movements that matter—change often starts with collective action.",
            category: "Community & Action",
            learnMoreLink: "https://www.usa.gov/elected-officials"
        },
        {
            tip: "Practice Active Listening - Understand diverse perspectives within your community to build trust and empathy.",
            category: "Community & Action",
            learnMoreLink: "https://www.epa.gov/community-grants"
        },
        {
            tip: "Be a Conscious Voter - Research candidates, show up for local elections, and encourage others to do the same.",
            category: "Community & Action",
            learnMoreLink: "https://www.usa.gov/voting"
        },
        {
            tip: "Create Inclusive Spaces - Foster environments—online and offline—where everyone feels seen and heard.",
            category: "Community & Action",
            learnMoreLink: "https://www.epa.gov/community-grants"
        },
        {
            tip: "Join or Form a Group - Whether it's environmental clubs, advocacy groups, or book circles—community thrives in connection.",
            category: "Community & Action",
            learnMoreLink: "https://www.epa.gov/community-grants"
        },
        {
            tip: "Celebrate Wins Together - Acknowledge progress, no matter how small. Collective joy fuels long-term action.",
            category: "Community & Action",
            learnMoreLink: "https://www.epa.gov/community-grants"
        }
    ]
};

let currentCategory = 'eco-habits';
let currentTipIndex = 0;

// DOM Elements
const categoryBadge = document.getElementById('current-category');
const currentTipElement = document.getElementById('current-tip');
const learnMoreLink = document.getElementById('learn-more');
const prevTipBtn = document.getElementById('prev-tip');
const nextTipBtn = document.getElementById('next-tip');
const dateElement = document.getElementById('current-date');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set current date
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Display initial tip
    displayTip();

    // Add event listeners
    setupEventListeners();
});

function displayTip() {
    const tips = dailyTips[currentCategory];
    const currentTip = tips[currentTipIndex];

    categoryBadge.textContent = currentTip.category;
    currentTipElement.textContent = currentTip.tip;
    learnMoreLink.href = currentTip.learnMoreLink;

    // Update button states
    prevTipBtn.disabled = currentTipIndex === 0;
    nextTipBtn.disabled = currentTipIndex === tips.length - 1;
}

function setupEventListeners() {
    // Category card selection
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            currentCategory = card.dataset.category;
            currentTipIndex = 0;
            displayTip();
        });
    });

    // Navigation buttons
    prevTipBtn.addEventListener('click', () => {
        if (currentTipIndex > 0) {
            currentTipIndex--;
            displayTip();
        }
    });

    nextTipBtn.addEventListener('click', () => {
        const tips = dailyTips[currentCategory];
        if (currentTipIndex < tips.length - 1) {
            currentTipIndex++;
            displayTip();
        }
    });

    // Save tip button
    document.getElementById('save-tip').addEventListener('click', saveTip);

    // Challenge friend button
    document.getElementById('challenge-friend').addEventListener('click', challengeFriend);

    // Reaction buttons
    document.querySelectorAll('.reaction').forEach(button => {
        button.addEventListener('click', () => handleReaction(button.dataset.reaction));
    });
}

function saveTip() {
    const tips = dailyTips[currentCategory];
    const currentTip = tips[currentTipIndex];
    
    let savedTips = JSON.parse(localStorage.getItem('savedTips') || '[]');
    if (!savedTips.some(tip => tip.tip === currentTip.tip)) {
        savedTips.push(currentTip);
        localStorage.setItem('savedTips', JSON.stringify(savedTips));
        updateSavedTipsList();
        alert('Tip saved successfully!');
    } else {
        alert('This tip is already saved!');
    }
}

function updateSavedTipsList() {
    const savedTips = JSON.parse(localStorage.getItem('savedTips') || '[]');
    const savedTipsList = document.getElementById('saved-tips-list');
    const savedCount = document.getElementById('saved-count');

    savedCount.textContent = savedTips.length;
    savedTipsList.innerHTML = savedTips.map(tip => `
        <div class="saved-tip">
            <p>${tip.tip}</p>
            <span class="category-badge">${tip.category}</span>
        </div>
    `).join('');
}

function challengeFriend() {
    const tips = dailyTips[currentCategory];
    const currentTip = tips[currentTipIndex];
    const shareText = `Hey! Check out this sustainability tip: "${currentTip.tip}" #SustainaSphere`;
    
    // Open share dialog if Web Share API is available
    if (navigator.share) {
        navigator.share({
            title: 'Daily Sustainability Tip',
            text: shareText,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(shareText)
            .then(() => alert('Challenge text copied to clipboard!'))
            .catch(console.error);
    }
}

function handleReaction(reaction) {
    const button = document.querySelector(`[data-reaction="${reaction}"]`);
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 1000);
    
    // You could add analytics or save user reactions here
}

// Initialize the saved tips list
updateSavedTipsList(); 