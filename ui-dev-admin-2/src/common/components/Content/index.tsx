import { Divider } from '@material-ui/core';
import ContentHeader from 'common/components/Content/Header';
import ContentBody from 'common/components/Content/Body';

type Props = {
  title: string;
  handleRefresh: () => void;
  children: JSX.Element;
};

function Content({ title, handleRefresh, children }: Props) {
  return (
    <div>
      <ContentHeader title={title} handleRefresh={handleRefresh} />
      <Divider />
      <ContentBody>{children}</ContentBody>
    </div>
  );
}

export default Content;
