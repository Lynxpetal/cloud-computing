import "styles/components/footer.scss";
import ContactUs from "./contactUs";
import Map from "./map";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="footerUpper">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>CONTACT US</h1>
                            <br />
                            <ContactUs />
                        </div>
                        <div className="col footerMap">
                            <h1>MAP TO TAR UMT</h1>
                            <br />
                            <Map />
                        </div>
                        <div className="col footerEmpty"></div>
                    </div>
                </div>
            </div>
            <div className="footerLower centerFlex">
                TAR UMT © 2023 All Rights Reserved&nbsp;
                <Link href="/disclaimer" className="footerLink">
                    Disclaimer
                </Link>
                &nbsp;
                <Link href="/privacy-policy" className="footerLink">
                    Privacy Policy
                </Link>
                &nbsp;and&nbsp;
                <Link href="/abac-policy" className="footerLink">
                    ABAC Policy
                </Link>
            </div>
        </footer>
    );
}
