import mailgen from "mailgen";

const emailVerificationMailgenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our App! We're excited to have you on board.",
            action: {
                instructions: "To verify your email please click on the following button"
                button: {
                    color: "#22BC66",
                    text: "Verify your email",
                    link: verificationUrl
                }
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help."
        }
    }
}

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: "We got the request to reset your password",
            action: {
                instructions: "To reset password click on the following button or link"
                button: {
                    color: "#e23030",
                    text: "Reset Your Password",
                    link: passwordResetUrl
                }
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help."
        }
    }
}

export{
    emailVerificationMailgenContent,
    forgotPasswordMailgenContent
}