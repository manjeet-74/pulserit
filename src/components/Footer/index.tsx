import { Button, Input } from "@chakra-ui/react";

const Footer = () => {
    return (
        <div className="flex flex-col text-white bg-black p-16 rounded-2xl mt-8">
            {/* Row 1  */}
            <div className="flex justify-between">
                <span>PulseRit</span>
                {/* About us  */}
                <div className="flex space-x-4">
                    <a href="#">About us</a>
                    <a href="#">Services</a>
                    <a href="#">Use cases</a>
                    <a href="#">Pricing</a>
                    <a href="#">Blog</a>
                </div>
                {/* Social media */}
                <div className="flex space-x-4">
                    <p>insta</p>
                    <p>facebook</p>
                    <p>x</p>
                </div>
            </div>
            {/* Row 2 */}
            <div className="flex justify-between p-4">
                <div className="flex flex-col w-1/4">
                    <span>Contact us:</span>
                    <p>Email: info@gmail.com</p>
                    <p>Phone: 5555555555555</p>
                    <p>Address: 1234 Main St
                        Moonstone City, Stardust State 12345</p>
                </div>
                <div className="flex space-x-4 bg-gray-900 items-center justify-center p-12 rounded-2xl">
                    <Input placeholder="Email" className="text-white border-2 p-4"></Input>
                    <Button className="bg-pulserit_color text-black p-4 rounded-lg font-aptos">Subscribe to news</Button>
                </div>
            </div>
            <hr className="my-4"/>
            {/* Row 3 */}
            <div className="flex space-x-4">
                <a href="#">&#169; 2023 Positivus. All Rights Reserved.</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    )
}

export default Footer;