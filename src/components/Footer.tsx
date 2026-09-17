export default function Footer() {
  return (
    <footer className="px-6 py-10">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm text-zinc-600">

        <p>
          © {new Date().getFullYear()} Ishini Wickramage
        </p>

        <p>
          Built with React.js & TypeScript
        </p>

      </div>

    </footer>
  );
}