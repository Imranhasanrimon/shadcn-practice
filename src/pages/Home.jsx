import { Button } from "@/components/ui/button";
import originalIBA from "../assets/IBA.jpg"
import AI_IBA from "../assets/AI_IBA.jpg"

const Home = () => {
    const title = "Welcome to Our University"
    const subtitle = "Excellence in Business Education Since 2000"
    return (
        <>
            <div
                className="relative w-full h-screen flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${window.innerWidth >= 1224 ? originalIBA : AI_IBA})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="z-10">
                    <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
                    <p className="text-md md:text-lg mt-2">{subtitle}</p>
                </div>
            </div>
            <div className="grid gap-5 w-11/12 mx-auto py-6">

                <section className="rounded-3xl w-full h-[400px] flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10">
                    <h1 className="text-4xl font-bold">Welcome to Shadcn</h1>
                    <p className="text-lg mt-3">Build stunning interfaces with ShadCN & Tailwind.</p>
                    <Button className="mt-5 px-6 py-3 text-lg">Get Started</Button>
                </section>
                <section className="rounded-3xl w-full h-[400px] flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10">
                    <h1 className="text-4xl font-bold">Welcome to Shadcn</h1>
                    <p className="text-lg mt-3">Build stunning interfaces with ShadCN & Tailwind.</p>
                    <Button className="mt-5 px-6 py-3 text-lg">Get Started</Button>
                </section>
                <section className="rounded-3xl w-full h-[400px] flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10">
                    <h1 className="text-4xl font-bold">Welcome to Shadcn</h1>
                    <p className="text-lg mt-3">Build stunning interfaces with ShadCN & Tailwind.</p>
                    <Button className="mt-5 px-6 py-3 text-lg">Get Started</Button>
                </section>
                <section className="rounded-3xl w-full h-[400px] flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10">
                    <h1 className="text-4xl font-bold">Welcome to Shadcn</h1>
                    <p className="text-lg mt-3">Build stunning interfaces with ShadCN & Tailwind.</p>
                    <Button className="mt-5 px-6 py-3 text-lg">Get Started</Button>
                </section>
                <section className="rounded-3xl w-full h-[400px] flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10">
                    <h1 className="text-4xl font-bold">Welcome to Shadcn</h1>
                    <p className="text-lg mt-3">Build stunning interfaces with ShadCN & Tailwind.</p>
                    <Button className="mt-5 px-6 py-3 text-lg">Get Started</Button>
                </section>


            </div>
        </>
    );
};

export default Home;