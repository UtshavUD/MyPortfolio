import { motion } from "framer-motion";

const steps = [
  "Research 📚",
  "Design 🎨",
  "Development 💻",
  "Testing 🧪",
  "Deployment 🚀",
];

export default function Animation() {
  return (
    <div className=" mx-10 mt-20 space-y-6 flex flex-col justify-start">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2, duration: 1 }}
          whileHover={{x: -10}}
        >
          {step}
        </motion.div>
      ))}
    </div>
  );
}
