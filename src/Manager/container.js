import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'temporallyaccproject@gmail.com', // generated ethereal user
      pass: 'mcyjaxrsypaweupm', // generated ethereal password
    },
  });

  transporter.verify().then(() =>{
    console.log('Ready to send messages')
  })
export default  transporter