import Link from '@docusaurus/Link';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function MainDownloadButton(): JSX.Element {
  return (
    <div>
      <Link
        className="inline-flex font-semibold no-underline hover:no-underline items-center text-white hover:text-white bg-gradient-to-b from-orange-500 to-orange-600 border-0 py-3 px-6 focus:outline-hidden hover:from-orange-600 hover:to-orange-700 rounded-lg text-base mt-4 mb-0 ml-4"
        to={'`/downloads/'}
      >
        <FontAwesomeIcon size="1x" icon={faDownload} className="px-2 py-1" /> Download Now
      </Link>
    </div>
  );
}

// Same as MainDownloadButton but instead it's "Download" and has no fontawesome icon
export function HeaderDownloadButton(): JSX.Element {
  return (
    <div>
      <Link
        className="hidden xl:flex font-semibold no-underline hover:no-underline items-center text-white hover:text-white bg-gradient-to-b from-orange-500 to-orange-600 border-0 py-3 px-6 focus:outline-hidden hover:from-orange-600 hover:to-orange-700 rounded-lg text-base mt-0 mb-0 ml-4 mr-2"
        to="/downloads"
      >
        Download
      </Link>
    </div>
  );
}
