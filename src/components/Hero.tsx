import { motion } from "framer-motion";
import { ArrowDown, ArrowRight} from "lucide-react";
import { FaGithub, FaLinkedin   } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              IT Undergraduate • University of Moratuwa
            </p>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
              Ishini
              <span className="gradient-text block">
                Wickramage
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-zinc-200 md:text-3xl">
              Software Engineer
              <span className="text-zinc-500"> · </span>
              Frontend Developer
              <span className="text-zinc-500"> · </span>
              Full Stack Developer
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Passionate about creating modern, reliable, and user-focused
              software experiences while solving real-world problems through
              thoughtful engineering.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-black transition hover:bg-sky-300"
              >
                Explore My Work
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/IshiniWickramage"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:border-sky-400 hover:text-sky-400"
                aria-label="GitHub"
              >
                <FaGithub size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/ishini-wickramage-0b6733264/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:border-sky-400 hover:text-sky-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={21} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-sky-400/10 blur-2xl" />

              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/10 bg-zinc-900 sm:h-80 sm:w-80">
                <img
                  src="/images/profile.jpg"
                  alt="Ishini Wickramage"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <ArrowDown className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;