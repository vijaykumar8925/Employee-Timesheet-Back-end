const middleware = require('nodemailer')
const hbs = require('nodemailer-express-handlebars');



async function main() {
    const transpoter = middleware.createTransport(
        {
            host : "smtp.gmail.com",
            port : 465,
            secure : true,
            service : 'Gmail',
            auth : {
                user : 'vijaykumarronaldo007@gmail.com',
                pass : 'zvffwuelccpbdbjj'
            }
        }
    )

    transpoter.use('compile',hbs({
        viewEngine:{
            extname:'.handlebars',
            layoutsDir:'views/',
            defaultLayout:'index'
        },
        viewPath:'views',
        extName:'.handlebars'
    }))

    const emails = ['vijaykumarunofficial@gmail.com','madhanalagappan@gmail.com'];
    

    const info = await transpoter.sendMail({
        from : 'vijaykumarronaldo007@gmail.com',
        to : emails,
        subject : 'Hi buddy Igonre it just a nodemailer',
        // html : `
        //    <h1>Successfully Signed up</h1>
        //    <h1>Happy new year you are going to get great yera head!!!</h1>
        //    <img src='cid:unique@gmail.com' width="400"/>
        // `,
        text : 'Successfully Signed Up',
        attachments : [{
            filename:'pexels-james-wheeler-1519088.jpg',
            path : './pexels-james-wheeler-1519088.jpg',
            cid:'unique@gmail.com'
        }],
        template : 'index'
    })
    // console.log("Message Sent :" + info.messageId);
    // console.log(info)
}

main();



// module.exports = transpoter;