import nodemailer from 'nodemailer'

const mailfunc = async (email,sub,text)=>{
    try {
        const transporter = nodemailer.createTransport({
            host : process.env.HOST,
            service:process.env.SERVICE,
            port:Number(process.env.PORT),
            secure:Boolean(process.env.SECURE),
            auth:{
                user:process.env.USER,
                pass:process.env.PASS
            }
        
        });

        await transporter.sendMail({
            from:process.env.USER,
            to:email,
            subject:sub,
            text:text
        })

        console.log("email send successfully")
    } catch (error) {
        console.log("Email not send",error)
    }
}

export default mailfunc ;