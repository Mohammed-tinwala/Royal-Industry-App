import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // your logo

const Splash = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-white">

            <motion.img
                src={logo}
                alt="Royal Industry"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-28 mb-6"
            />

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl font-bold tracking-wide"
            >
                Royal Industry
            </motion.h1>

            <p className="text-gray-500 text-sm mt-2">
                Strength • Quality • Trust
            </p>

        </div>
    );
};

export default Splash;
