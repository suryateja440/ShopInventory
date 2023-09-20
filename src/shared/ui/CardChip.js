import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

const CardList = (props) => {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: "75%",
        m: 1,
        marginLeft: 1,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >

      <CardContent>
        <Typography align="center" gutterBottom level="title-lg" component="div">
          {props.headingMain}
        </Typography>
        <Typography align="center" variant="body2" color="text.tertiary">
          {props.headingSec}
        </Typography>
        <div sx={{ textAlign: "left" }}>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: 'none', marginTop: -2 }}
          >

            {props.roundLink}
          </Chip>


          <Tooltip title="Edit">
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="primary"
              size="lm"
              sx={{ m: 1 }}
            >
              <EditNoteOutlinedIcon />
            </IconButton>
          </Tooltip>


        </div>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          textAlign: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >

        {props.sideCardOverFlow}
      </CardOverflow>
    </Card>
  );
}
export default CardList;