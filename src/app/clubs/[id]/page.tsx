import { IClub } from "@/models/Club"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Club({ params }: { params: IClub }) {
    return (
        <div>
            <div className="flex flex-col justify-between">
                <Header />
                <Footer />
            </div>
        </div>
    )
}