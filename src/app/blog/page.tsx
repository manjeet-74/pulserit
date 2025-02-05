import Header from "@/components/Header"
import Footer from "@/components/Footer"

const BlogPage = () => {
    return (
        <div className="flex flex-col justify-between bg-white">
            <Header />
            <div className="bg-white p-6">

                <BlogCard
                    title='How to build a website'
                    description='Learn how to build a website from scratch with our easy to follow guide.'
                    image='https://unsplash.com/blog/content/images/2024/12/12-Days-of-Topics-Results--Blog--1.jpg'
                />
                <div className="text-black p-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="#" alt="S" className="bg-pulserit_color"/>
                            <div className="flex flex-col ml-6">
                                <h1>Sarah Karim</h1>
                                <p>Content Writer</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p className="text-3xl cursor-pointer">A</p>
                            <p className="text-2xl mx-4 cursor-pointer">A</p>
                            <p className="text-xl cursor-pointer">A</p>
                        </div>
                    </div>
                    <hr className="my-2"/>
                    
                </div>

            </div>
            <Footer />
        </div>
    )
}

interface BlogCardProps {
    title: string;
    description: string;
    image: string;
}

function BlogCard({ title, description, image }: BlogCardProps) {
    return (
        <div className='lg:flex p-8 bg-grey rounded-3xl text-black justify-start my-4'>
            <div className="lg:w-1/2 p-8">
                <img src={image} alt={title} className='rounded-lg' />
            </div>
            <div className='mx-4 p-8'>
                <h1 className='text-2xl mb-2 font-bold'>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

// Blog





export default BlogPage;