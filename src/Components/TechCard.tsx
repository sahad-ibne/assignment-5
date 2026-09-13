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
        </section>
    );
};

export default TechCards;