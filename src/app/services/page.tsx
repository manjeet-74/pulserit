import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import SubHeading from '@/components/SubHeading';



const ServicesPage = () => {
    return (
        <div className='bg-white'>
            <Header />
            <div className="p-6">
                <ServicesCard />
                <HowWeWork />
                <UseCases />
                <OtherServices />
            </div>
            <Footer />
        </div>
    );
}

function ServicesCard() {
    return (
        <div className='flex p-6 bg-grey rounded-3xl'>
            <img src="https://plus.unsplash.com/premium_photo-1661409505401-f7144407ec74?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className='w-1/2 mr-8 rounded-lg' alt="services image" />
            <div className='w-1/2 text-black'>
                <h1 className='text-6xl my-6 font-aptos'>Expert Digital Marketing Services</h1>
                <p>Our team of experts will help you grow your business with our digital marketing services.</p>
            </div>
        </div>
    );
}


function HowWeWork() {
    return (
        <div className='my-6'>
            <SubHeading
                title='How We Work'
                description='Our team of experts will help you grow your business with our digital marketing services.'
            />
            <HowWeWorkCard
                index={1}
                title='Strategy'
                description='Our team of experts will help you grow your business with our digital marketing services.'
            />
            <HowWeWorkCard
                index={2}
                title='Design'
                description='Our team of experts will help you grow your business with our digital marketing services.'
            />
            <HowWeWorkCard
                index={3}
                title='Development'
                description='Our team of experts will help you grow your business with our digital marketing services.'
            />
            <HowWeWorkCard
                index={4}
                title='Marketing'
                description='Our team of experts will help you grow your business with our digital marketing services.'
            />
            <HowWeWorkCard
                index={5}
                title='Support'
                description='Our team of experts will help you grow your business with our digital marketing services.'
            />


        </div>
    )
}

interface HowWeWorkCardProps {
    index: number;
    title: string;
    description: string;
}

function HowWeWorkCard({ index, title, description }: HowWeWorkCardProps) {
    return (
        <div className='flex p-8 bg-grey rounded-3xl text-black items-center justify-start my-4'>
            <div className='p-4 mx-4 text-3xl text-pulserit_color bg-black flex justify-center rounded-full'>{index}</div>
            <div>
                <h1 className='text-2xl mb-2 font-bold'>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

function UseCases() {
    return (
        <div className='my-6'>
            <SubHeading
                title='Use Cases'
                description='Our team of experts will help you grow your business with our digital marketing services.'
            />
            <div className="bg-black my-6 rounded-3xl p-6 grid grid-cols-3 gap-6">
                <UseCasesCard
                    index={1}
                    title='Strategy'
                    description='Our team of experts will help you grow your business with our digital marketing services.'
                />
                <UseCasesCard
                    index={2}
                    title='Design'
                    description='Our team of experts will help you grow your business with our digital marketing services.'
                />
                <UseCasesCard
                    index={3}
                    title='Development'
                    description='Our team of experts will help you grow your business with our digital marketing services.'
                />
            </div>
        </div>
    )
}

interface UseCasesCardProps {
    index: number;
    title: string;
    description: string;
}

function UseCasesCard({ index, title, description }: UseCasesCardProps) {
    return (
        <div className='flex'>
            <div className='p-6'>
                <h1 className='text-2xl mb-2 font-bold text-white'>{title}</h1>
                <p className='text-white'>{description}</p>
            </div>
            {index % 3 !== 0 &&
                <div className='bg-white h-full w-1'></div>
            }
        </div>
    )
}

function OtherServices() {
    return (
        <div className='my-8'>
            <SubHeading
                title='Other Services'
                description='Our team of experts will help you grow your business with our digital marketing services.'
            />
            <div className='grid grid-cols-2 gap-8 mx-12'>
                <OtherServicesCard
                    title='Strategy'
                    description='Our team of experts will help you grow your business with our digital marketing services.'
                />
                <OtherServicesCard
                    title='Design'
                    description='Our team of experts will help you grow your business with our digital marketing services.'
                />
                <OtherServicesCard
                    title='Development'
                    description='Our team of experts will help you grow your business with our digital marketing services.'
                />
                <OtherServicesCard
                    title='Strategy'
                    description='Our team of experts will help you grow your business with our digital marketing services.'
                />
                <OtherServicesCard
                    title='Design'
                    description='Our team of experts will help you grow your business with our digital marketing services.'
                />
                <OtherServicesCard
                    title='Development'
                    description='Our team of experts will help you grow your business with our digital marketing services.'
                />
            </div>
        </div>
    )
}

interface OtherServicesCardProps {
    title: string;
    description: string;
}

function OtherServicesCard({ title, description }: OtherServicesCardProps) {
    return (
        <div className='bg-grey p-6 rounded-3xl text-black flex justify-between border-black border-b-4'>
            <h1 className='text-2xl mb-2 font-bold'>{title}</h1>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="services"
                className='w-1/2 rounded-lg'
            />
        </div>
    )
}



export default ServicesPage;