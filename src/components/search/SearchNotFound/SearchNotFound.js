import mobImg from '../../../images/mobile/search-notfound375.png';
import mobImgRet from '../../../images/mobile/search-notfound375-2x.png';

import tabletImg from '../../../images/tablet/search-notfound768.png';
import tabletImgRet from '../../../images/tablet/search-notfound768-2x.png';
import { SearchNotFoundWrap } from './SearchNotFounf.styled';

export const SearchNotFound = () => {
  return (
    <SearchNotFoundWrap>
      <picture>
        <source
          srcSet={`${tabletImg} 1x, ${tabletImgRet} 2x`}
          media="(min-width: 768px)"
          sizes="350px"
          width="350"
          height="225"
          type="image/jpg"
        />
        <img
          srcSet={`${mobImg} 1x, ${mobImgRet} 2x`}
          src={`${mobImg}`}
          alt="No results for user request"
          width="450"
          height="294"
        />
      </picture>
      <span>Try looking for something else...</span>
    </SearchNotFoundWrap>
  );
};
