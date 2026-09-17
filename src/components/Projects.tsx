import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My Projects
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;