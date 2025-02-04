interface SubHeadingProps {
    title: string;
    description: string;
}

export default function SubHeading({ title, description }: SubHeadingProps) {
    return (
        <div className="my-6 flex space-x-6 flex-start items-center mx-4">
            <h1 className="bg-pulserit_color text-black 
                            rounded-xl px-4 font-aptos mb-6 text-3xl">{title}</h1>
            <p className="text-black font-aptos w-1/2">{description}</p>
        </div>
    )
}