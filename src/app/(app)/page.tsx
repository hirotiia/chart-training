import { Button } from '@/components/ui/button';
import { config } from '@/config/config';

const TopPage = () => {
  return (
    <>
      <h1>{config.APP_NAME}</h1>
      <Button size="lg" variant="muted">
        クリック
      </Button>
    </>
  );
};

export default TopPage;
