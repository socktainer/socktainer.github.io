import { HeaderDownloadButton } from '@site/src/components/DownloadButton';
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';

// "Custom" navbar items to be added
export default {
  ...ComponentTypes,
  'custom-downloadButton': () => <HeaderDownloadButton className="navbar__item navbar__link" />,
};
