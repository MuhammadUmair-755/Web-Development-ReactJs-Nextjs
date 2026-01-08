import IconsList from "./IconsList";

async function Footer() {    
  return (
    <div className="fixed z-50 bottom-0 bg-primary w-full py-3 border-t border-secondary md:hidden">
      <IconsList/>
    </div>
  );
}

export default Footer;
