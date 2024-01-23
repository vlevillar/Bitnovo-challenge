import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-end">
            <div className="flex flex-row items-center gap-8">
                <div>
                    <Image src='/footerLogo.svg' width={150} height={150} />
                </div>
                <div className="border-l-2 border-[#C0CCDA] h-8 flex items-center pl-4 ">
                    <p className="text-[#C0CCDA] text-xs">© 2022 Bitnovo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
