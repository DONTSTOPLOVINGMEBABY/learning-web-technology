const dotenv = require("dotenv")
dotenv.config()

const Category = require("./models/category")
const Drums = require("./models/drums")
const Guitars = require("./models/guitars")
const Tamberines = require("./models/tamberines")

const categories = []
const drums = []
const guitars = []
const tamberines = []

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

mongoDB = process.env.connection_string


main().catch( (err) => console.log(err) )



async function main () {
    console.log("About to connect")
    await mongoose.connect(mongoDB)
    console.log("Should be connected??")
    await createCategories()
    await createGuitars()
    await createDrums()
    await createTamberines()
}



async function createCategory (name) {
    const category = new Category({
        name : name, 
    })
    await category.save()
    categories.push(category)
    console.log(`addedd category : ${name}`)
}

async function createDrum(name, description, price, numInStock, category){
    setDrum = { name: name, description : description, price: price, numberInStock : numInStock, type: "Drums" }

    if (category) { setDrum.category = category }

    const drum = new Drums(setDrum)
    drum.save()
    drums.push(drum)
    console.log(`Added drum ${name}`)
} 

async function createGuitar (name, description, price, numInStock, category, isElectric, isAcoustic) {
    const setGuitar = { name : name, description: description, price: price, numberInStock: numInStock, isElectric: isElectric, isAcoustic : isAcoustic, type : "Guitars"}
    if (category) {setGuitar.category = category}

    const guitar = new Guitars(setGuitar)
    guitar.save()
    guitars.push(guitar)
    console.log(`Added guitar ${name}`)
}

async function createTamberine(name, description, price, numInStock, category, isPadded) {
    const setTamberine = { name : name, description: description, price: price, numberInStock: numInStock, isPadded : isPadded, type : "Tamberines"}
    if (category) {setTamberine.category = category}

    const tamberine = new Tamberines(setTamberine)
    tamberine.save()
    tamberines.push(tamberine)
    console.log(`Added tamberine ${name}`)
}

async function createCategories() {
    console.log("Adding categories")
    await Promise.all([
        createCategory("Expensive"), 
        createCategory("Mid-Price"), 
        createCategory("Inexpensive"),
        createCategory("Loud"), 
        createCategory("Quiet"),  
    ])
}

async function createGuitars (){
    console.log("Adding Guitars")
    Promise.all([
        createGuitar("Fender American Professional II Stratocaster Rosewood Fingerboard Electric Guitar", "Gloss urethane-finished solid alder body, 25.5 inch scale, satin-finish maple neck, 22-fret, rolled-edge rosewood fingerboard, Fender V-Mod II single-coil pickups, 5-way switch, treble bleed, push/push tone knob actives neck pickup", 1699.99, 12, categories[0], true, false), 
        createGuitar("Fender Player Stratocaster HSS Maple Fingerboard Electric Guitar 3-Color Sunburst", "Gloss-finish solid alder body, 25.5 inch scale bolt-on maple neck with 22-fret, 9.5 inch -radius maple fingerboard", 899.99, 5, categories[1], true, false), 
        createGuitar("Fender CD-60SCE Dreadnought Acoustic-Electric Guitar Natural", "Single-cutaway dreadnought body style", 329.99, 23, categories[2], false, true), 
        createGuitar("Fender FA-125CE Dreadnought Acoustic-Electric Guitar Sunburst", "All-laminate construction, Modern 3+3 headstock, Viking bridge", 229.99, 1, categories[2], false, true)
    ])
}

async function createDrums(){
    console.log("Adding Drums")
    Promise.all([
        createDrum("Roland TD-27KV2 V-Drums Kit", "Updated TD-27 sound module with enhanced features and advanced Prismatic Sound Modeling derived from the flagship TD-50X. 75 ready-to-play preset kits, including 10 all-new kits and a variety of samples. 14 digital snare, 14 digital hi-hat, and 18 ride cymbal with high-resolution, multi-sensor triggering for unparalleled dynamics and accurate positional detection", 3499.99, 4, categories[0]), 
        createDrum("Simmons SD1250 Electronic Drum Kit With Mesh Pads", "12 mesh snare, two 8 and two 10 dual-zone mesh toms 6 mesh bass drum with non-slip stand Two 12 dual-zone crash pads", 1099.99, 2, categories[3]),
        createDrum("Sound Percussion Labs Unity II 5-Piece Complete Drum Set With Hardware", "Complete all-in-one drum kit, including snare, toms, kick, high-hat, cymbals, all stands, drum pedal and padded drum throne 22x16 bass, 10x8 and 12x9 toms, 16x14 floor tom and 14x5.5 snare drum 6-ply poplar shells for smooth, consistent tone", 499.99, 4, categories[3]), 
        createDrum("Roland SPD-SX-SE Special-Edition Sampling Pad", "Unique sampling-pad concept—the only instrument of its kind in the world Red metallic finish with red-accented function knobs 16GB internal memory, enabling approximately 3,000 minutes (50 hours) of sampling (mono) without requiring external memory", 999.99, 3, categories[4])
    ])
}

async function createTamberines(){
    console.log("Adding tamberines")
    Promise.all([
        createTamberine("Rhythm Band Plastic Rim Tambourine 6", "Totally awesome tamberine, you'll love to bang it", 12.99, 200, categories[2], true), 
        createTamberine("Remo Radiant Series Tambourine 8 In 8 Jingles", "Groovy Tamb", 43.99, 12, categories[0], true), 
        createTamberine("Rhythm Tech Solo Tambourine Black", "Funky Tamb with a great grip", 34.99, 12, categories[1], false), 
    ])
}