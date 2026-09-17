import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-32 px-6">

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

          <p className="text-sky-400 text-sm tracking-[0.3em]">
            05 — EDUCATION
          </p>

          <h2 className="mt-5 text-5xl md:text-7xl font-bold">
            My
            <span className="gradient-text">
              {" "}journey.
            </span>
          </h2>

        </motion.div>

        <div className="mt-16 border-l border-zinc-800 ml-3">

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative pl-10 pb-16"
          >

            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-sky-400" />

            <p className="text-sky-400 text-sm">
              2021 — 2026
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-3">
              University of Moratuwa
            </h3>

            <p className="text-zinc-400 mt-2">
              B.Sc. (Hons) in Information Technology
            </p>

           {/* <p className="text-zinc-500 mt-2">
              Current GPA: 3.48
            </p> */}

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative pl-10 pb-16"
          >

            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-purple-400" />

            <p className="text-purple-400 text-sm">
              2020
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-3">
              G.C.E. Advanced Level
            </h3>

            <p className="text-zinc-400 mt-2">
              Physical Science Stream
            </p>

            <p className="text-zinc-400 mt-2">
              Chemistry — A · Combined Mathematics — A ·
              Physics — B
            </p>

            <p className="text-zinc-400 text-sm mt-2 italic">
              Sri Lanka Singapore Friendship College, Weeraketiya
            </p>

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative pl-10"
          >

            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-emerald-400" />

            <p className="text-emerald-400 text-sm">
              2016
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-3">
              G.C.E. Ordinary Level
            </h3>

            <p className="text-zinc-400 mt-2">
              8 A&apos;s, 1 B
            </p>

            <p className="text-zinc-400 text-sm mt-2 italic">
              Sri Lanka Singapore Friendship College, Weeraketiya
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}