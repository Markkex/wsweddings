import { NextResponse, NextRequest } from 'next/server';
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request, response) {
    
    console.log("dealing with request")
    /*
    const formData = await request.formData
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const budget = formData.get('budget')
    */
    const data = await request.json();
   
    const name = data.name
    const email = data.email
    const message = data.message
    const budget = data.budget
 
    console.log("create transport")
    // create transporter object
    const transporter = await nodemailer.createTransport({
        host: "mail.wilsonsoaresfilm.com",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "hello@wilsonsoaresfilm.com",
          pass: "avilafz93",
        },
      });
      console.log("created transport")

    try {

        
        console.log("sending email")
            const mail = await transporter.sendMail({
                from: "hello@wilsonsoaresfilm.com",
                to: "hello@wilsonsoaresfilm.com",
                subject: `Website activity from ${name}`,
                html: `
                <p>Name: ${name} </p>
                <p>Email: ${email} </p>
                <p>Message: ${message} </p>
                <p>Budget: ${budget} </p>
                `,
            })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: error })
    }


}