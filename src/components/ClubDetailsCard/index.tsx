interface CardProps {
    clubName: string;
    description: string;
    image: string; // New property for the image URL
}

export default function ClubDetailsCard({ clubName, description, image }: CardProps) {
    return (
        <div className="p-4 w-full flex bg-white max-w-sm overflow-hidden shadow-lg rounded-3xl">
            {image.length > 0 && (<div className="bg-white">
                <img src={image} alt={clubName} className="w-full h-48 object-cover rounded-t-3xl" />
            </div>)}
            <div>
                <div className="px-6 py-4">
                    <div className="text-black font-bold text-xl mb-2 rounded-xl bg-pulserit_color px-4">
                        {clubName}
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
        </div>
    );
}
