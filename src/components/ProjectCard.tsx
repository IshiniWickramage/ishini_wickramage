import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ElementType;
  gradient: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
      }}
      className="group glass relative overflow-hidden rounded-3xl p-7 transition"
    >
      <div
        className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl transition group-hover:opacity-20`}
      />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="rounded-2xl bg-white/5 p-4 text-sky-400">
            <Icon size={30} />
          </div>

          <span className="text-sm text-zinc-600">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;