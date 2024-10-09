import { Card } from '@/components/ui/card';
import { ChartView } from '@/features/charts/components/chart-view';

type QuestionViewProps = {
  title: string;
};

export const QuestionView = ({ title }: QuestionViewProps) => {
  return (
    <Card title={title}>
      <ChartView></ChartView>
    </Card>
  );
};
