import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Professional Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="glass glow-blue rounded-3xl p-7 md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-sky-400/10 p-3 text-sky-400">
                  <Briefcase size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Software Engineering Intern
                  </h3>

                  <p className="mt-1 text-lg text-sky-400">
                    WEBS R US (Pty) Ltd
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  Mar 2025 – Sep 2025
                </span>

                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  Melbourne, Australia · Remote
                </span>
              </div>
            </div>

          </div>

          <div className="mt-10 space-y-10">

            <div>
              <h4 className="mb-3 text-xl font-semibold text-white">
                Nexgen Cargo Management System
              </h4>

              <ul className="space-y-3 text-zinc-400">
                <li>
                  • Contributed to frontend development of a large-scale
                  enterprise logistics platform, focusing on warehouse
                  dashboards for Warehouse Sri Lanka and Warehouse Australia.
                </li>

                <li>
                  • Developed operational interfaces including POS systems,
                  driver dashboards, shipping management, and call center
                  management.
                </li>

                <li>
                  • Integrated frontend components with backend APIs and
                  implemented dynamic data rendering, routing, and form
                  validations.
                </li>

                <li>
                  • Enhanced usability through features such as QR code
                  generation, Google Maps integration, and address auto-fill.
                </li>

                <li>
                  • Developed responsive and role-based user interfaces to
                  support different operational users.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xl font-semibold text-white">
                Lion Car Rental System
              </h4>

              <ul className="space-y-3 text-zinc-400">
                <li>
                  • Worked on the Reports and Analytics section of the system,
                  developing frontend report interfaces for revenue analysis,
                  vehicle performance, daily manifests, tax summaries,
                  cancellations, and location-based reports.
                </li>

                <li>
                  • Implemented pagination, filtering, responsive layouts, and
                  Excel export functionality to improve reporting usability.
                </li>

                <li>
                  • Contributed to the partially completed system before the
                  internship period concluded.
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;