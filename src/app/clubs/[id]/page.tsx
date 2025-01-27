import { IClub } from "@/models/Club"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ClubDetailsCard from "@/components/ClubDetailsCard";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";

export default function Club({ params }: { params: IClub }) {
    return (
        <div>
            <div className="flex flex-col justify-between">
                <Header />
                <div className="flex flex-col items-center justify-center bg-white w-full">
                    <div className="w-3/4 flex flex-col">
                        <div className="w-full flex flex-col items-center justify-center">
                            <div className="my-4 w-full">
                                <ClubDetailsCard
                                    key="jkdsfgh"
                                    clubName="jkdsfgh"
                                    description="jkdsfgh"
                                    image="sdfvkja"
                                />
                            </div>
                            <div className="py-2 w-full">
                                <ClubDetailsCard
                                    key="bfjdvsb"
                                    clubName="jkdsfgh"
                                    description="jkdsfgh"
                                    image=""
                                />
                            </div>
                        </div>
                        <Team />
                        <Gallery />

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}