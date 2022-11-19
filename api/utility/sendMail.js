import nodemailer from "nodemailer";

/**
 * Send Account Activation
 * @param {*} to
 * @param {*} data
 */

export const sendActivationLink = async (to, data) => {
  try {
    // create trams transport
    let transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    // send activation mail
    await transport.sendMail({
      from: `Twitter pro  <${process.env.MAIL_ID}>`,
      subject: `${data.code} is your Twitter verification code`,
      to: to,
      text: "",
      html: `
            <body style="padding:0;margin:0;"> <center class="wrapper" style="width:100%;table-layout:fixed;background-color:#ffffff;padding-top:30px;padding-bottom:30px;"> <table class="main" style="background-color:#fff;color:rgb(37, 36, 36);width:100%;max-width:430px; height: 410px; margin:0 auto;border-spacing:0;font-family:sans-serif;padding: 20px;"> <!-- Header section --> <tr> <td height="16" style="padding:0;background-color: #fff;" class="header-section"> <table width="100%" style="border-spacing:0;"> <tr> <td class="two-collum" style="padding:0;text-align:left;"> <table width="100%" style="border-spacing:0;"> <tr> <td class="colum1" style="padding:0;width:100%;max-width:80px;height:100%;display:inline-block;vertical-align:top;"> <a href="http://localhost:3000/" style="text-decoration:none;"> <img style="border:0;padding-top: 10px; margin-left: 350px;" width="30"  src="https://ci5.googleusercontent.com/proxy/ObVgYJQgSjo41l1NQLa34y0cx059F8lNASu5OoCyxyuCxcV7dd5weiertHgR-sX4Sez9dT6iROiAH7iNxp3aDP98pJwyMQJY15cXJDykaOqgncPl=s0-d-e1-ft#https://ea.twimg.com/email/self_serve/media/icon_twitter_blue.png" alt="twitter-logo" border="0"> </a> </td> </tr> </table> </td> </tr> </table> </td> </tr> <!-- body Section --> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="recever-name" style="padding:0;"> <p style=" font-size: 25px; color: #222222;"><b>Confirm your email address </b></p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="message-name" style="padding:0;"> <p style="color:#222222; margin: 0; font-size: 16px;"> There’s one quick step you need to complete before creating your Twitter account. Let’s make sure this is the right email address for you — please confirm this is the right address to use for your new account.</p> </td> </tr> </table> </td> </tr> <tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="message-name" style="padding:0;"> <p style="color:#222222; margin: 0; font-size: 16px; margin-top: 15px;"> Please enter this verification code to get started on Twitter:</p> <h1><Strong>${data.code}</Strong></h1> <p style="margin-bottom : 10px">Verification codes expire after two hours.</p> <p>Thanks,</p> <p>Twitter</p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="message-name" style="padding:0; text-align: center;"> <p><a style="color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 12px;" href="#">Help |  </a><a style="color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 12px;" href="#">Email security tips</a></p> <p style="color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 12px;">Twitter, ﻿Inc. ﻿1355 ﻿Market ﻿Street, ﻿Suite ﻿900 ﻿San Francisco, CA 94103</p> </td> </tr> </table> </td> </tr> <!-- body Section --> </table> </center> </body>

            `,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Sent Forgot Password Link
 * @param {*} to
 * @param {*} data
 */

export const sentForgotPasswordLink = async (to, data) => {
  try {
    // create trams transport
    let transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    // send activation mail
    await transport.sendMail({
      from: `Twitter pro <${process.env.MAIL_ID}>`,
      subject: "Password reset request",
      to: to,
      text: "check your link",
      html: `
            
           <body style="padding:0;margin:0;"> <center class="wrapper" style="width:100%;table-layout:fixed;background-color:#ffffff;padding-top:30px;padding-bottom:30px;"> <table class="main" style="background-color:#fff;color:rgb(37, 36, 36);width:100%;max-width:430px; height: 410px; margin:0 auto;border-spacing:0;font-family:sans-serif;padding: 20px;"> <!-- Header section --> <tr> <td height="16" style="padding:0;background-color: #fff;" class="header-section"> <table width="100%" style="border-spacing:0;"> <tr> <td class="two-collum" style="padding:0;text-align:left;"> <table width="100%" style="border-spacing:0;"> <tr> <td class="colum1" style="padding:0;width:100%;max-width:80px;height:100%;display:inline-block;vertical-align:top;"> <a href="http://localhost:3000/" style="text-decoration:none;"> <img style="border:0;padding-top: 10px; margin-left: 350px;" width="30"  src="https://ci5.googleusercontent.com/proxy/ObVgYJQgSjo41l1NQLa34y0cx059F8lNASu5OoCyxyuCxcV7dd5weiertHgR-sX4Sez9dT6iROiAH7iNxp3aDP98pJwyMQJY15cXJDykaOqgncPl=s0-d-e1-ft#https://ea.twimg.com/email/self_serve/media/icon_twitter_blue.png" alt="twitter-logo" border="0"> </a> </td> </tr> </table> </td> </tr> </table> </td> </tr> <!-- body Section --> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="recever-name" style="padding:0;"> <p style=" font-size: 25px; color: #222222;"><b>Reset your password? </b></p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="message-name" style="padding:0;"> <p style="color:#222222; margin: 0; font-size: 16px;"> If you requested a password reset for @afsana3t, use the confirmation code below to complete the process. If you didn't make this request, ignore this email.</p> </td> </tr> </table> </td> </tr> <tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="message-name" style="padding:0;"> <p style="color:#222222; margin: 0; font-size: 16px; margin-top: 15px; margin-bottom: 15px;"> Please enter this verification code to get started on Twitter:</p> <Strong>${data.code}</Strong> <p style="margin-bottom : 10px; font-weight: 800;">Getting a lot of password reset emails?</p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="message-name" style="padding:0;"> <p style="color:#222222; margin: 0; font-size: 16px; margin-top: 15px; margin-bottom: 15px;">You can change your <a style="color: #66a1f2; text-decoration:none; " href="#">account settings</a> to require personal information to reset your password.</p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="message-name" style="padding:0; text-align: center;"> <p><a style="color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 12px; text-decoration:none;" href="#">Help |  </a><a style=" text-decoration:none; color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 12px;" href="#">Email security tips</a></p> <p style="color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 12px;">This email was meant for ${data.username}</p> <p style="color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 12px;">Twitter, ﻿Inc. ﻿1355 ﻿Market ﻿Street, ﻿Suite ﻿900 ﻿San Francisco, CA 94103</p> </td> </tr> </table> </td> </tr> <!-- body Section --> </table> </center> </body>

            `,
    });
  } catch (error) {
    next(error);
  }
};
