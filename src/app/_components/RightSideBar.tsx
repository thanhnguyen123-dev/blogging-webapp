import Image from 'next/image';

const challenges = [
    {status: "Just Launched 🚀", imageSrc: "/agents-ai.png", alt: "agents-ai", width: 300, height: 100, title: "Agent.ai Challenge", description: "$10,000 in prizes!"},
    {status: "Happening Now 🎉", imageSrc: "/copilot.png", alt: "copilot", width: 300, height: 100, title: "GitHub Copilot 1-Day Build Challenge", description: "$3,000 in prizes!"},
    {status: "Submissions Due Feb 2", imageSrc: "/new-year.png", alt: "new year", width: 300, height: 100, title: "New Year Writing Challenge 🔮", description: "One look back, one leap forward!"},

]


const RightSideBar = () => {
    return (
        <div className="basis-2/6 flex flex-col items-center justify-center">
            <div className="flex flex-col cell w-full" >
                <p>👋 What&apos;s happening this week</p>
                <h2>Challenges 🤗</h2>
                {
                    challenges.map(({status, imageSrc, alt, width, height, title, description}, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-2 mx-auto my-2 px-4 border-black border-2 rounded-md">
                                <p>{status}</p>
                                <Image
                                    src={imageSrc}
                                    alt={alt}
                                    width={width}
                                    height={height}
                                    className='flex rounded-md'
                                />
                                <p className='underline'>{title}</p>
                                <p>{description}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default RightSideBar;