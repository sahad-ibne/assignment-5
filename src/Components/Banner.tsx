import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="py-12 md:py-20 px-4 lg:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 text-center lg:text-left">
                <div className="flex-1 max-w-2xl">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900">
                        Build Your Ideal <br />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-6 text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>

                    <div className="mt-8 flex flex-row items-center justify-center lg:justify-start gap-4">

                        <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-xl">
                            Explore Technologies
                        </button>

                        <button className="border border-slate-200 text-slate-700 font-medium text-sm sm:text-base px-6 py-3 rounded-xl bg-white">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex justify-center w-full max-w-md lg:max-w-xl">
                    <img
                        src={bannerImg}
                        alt="Development"
                        className="w-full h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;