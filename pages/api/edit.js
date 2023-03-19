// import nextConnect from "next-connect";
// import { connectToDatabase } from "../../lib/mongodb";
// import upload from "../../middlewares/multer";

// const handler = nextConnect();

// // connect to MongoDB
// handler.use(connectToDatabase);

// // Multer middleware for handling the file upload
// handler.use(upload.single("image"));

// // handle POST requests
// handler.post(async (req, res) => {
//   try {
//     const image = req.file.buffer;
//     const doc = await req.db.collection("images").insertOne({ image });
//     res.status(201).json({ success: true, id: doc.insertedId });
//   } catch (err) {
//     res.status(500).json({ success: false });
//   }
// });

// export default handler;
