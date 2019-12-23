import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/core/styles';

export const BoardContainer = styled.div`
  display: flex;
  flex-flow: 'row';
`;

export const CompleteColumn = styled.div`
  display: 'flex';
  flex-flow: 'column';
`;

export const Questions = styled.div`
  display: 'flex';
  flex-flow: 'column';
`;

// materialize
export const useStyles = makeStyles({
  card: {
    padding: '1rem',
    margin: '0.2rem',
    backgroundColor: 'blue',
    color: 'yellow',
    minHeight: '3rem',
    minWidth: '9rem',
  },
});
