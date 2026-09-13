import { use } from "react";
import { FaStar } from "react-icons/fa";
import type { ITech } from "../TechType";

interface TechCardsProps {
    techPromise: Promise<ITech[]>;
}

const TechCards = ({ techPromise }: TechCardsProps) => {

    const technologies = use(techPromise);

    return (
        <section className="py-12 px-4 lg:px-12 max-w-7xl mx-auto">
            <div className="mb-10 text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    Explore the{" "}
                    <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="mt-2 text-slate-500 text-sm sm:text-base">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                    <div
                        key={tech.id}
                        className="bg-white border border-slate-200 hover:border-pink-300 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                        <div>
                            <div className="flex items-center justify-between">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10 object-contain"
                                />
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 text-sky-600 border border-sky-100">
                                    {tech.badge}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mt-4">
                                {tech.name}
                            </h3>
                            <p className="text-slate-500 text-sm mt-2">
                                {tech.description}
                            </p>
                        </div>

                        <div className="mt-6">
                            <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-5 pt-3 border-t border-slate-100">
                                <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                                    {tech.category}
                                </span>
                                <span>{tech.difficulty}</span>
                                <span className="flex items-center gap-1 font-semibold text-slate-800">
                                    <FaStar className="text-amber-400 text-xs" />
                                    {tech.rating}
                                </span>
                            </div>

                            <button className="w-full bg-slate-900 text-white font-medium text-sm py-2.5 rounded-xl">
                                Add to Stack
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechCards;