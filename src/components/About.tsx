import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Building meaningful
              <span className="gradient-text"> digital experiences.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-lg leading-8 text-zinc-300">
              I am an IT undergraduate at the University of Moratuwa with a
              strong interest in building practical and user-focused software
              solutions.
            </p>

            <p className="text-lg leading-8 text-zinc-300">
              I enjoy transforming ideas into clean, reliable, and intuitive
              digital experiences while continuously improving my problem-solving
              and software engineering skills.
            </p>

            <p className="text-lg leading-8 text-zinc-300">
              I am interested in opportunities where I can contribute to
              meaningful products, learn from experienced teams, and grow as a
              Software Engineer, Frontend Developer, or Full Stack Developer.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sky-400 transition hover:text-sky-300"
            >
              Let's connect
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;