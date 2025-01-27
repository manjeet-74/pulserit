interface CardProps {
    name: string;
    description: string;
    image: string; // New property for the image URL
}

export default function TeamCard({ name, description, image }: CardProps) {
    return (
        <div className="bg-white max-w-sm overflow-hidden shadow-lg rounded-3xl">
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-3xl" />
            <div className="px-6 py-4">
                <div className="text-black font-bold text-xl mb-2 rounded-xl bg-pulserit_color px-4">
                    {name}
                </div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    );
}
