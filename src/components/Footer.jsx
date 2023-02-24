import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import FooterCopyright from "./FooterCopyright";

function Footer() {
   return(
      <footer className="footer">
         <FooterLogo/>
         <FooterMenu/>
         <FooterCopyright/>
      </footer>
   )
}

export default Footer;