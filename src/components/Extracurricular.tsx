import { motion } from "framer-motion";
import {
  Users,
  Heart,
  GraduationCap,
} from "lucide-react";

const activities = [
  {
    title: "AIESEC Club",
    description:
      "Member of AIESEC Club at the University of Moratuwa.",
    icon: Users,
  },
  {
    title: "Buddhist Society",
    description:
      "Member of the Buddhist Society at the University of Moratuwa.",
    icon: Heart,
  },
  {
    title: "Leo Club",
    description:
      "Member of the Leo Club at the University of Moratuwa.",
    icon: GraduationCap,
  },
];

const Extracurricular = () => {
  return (
    <section id="activities" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Beyond Academics
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Extracurricular Activities
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-7 transition"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-sky-400/10 p-4 text-sky-400">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {activity.title}
                </h3>

                <p className="leading-7 text-zinc-400">
                  {activity.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Extracurricular;