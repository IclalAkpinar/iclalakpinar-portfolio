import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

export const SideSocialLinks = () => {
  return (
    <div className="fixed bottom-0 left-20 hidden md:block">
      <ul className="flex flex-col items-center gap-6 after:h-[90px] after:w-[1px] after:bg-white after:block after:mt-6">
        <li>
          <a
            href="https://github.com/YourGithubUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:-translate-y-1 transition-transform duration-200 text-xl"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/YourLinkedinUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:-translate-y-1 transition-transform duration-200 text-xl"
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/YourInstagramUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:-translate-y-1 transition-transform duration-200 text-xl"
          >
            <FiInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};
