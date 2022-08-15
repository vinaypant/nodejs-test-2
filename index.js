//import mongoose from 'mongoose'
const mongoose = require('mongoose')

//School : Database

const createConnection = async () => {
    try {
        //await mongoose.connect("mongodb://0.0.0.0:27017/School")
        //await mongoose.connect("mongodb://0.0.0.0:27017/School"
        //await mongoose.connect("mongodb://user:pass123@172.27.0.2:27017/School"
        await mongoose.connect("mongodb://user:pass123@mongo:27017/School"
        //will create new if not exists otherwise overrides
            , { useNewUrlParser: true,useUnifiedTopology: true })
                //,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
                .then(() => {
                    console.log("successful connection")
                })
                .catch((err) => {
                    console.log(`Error: ${err}`)
                })
    }
    catch (err) {
        console.log(`Connection error : ${err}`)
    }
}

const createModel = () => {
    const courseSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        totalEnrolled: Number,
        active: Boolean,
        startDate: {
            type: Date,
            default: Date.now
        }

    })

    courseSchema.index({ name: 1 });

    //collection name should be in pascal notation .
    //behind the scene in mongodb it would convert into plurals.
    const courseCollection = new mongoose.model("Course", courseSchema);

    return courseCollection;
}


//create document or insert

const createDocument = async () => {
    try {
        console.log("=========Connection making starts============");
        await createConnection();
        console.log("=========Connection making ends============");

        console.log("=========Model making starts============");
        let courseCollection = createModel();
        console.log("=========Model making stops============");

        console.log("=========Doc save starts============");
        const courseDoc = new courseCollection({
            name: "C#",
            totalEnrolled: 100,
            active: true

        })

        let result = await courseDoc.save();
        console.log(`=========Doc save ends: ${result}=======`);



    }
    catch (err) {
        console.log(`Doc. create error : ${err}`)
    }

}

createDocument();