import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { Switch } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import { CaretLeft, CaretRight } from '@/assets/icons';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import useBoolean from '@/hooks/useBoolean';
import memberOptions from '@/api/member/queryOptions';
import { GENDER_DICT, WORRY_DICT } from '@/constants/users';
import useMusicStore from '@/stores/useMusicStore';
import NicknameBottomSheet from './components/NicknameBottomSheet';
import BirthdayBottomSheet from './components/BirthdayBottomSheet';
import GenderBottomSheet from './components/GenderBottomSheet';
import WorryBottomSheet from './components/WorryBottomSheet';
import LogoutBottomSheet from './components/LogoutBottomSheet';
import ResignBottomSheet from './components/ResignBottomSheet';
import styles from './style';

const SuspendedPage = () => {
  const { data: member } = useSuspenseQuery(memberOptions.detail());

  const isMusicPlaying = useMusicStore((s) => s.isPlaying);
  const toggleMusicPlaying = useMusicStore((s) => s.togglePlaying);

  const nicknameBottomSheetProps = useBoolean(false);
  const birthdayBottomSheetProps = useBoolean(false);
  const genderBottomSheetProps = useBoolean(false);
  const worryBottomSheetProps = useBoolean(false);
  const logoutBottomSheetProps = useBoolean(false);
  const resignBottomSheetProps = useBoolean(false);

  return (
    <main css={styles.main}>
      <NicknameBottomSheet {...nicknameBottomSheetProps} />
      <BirthdayBottomSheet {...birthdayBottomSheetProps} />
      <GenderBottomSheet {...genderBottomSheetProps} />
      <WorryBottomSheet {...worryBottomSheetProps} />
      <LogoutBottomSheet {...logoutBottomSheetProps} />
      <ResignBottomSheet {...resignBottomSheetProps} />
      <ul css={styles.list}>
        <li css={styles.item}>
          <p>닉네임 변경</p>
          <div
            role="button"
            css={styles.value}
            onClick={nicknameBottomSheetProps.on}
          >
            <span>{member.nickname ? member.nickname : '설정되지 않음'}</span>
            <CaretRight color={COLORS.gray3} />
          </div>
        </li>
        <li css={styles.item}>
          <p>생년월일 변경</p>
          <div
            role="button"
            css={styles.value}
            onClick={birthdayBottomSheetProps.on}
          >
            <span>
              {member.birthDay
                ? `${member.birthDay[0]}년 ${member.birthDay[1]}월 ${member.birthDay[2]}일`
                : '설정되지 않음'}
            </span>
            <CaretRight color={COLORS.gray3} />
          </div>
        </li>
        <li css={styles.item}>
          <p>성별 변경</p>
          <div
            role="button"
            css={styles.value}
            onClick={genderBottomSheetProps.on}
          >
            <span>
              {member.gender !== 'NONE'
                ? GENDER_DICT[member.gender]
                : '설정되지 않음'}
            </span>
            <CaretRight color={COLORS.gray3} />
          </div>
        </li>
        <li css={styles.item}>
          <p>고민 변경</p>
          <div
            role="button"
            css={styles.value}
            onClick={worryBottomSheetProps.on}
          >
            {member.worryTypes?.length > 0
              ? member.worryTypes.map((worryType) => (
                  <span role="listitem" css={styles.chip} key={worryType}>
                    {WORRY_DICT[worryType]}
                  </span>
                ))
              : '설정되지 않음'}
            <CaretRight color={COLORS.gray3} />
          </div>
        </li>
      </ul>
      <div css={styles.divider} />
      <ul css={styles.list}>
        <li css={[styles.item, css({ margin: '-0.5rem 0' })]}>
          <p>배경음악</p>
          <Switch checked={isMusicPlaying} onChange={toggleMusicPlaying} />
        </li>
      </ul>
      <div css={styles.divider} />
      <ul role="menu" css={styles.list}>
        <li
          role="menuitem"
          css={[styles.item, css({ cursor: 'pointer' })]}
          onClick={logoutBottomSheetProps.on}
        >
          <p>로그아웃</p>
        </li>
        <li
          role="menuitem"
          css={[styles.item, css({ cursor: 'pointer' })]}
          onClick={resignBottomSheetProps.on}
        >
          <p css={css({ color: COLORS.danger })}>서비스 탈퇴</p>
        </li>
      </ul>
    </main>
  );
};

const MyPage = () => {
  return (
    <div css={styles.page}>
      <Header>
        <Header.Left>
          <Link to={ROUTER_PATHS.ROOT}>
            <CaretLeft />
          </Link>
        </Header.Left>
        <Header.Center>
          <h1 css={textStyles.b4m}>마이페이지</h1>
        </Header.Center>
      </Header>
      <SuspendedPage />
      <footer css={styles.footer}>
        <p>Copyright ©seeofmyheart.</p>
        <p>All rights reserved</p>
      </footer>
    </div>
  );
};

export default MyPage;
