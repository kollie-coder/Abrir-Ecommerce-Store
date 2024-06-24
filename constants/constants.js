const onboarding_screens = [
    {
        id: 1,
        image: require('../assets/images/splash_1.png'),
        title: "Welcome to Abrir Fashion Store",
        desc: "Start your shopping journey with us! Create your account in a few simple steps and get ready to explore a wide range of products tailored to your needs. Let's get started!"
    },
    {
        id: 2,
        image: require('../assets/images/splash_2.png'),
        title: "Discover Exclusive Deals",
        desc: "Unlock access to exclusive offers and special discounts just for you. Our personalized recommendations will ensure you never miss out on the best deals. Shop smarter and save more!"
    },
    {
        id: 3,
        image: require('../assets/images/splash_3.png'),
        title: "Fast & Secure Checkout",
        desc: "Enjoy a seamless and secure checkout process. With multiple payment options and secure transactions, shopping has never been this easy and safe. Complete your purchase with confidence!"
    }
]

const login = "LOGIN"
const register = "REGISTER"
const forgot_password = "FORGOT_PASSWORD"

export default {
    onboarding_screens,
    login,
    register,
    forgot_password
}