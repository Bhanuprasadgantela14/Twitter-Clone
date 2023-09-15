import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  showBackArrow?: boolean;
  label: string;
}

const Header: React.FC<HeaderProps> = ({ showBackArrow, label }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    document.title = `${label} / Twitter`;
  }, []);

  return (
    <div className="home">
      <div className="home-header">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={20}
            style={{ marginLeft: "2vw" }}
            className="
              cursor-pointer 
              hover:opacity-70 
              transition
              arrow-back
          "/>
        )}
        <div className="home-head">
          {label}
        </div>
        <div className="home-icon"><img className='home-logo' src="https://i.ytimg.com/vi/bZqPmiikY-s/maxresdefault.jpg" /></div>
      </div>
    </div>
  );
}

export default Header;
