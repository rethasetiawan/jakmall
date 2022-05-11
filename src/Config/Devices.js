const sizes = {
    mobileM: '375px',
    tablet: '768px',
    laptop: '1024px',
  };

  export const Devices = {
    mobileM: `(min-width: ${sizes.mobileM})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
  };
  
  export default Devices;
  