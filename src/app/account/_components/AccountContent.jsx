'use client'
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import AccountDetails from "../_sections/AccountDetails";
import { useRouter, useSearchParams } from 'next/navigation';

export default function AccountContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const selectedSection = searchParams.get('section') || "Notes"
    const handleSection = (item) => {
        router.push(`/account?section=${item}`);
    }

    return (
            <div className='container flex justify-around max-w-4xl my-4 mx-auto overflow-auto scrollbar-thin'> {/*sticky top-28*/}
                {
                    ['Notes','Code','Q/A','Quiz','Assignment'].map((item, index) => (
                        <button
                            key={index}
                            className={`mx-6 py-2 border-2 bg-yellow-500 text-xl max-lg:text-base font-semibold px-5 tracking-wider
                                ${selectedSection === item ? "bg-green-700 dark:bg-yellow-700 text-white" : "hover:text-grey-700 "} border-orange-700 rounded-lg
                                text-nowrap transition-colors duration-300`}
                            onClick={() => handleSection(item)}
                        >
                            {item}
                        </button>
                    ))
                }
            </div>
    );
}