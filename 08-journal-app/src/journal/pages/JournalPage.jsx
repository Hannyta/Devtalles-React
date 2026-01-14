import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layaout/JournalLayout';
import { NothingSelectedView } from '../views';


export const JournalPage = () => {
  return (
      <JournalLayout>
        <NothingSelectedView/>

        <IconButton
          sixe='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
  )
}
