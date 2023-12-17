import { useRef } from 'react';

import genderAgeDesc1xPng from '../../assets/imgGenderAge/goals-desctop-1x-min.png';
import genderAgeDesc2xPng from '../../assets/imgGenderAge/genderAge-desctop-2x-min.png';
import genderAgeDesc3xPng from '../../assets/imgGenderAge/genderAge-desctop-3x-min.png';
import genderAgeTab1xPng from '../../assets/imgGenderAge/genderAge-tablet-1x-min.png';
import genderAgeTab2xPng from '../../assets/imgGenderAge/genderAge-tablet-2x-min.png';
import genderAgeTab3xPng from '../../assets/imgGenderAge/genderAge-tablet-3x-min.png';
import genderAgeMob1xPng from '../../assets/imgGenderAge/genderAge-mobile-1x-min.png';
import genderAgeMob2xPng from '../../assets/imgGenderAge/genderAge-mobile-2x-min.png';
import genderAgeMob3xPng from '../../assets/imgGenderAge/genderAge-mobile-3x-min.png';

import genderAgeDesc1xWebp from '../../assets/imgGenderAge/genderAge-desctop-1x-min.webp';
import genderAgeDesc2xWebp from '../../assets/imgGenderAge/genderAge-desctop-2x-min.webp';
import genderAgeDesc3xWebp from '../../assets/imgGenderAge/genderAge-desctop-3x-min.webp';
import genderAgeTab1xWebp from '../../assets/imgGenderAge/genderAge-tablet-1x-min.webp';
import genderAgeTab2xWebp from '../../assets/imgGenderAge/genderAge-tablet-2x-min.webp';
import genderAgeTab3xWebp from '../../assets/imgGenderAge/genderAge-tablet-3x-min.webp';
import genderAgeMob1xWebp from '../../assets/imgGenderAge/genderAge-mobile-1x-min.webp';
import genderAgeMob2xWebp from '../../assets/imgGenderAge/genderAge-mobile-2x-min.webp';
import genderAgeMob3xWebp from '../../assets/imgGenderAge/genderAge-mobile-3x-min.webp';

import {
  Container,
  DescWrapper,
  StyleBackLink,
  StyleBtnColumn,
  StylePicture,
  StyleSubtitle,
  StyleTitle,
  StylesSection,
  Wrapper,
} from '../../styles/SignupAge/SignupAge.styled';
import GenderlForm from '../../components/SignupAge/GtnderForm';

const SignUpAge = () => {
  const backLinkLocationRef = useRef(location.state?.from ?? 'signup-data/1');

  return (
    <StylesSection>
      <Container>
        <Wrapper>
          <StylePicture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${genderAgeDesc1xWebp} 1x, ${genderAgeDesc2xWebp} 2x, ${genderAgeDesc3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 1440px)"
              srcSet={`${genderAgeDesc1xPng} 1x, ${genderAgeDesc2xPng} 2x, ${genderAgeDesc3xPng} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${genderAgeTab1xWebp} 1x, ${genderAgeTab2xWebp} 2x, ${genderAgeTab3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${genderAgeTab1xPng} 1x, ${genderAgeTab2xPng} 2x, ${genderAgeTab3xPng} 3x`}
              type="image/png"
            />
            <source
              media="(max-width: 767px)"
              srcSet={`${genderAgeMob1xWebp} 1x, ${genderAgeMob2xWebp} 2x, ${genderAgeMob3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(max-width: 767px)"
              srcSet={`${genderAgeMob1xPng} 1x, ${genderAgeMob2xPng} 2x, ${genderAgeMob3xPng} 3x`}
              type="image/png"
            />
            <img src={genderAgeTab1xPng} alt="Goal" />
          </StylePicture>
          <DescWrapper>
            <StyleTitle>Select gender, Age</StyleTitle>
            <StyleSubtitle>
              Choose a goal so that we can help you effectively
            </StyleSubtitle>
            <p>Gender</p>
            <StyleBtnColumn>
              <GenderlForm />
              <StyleBackLink to={backLinkLocationRef.current}>
                Back
              </StyleBackLink>
            </StyleBtnColumn>
          </DescWrapper>
        </Wrapper>
      </Container>
    </StylesSection>
  );
};

export default SignUpAge;
