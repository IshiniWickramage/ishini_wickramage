import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin   } from "react-icons/fa";


export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d11] p-10 md:p-20"
        >

          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

          <div className="relative">

            <p className="text-sky-400 text-sm tracking-[0.3em]">
              06 — CONTACT
            </p>

            <h2 className="mt-6 text-5xl md:text-8xl font-bold leading-none">
              LET'S
              <br />

              <span className="gradient-text">
                CONNECT.
              </span>
            </h2>

            <p className="text-zinc-500 max-w-xl text-lg mt-8">
              I'm open to software engineering and
              frontend development opportunities.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="mailto:ishiniwickramage@gmail.com"
                className="flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-sky-400 transition"
              >
                <Mail size={18} />
                Email Me
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://github.com/IshiniWickramage"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 hover:border-sky-400 transition"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ishini-wickramage-0b6733264/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 hover:border-sky-400 transition"
              >
                <FaLinkedin  size={18} />
                LinkedIn
              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}