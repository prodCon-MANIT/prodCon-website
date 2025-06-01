import SmallNavBar from './SmallNavBar';
import LargeNavBar from './LargeNavBar';

export default function NavBar() {


  return (
    <>
      {/* Always render the wrapper with state & route info */}
      <LargeNavBar />
      <SmallNavBar />
    </>
  );
}
