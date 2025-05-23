import DashboardCard from '@/app/components/back/shared/DashboardCard'
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab'
import { Link, Typography } from '@mui/material'

const RecentTransactions = () => {
  return (
    <DashboardCard title="Recent Transactions">
      <>
          <Timeline
            className='theme-timeline'
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            sx={{
              p: 0,
              mb: '-40px',
              '& .MuiTimelineConnector-root': {
                width: '1px',
                backgroundColor: '#efefef'
              }
            }}
          ></Timeline>
      </>
    </DashboardCard>
  )
}