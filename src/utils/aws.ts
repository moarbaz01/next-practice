// import aws from "aws-sdk";
// import multer from "multer";
// import multerS3 from "multer-s3";

// // Configuration
// aws.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });

// // New Instance of aws s3
// const s3 = new aws.S3();

// // Upload function
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.AWS_BUCKET_NAME,
//     acl: "public-read",
//     metadata: (req, file, cb) => {
//       cb(null, {
//         fieldName: file.fieldname,
//       });
//     },
//     key: (req, file, cb) => {
//       cb(null, Date.now().toString() + "-" + file.originalname);
//     },
//   }),
// });
