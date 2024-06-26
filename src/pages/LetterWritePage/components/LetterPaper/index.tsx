import { useFormContext } from 'react-hook-form';
import { useSuspenseQuery } from '@tanstack/react-query';
import LetterLengthDate from '@/components/LetterLengthDate';
import LetterCard from '@/components/LetterCard';
import memberOptions from '@/api/member/queryOptions';
import LetterHeader from '@/components/LetterHeader';
import {
  LetterReceiverContainer,
  LetterContent,
  PolaroidImage,
  ImageSelect,
} from '..';
import { type WriteInputs } from '../..';

const LetterPaper = () => {
  const { watch } = useFormContext<WriteInputs>();
  const { data: member } = useSuspenseQuery(memberOptions.detail());

  return (
    <LetterCard isOpen={true}>
      <LetterReceiverContainer />
      <LetterContent />
      <LetterLengthDate letterLength={watch('content').length} />
      <LetterHeader
        title="From"
        titlePosition="right"
        nickname={member.nickname ?? '유저'}
      />
      {watch('image') ? <PolaroidImage /> : <ImageSelect />}
    </LetterCard>
  );
};

export default LetterPaper;
