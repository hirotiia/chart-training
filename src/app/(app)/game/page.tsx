import { nanoid } from 'nanoid';

import { ContentLayout } from '@/components/layouts/content-layout';
import { Button } from '@/components/ui/button';
import { TextLead } from '@/components/ui/text';
import { QuestionViews } from '@/features/questions/components/question-views';

const GamePage = () => {
  const questions = [
    { id: nanoid(), title: '問題１' },
    { id: nanoid(), title: '問題2' },
    { id: nanoid(), title: '問題3' },
    { id: nanoid(), title: '問題4' },
    { id: nanoid(), title: '問題5' },
  ];
  return (
    <ContentLayout title="ゲーム開始">
      <TextLead>
        問題は全部で５つあります。
        <br /> 全てに回答してスコアを確認してみましょう！
      </TextLead>
      <div className="mt-10 grid gap-4 md:mt-14">
        {questions.map((question) => (
          <QuestionViews
            key={question.id}
            id={question.id}
            title={question.title}
          />
        ))}
      </div>
      <div className="mt-20 grid place-content-center">
        <Button size="lg">スコアを確認する</Button>
      </div>
    </ContentLayout>
  );
};

export default GamePage;
