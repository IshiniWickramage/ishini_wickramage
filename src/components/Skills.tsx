import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <p className="text-purple-400 text-sm tracking-[0.3em]">
            02 — SKILLS
          </p>

          <h2 className="mt-5 text-5xl md:text-7xl font-bold">
            My
            <span className="gradient-text">
              {" "}toolbox.
            </span>
          </h2>

        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="glass rounded-3xl p-6 group"
              >

                <Icon
                  size={32}
                  className="text-sky-400 group-hover:text-purple-400 transition-colors"
                />

                <h3 className="mt-6 font-medium text-lg">
                  {skill.name}
                </h3>

                <p className="text-sm text-zinc-500 mt-1">
                  {skill.category}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}