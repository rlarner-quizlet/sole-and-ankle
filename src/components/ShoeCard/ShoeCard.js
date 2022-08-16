import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const label = getLabel(variant);
  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          {variant === 'default' ? null : <Label variant={variant} >{label}</Label> }
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
  `;

const Image = styled.img`
  border-radius: 16px 16px 4px 4px;
  height: 312px;
  width: 340px;
`;

const Label = styled.div`
  background-color: ${props => props.variant === 'new-release' ? COLORS.secondary : COLORS.primary};
  color: ${COLORS.white};
  height: 32px;
  line-height: 32px;
  position: absolute;
  right: -4px;
  text-align: center;
  top: 12px;
  width: ${props => props.variant === 'new-release' ? '118px' : '49px'};
`;

const Row = styled.div`
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const getLabel = (variant) => {
  if (variant === 'new-release') {
    return 'Just released!';
  } else if (variant === 'on-sale') {
    return 'Sale';
  } else {
    return null;
  }
}
export default ShoeCard;
