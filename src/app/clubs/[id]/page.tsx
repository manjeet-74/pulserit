import { IClub } from "@/models/Club"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Club({ params }: { params: IClub }) {
    return (
        <div>
            <div>
                <Header />
                <Footer />
            </div>
        </div>
    )
}