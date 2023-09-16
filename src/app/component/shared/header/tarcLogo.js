// import Image from "next/image";
import Link from "next/link";
export default function TarcLogo() {
    return (
        <Link href="/focs">
            <img src="/tarumt-logo1.png" width="100%" style={{objectFit:"contain"}} />
            {/* <Image id="tarclogo" src={"/tarumt-logo1.png"}  layout="fill" objectFit="contain" /> */}
        </Link>
    );
}
